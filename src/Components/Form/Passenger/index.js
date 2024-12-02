import { useEffect, useState } from "react";
import { FLIGHT_PASSENGER } from '../../../Constant'
import { 
  Popover, 
  Stack, 
  Typography, 
  Grid2 as Grid, 
  IconButton, 
  Button 
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import PersonIcon from '@mui/icons-material/Person'

const FormPassenger = ({ setData }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [passenger, setPassenger] = useState(FLIGHT_PASSENGER)
  const [total, setTotal] = useState(0)

  const open = Boolean(anchorEl);
  const id = open ? 'flight-pax' : undefined

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleIncrease = (index) => {
    let data = [...passenger]

    data[index]['amount'] += 1
    setPassenger(data)
  }

  const handleDecrease = (index) => {
    let data = [...passenger]

    if (data[index]['amount'] >= 1) {
      data[index]['amount'] -= 1
      setPassenger(data)
    }
  }

  useEffect(() => {
    const sum = passenger.map(item => item.amount)
      .reduce((prev, next) => prev + next)

    setTotal(sum)
    setData(passenger)
  }, [passenger])

  return (
    <>
      <Button
        aria-describedby={id} 
        startIcon={<PersonIcon />} 
        variant="contained" 
        onClick={handleClick}>
        <Typography textAlign="center">
          {total}
        </Typography>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}>
        <Stack>
          { passenger.map((pax, index) => {
            return (
              <Grid
                container
                spacing={2}
                sx={{ p: 2 }}
                key={index}>
                <Grid size={5}>
                  <Typography>{pax.type}</Typography>
                </Grid>
                <Grid>
                  <IconButton aria-label="delete" size="small" color="error" onClick={() => handleDecrease(index)}>
                    <RemoveIcon fontSize="inherit" />
                  </IconButton>
                </Grid>
                <Grid>
                  <Typography textAlign="center">{pax.amount}</Typography>
                </Grid>
                <Grid>
                  <IconButton aria-label="add" size="small" color="info" onClick={() => handleIncrease(index)}>
                    <AddIcon fontSize="inherit" />
                  </IconButton>
                </Grid>
              </Grid>
            ) 
          })}
        </Stack>
      </Popover>
    </>
  )
}

export default FormPassenger