import { useContext, useEffect } from "react"
import { FlightContext } from "../../../Contexts/FlightProvider"
import { TextField } from "@mui/material"

const FormReturnDate = () => {
  const { setReservation, reservation } = useContext(FlightContext)

  useEffect(() => {
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() + 1)

    setReservation(prevState => ({
      ...prevState,
      ['returnDate']: defaultDate.toISOString().split('T')[0]
    }))
  }, [])
  
  const handleDateChange = (event) => {
    const date = new Date(event.target.value)
    
    setReservation(prevState => ({
      ...prevState,
      ['returnDate']: date.toISOString().split('T')[0]
    }))
  }

  return (
    <>
      { !!reservation && !! reservation.returnDate ? (
        <TextField name="return-date" value={reservation.returnDate} onChange={handleDateChange} type="date" label="Return" variant="outlined" />
      ) : (<></>) }
    </>
  )
}

export default FormReturnDate