import { useContext, useEffect, useState } from "react";
import { 
  Button, 
  Menu, 
  MenuItem, 
  Typography 
} from "@mui/material";
import { FlightContext } from "../../../Contexts/FlightProvider";

const FormClass = ({ defaultData, name }) => {
  const { setReservation } = useContext(FlightContext)
  const [anchorEl, setAnchorEl] = useState(null);
  const [type, setType] = useState(null)

  const open = Boolean(anchorEl)
  const id = open ? name : undefined

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (value) => {
    setType(value)
    setAnchorEl(null)
  }

  useEffect(() => {
    if ( !! defaultData ) {
      setType(Object.keys(defaultData)[0])
    }
  }, [])

  useEffect(() => {
    if ( !! type ) {
      setReservation(prevState => ({
        ...prevState,
        ['cabinClass']: type
      }))
    }
  }, [type])

  return (
    <>
      <Button
        aria-describedby={id} 
        variant="contained" 
        onClick={handleClick}>
        <Typography textAlign="center">
          {defaultData[type]}
        </Typography>
      </Button>
      <Menu
        id={id}
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        { Object.keys(defaultData).map((type) => (
          <MenuItem key={type} onClick={() => handleClose(type)}>{defaultData[type]}</MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default FormClass