import ReservationOption from "./Option"
import ReservationForm from "./Form"
import { Paper } from "@mui/material"

const Reservation = ({ flightType, handleFlightType, searchFn}) => {
  return (
    <>
      <Paper sx={{ padding: 2 }}>
        <ReservationOption handleType={handleFlightType} />
        <ReservationForm flightType={flightType} searchFn={searchFn} />
      </Paper>
    </>
  )
}

export default Reservation