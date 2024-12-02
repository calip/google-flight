import { useContext, useRef, useState } from "react";
import { 
  Autocomplete,
  CircularProgress, 
  TextField,
} from "@mui/material";
import Service from "../../../Service/Api";
import { FlightContext } from "../../../Contexts/FlightProvider";

const ENDPOINT = 'searchAirport'

const FormAirport = ({ title, name }) => {
  const { setReservation } = useContext(FlightContext)
  const [options, setOptions] = useState([])
  const [loading, setLoading] = useState(false)

  const getAirports = (searchTerm) => {
    setLoading(true)

    Service.getData(`${ENDPOINT}?query=${searchTerm}`).then(result => {
      setOptions(result.data);
      setLoading(false)
    })
  }

  const onInputChange = (event, value, reason) => {
    if (value && options.length <= 0) {
      getAirports(value)
    } else {
      setOptions([])
    }
  };

  const onSelectedChange = (event, value) => {
    const skyId = name === 'flight-origin' 
      ? 'originSkyId' : 'destinationSkyId'
    const entityId = name === 'flight-destination' 
      ? 'originEntityId' : 'destinationEntityId'
    
    setReservation(prevState => ({
      ...prevState,
      [skyId]: value.skyId,
      [entityId]: value.entityId
    }))
  }
  
  return (
    <>
      <Autocomplete
        id={name}
        noOptionsText={"Type something..."}
        options={options}
        loading={loading}
        onChange={onSelectedChange}
        onInputChange={onInputChange}
        getOptionLabel={(option) => option.presentation.suggestionTitle}
        renderInput={(params) => (
          <TextField
            {...params}
            label={title}
            slotProps={{
              input: {
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              },
            }}
          />
        )}
      />
    </>
  )
}

export default FormAirport