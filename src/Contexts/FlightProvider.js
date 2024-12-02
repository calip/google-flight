import { createContext, useState } from "react"

export const FlightContext = createContext()

export const FlightProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const [flightData, setFlightData] = useState([])
  const [reservation, setReservation] = useState({
    originSkyId: null,
    destinationSkyId: null,
    originEntityId: null,
    destinationEntityId: null,
    cabinClass: null,
    adults: 1,
    sortBy: 'best',
    currency: 'USD',
    market: 'en-US',
    countryCode: 'US',
    date: null
  })

  return (
    <FlightContext.Provider 
      value={{
        mode,
        setMode,
        reservation,
        setReservation,
        flightData,
        setFlightData,
      }}>
      {children}
    </FlightContext.Provider>
  )
}
