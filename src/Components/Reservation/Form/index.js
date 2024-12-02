import { Button, FormControl, Stack, Typography } from "@mui/material"
import FormAirport from "../../Form/Airport"
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import SearchIcon from '@mui/icons-material/Search'
import FormDepartDate from "../../Form/DepartDate"
import FormReturnDate from "../../Form/ReturnDate"

const ReservationForm = ({ flightType, searchFn }) => {
  return (
    <>
      <Stack 
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}>
        <FormControl fullWidth error>
          <FormAirport title="Origin" name="flight-origin" />
        </FormControl>
        <Typography sx={{ textAlign: 'center'}}>
          <SyncAltIcon sx={{ height: '100%' }} fontSize="inherit" />
        </Typography>
        <FormControl fullWidth>
          <FormAirport title="Destination" name="flight-destination" />
        </FormControl>
        <FormControl fullWidth>
          <FormDepartDate />
        </FormControl>
        { flightType === 'TYPE_2' ? (
          <FormControl fullWidth>
            <FormReturnDate />
          </FormControl>
          ) : (<></>)}
        <Button variant="contained" onClick={searchFn}>
          <SearchIcon />
        </Button>
      </Stack>
    </>
  )
}

export default ReservationForm
