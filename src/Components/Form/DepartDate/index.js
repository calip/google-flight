import { useContext, useEffect, useState } from "react"
import { FlightContext } from "../../../Contexts/FlightProvider"
import { TextField } from "@mui/material"

const FormDepartDate = () => {
  const { setReservation, reservation } = useContext(FlightContext)

  useEffect(() => {
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate())

    setReservation(prevState => ({
      ...prevState,
      ['date']: defaultDate.toISOString().split('T')[0]
    }))
  }, [])
  
  const handleDateChange = (event) => {
    const date = new Date(event.target.value)
    
    setReservation(prevState => ({
      ...prevState,
      ['date']: date.toISOString().split('T')[0]
    }))
  }

  return (
    <>
      { !!reservation && !! reservation.date ? (
        <TextField name="flight-date" value={reservation.date} onChange={handleDateChange} type="date" label="Depart" variant="outlined" />
      ) : (<></>) 
      }
    </>
  )
}

export default FormDepartDate