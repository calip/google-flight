import { useState } from "react";
import { 
  Button, 
  Menu, 
  MenuItem, 
  Typography 
} from "@mui/material";

const FormSelect = ({ setData, defaultData, name, icon }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [type, setType] = useState(Object.keys(defaultData)[0])

  const open = Boolean(anchorEl)
  const id = open ? name : undefined

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (value) => {
    setType(value)
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        aria-describedby={id} 
        startIcon={!! icon ? icon : ''} 
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

export default FormSelect