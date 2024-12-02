import { useContext, useEffect, useState } from "react"
import { createTheme, ThemeProvider } from "@mui/material"
import CssBaseline from '@mui/material/CssBaseline'
import Content from "../Components/Content"
import { FlightContext } from "../Contexts/FlightProvider"

const Home = (props) => {
  const { mode } = useContext(FlightContext)

  const muiTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#1976d2',
        contrastText: 'white',
        borderColor: '#5f6368'
      },
      secondary: {
        main: '#03a9f4',
        contrastText: 'white',
        borderColor: '#000'
      },
    },
  })

  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Content {...props} />
      </ThemeProvider>
    </>
  )
}

export default Home