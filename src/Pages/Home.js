import { useEffect, useState } from "react"
import Service from "../Service/Api"
import { createTheme, ThemeProvider } from "@mui/material"
import CssBaseline from '@mui/material/CssBaseline'
import Content from "../Components/Content"

const muiTheme = createTheme({
  palette: {
    mode: 'dark',
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

const Home = (props) => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true)
    // Service.getData().then(result => 
    //   {
    //     console.log(result)
    //     setLoading(false)
    //   })
  }, [])

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