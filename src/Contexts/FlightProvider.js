import { createContext, useState } from "react";

export const FlightContext = createContext();

export const FlightProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [flights, setFlights] = useState([]);

  return (
    <FlightContext.Provider 
      value={{ 
        isLoading,
        flights 
      }}>
      {children}
    </FlightContext.Provider>
  );
};
