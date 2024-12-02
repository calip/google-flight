import ReservationOption from "./Option"
import ReservationForm from "./Form"
import { Button, Paper, Stack } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'

const Reservation = ({ flightType, handleFlightType, handleSearch}) => {

  return (
    <>
      <Paper sx={{ padding: 2 }}>
        <ReservationOption handleType={handleFlightType} />
        <ReservationForm flightType={flightType} />
        <Stack
        direction="row" 
        spacing={2} 
        sx={{ marginTop: 2, justifyContent: 'center' }}>
          <Button variant="contained" onClick={handleSearch}>
            <SearchIcon /> Explore
          </Button>
        </Stack>
      </Paper>
    </>
  )
}

export default Reservation