import { useRef, useState } from "react";
import { 
  Autocomplete,
  CircularProgress, 
  TextField,
} from "@mui/material";
import Service from "../../../Service/Api";

const API_URL = 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?query='

const FormAirport = ({ title, setData, name }) => {
  const [options, setOptions] = useState([])
  const [loading, setLoading] = useState(false)

  const getAirports = (searchTerm) => {
    setLoading(true)

    Service.getData(`${API_URL}${searchTerm}`).then(result => {
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
    setData(value)
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
        isOptionEqualToValue={(option, value) => option.presentation.suggestionTitle === value.presentation.suggestionTitle}
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