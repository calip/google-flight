import { AppBar, Box, Paper, Switch, Toolbar, Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { useContext, useState } from 'react'
import { FLIGHT_TYPE } from '../../Constant'
import { FlightContext } from '../../Contexts/FlightProvider'
import Reservation from '../Reservation'
import { objectToQueryString } from '../../Utils'
import Service from '../../Service/Api'
import FlightDetail from '../Flight'

const ENDPOINT = 'searchFlights'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    height: '100vh',
    position: 'relative'
  },
  appBar: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.secondary.borderColor,
    ...theme.applyStyles('dark', {
      borderColor: theme.palette.primary.borderColor,
    })
  },
  appContainer: {
    maxWidth: 1024, 
    margin: 'auto'
  }
}))

const Content = () => {
  const { mode, setMode, flightData, setFlightData, reservation } = useContext(FlightContext)
  const classes = useStyles()
  const [flightType, setFlightType] = useState(Object.keys(FLIGHT_TYPE)[0])
  const [expanded, setExpanded] = useState(false)
  const [loading, setLoading] = useState(false)

  

  const handleFlightType = (value) => {
    setFlightType(value);
  }


  const getFlights = (queryParams) => {
    setLoading(true)

    Service.getData(`${ENDPOINT}?${queryParams}`).then(result => {
      setFlightData(result.data);
      setLoading(false)
    })
  }

  const handleSearch = () => {
    // if(reservation.originSkyId || reservation.originEntityId) {

    //   return
    // }
    const queryParams = objectToQueryString(reservation)
    console.log(queryParams)
    getFlights(queryParams)
  }

  const handleExpandItem = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }

  return (
    <main className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Switch onChange={() => setMode(mode === "light" ? "dark" : "light")} />
        </Toolbar>
      </AppBar>
      <Box sx={{ margin: '0 auto 40px', maxWidth: 1248, position: 'relative' }}>
        <Box sx={{ maxWidth: 1248, overflow: 'hidden', position: 'relative' }}>
          Flights
        </Box>
      </Box>
      <Box 
        className={classes.appContainer} 
        spacing={2}>
        <Reservation flightType={flightType} handleFlightType={handleFlightType} handleSearch={handleSearch} />
        <Typography variant="h6" gutterBottom>
            -
        </Typography>
        <Paper elevation={0}>
          { !! flightData && flightData?.itineraries ? 
            (
              <FlightDetail data={flightData.itineraries} />
            ) : 
            (
              <Typography variant="h6" gutterBottom>
                Find flights to anywhere
              </Typography>) 
            }
        </Paper>
      </Box>
    </main>
  )
}

export default Content