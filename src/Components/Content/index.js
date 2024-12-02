import { AppBar, Box, Paper, Switch, Toolbar, Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { useContext, useState } from 'react'
import { FLIGHT_TYPE } from '../../Constant'
import { FlightContext } from '../../Contexts/FlightProvider'
import Reservation from '../Reservation'
import { objectToQueryString } from '../../Utils'
import Service from '../../Service/Api'
import FlightDetail from '../Flight'
import PageLoader from '../Loader'
import Placeholder from '../Placeholder'

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
    margin: 'auto',
    marginTop: '100px'
  }
}))

const Content = () => {
  const { mode, setMode, flightData, setFlightData, reservation } = useContext(FlightContext)
  const classes = useStyles()
  const [flightType, setFlightType] = useState(Object.keys(FLIGHT_TYPE)[0])
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
    if(reservation.originSkyId === null && reservation.originEntityId === null ) {
      console.log('error')
      return
    }
    if(reservation.destinationSkyId === null || reservation.destinationEntityId === null ) {
      console.log('error')
      return
    }
    if(reservation.cabinClass === null ) {
      console.log('error')
      return
    }
    if(reservation.date === null ) {
      console.log('error')
      return
    }
    const queryParams = objectToQueryString(reservation)
    getFlights(queryParams)
  }

  return (
    <main className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Switch onChange={() => setMode(mode === "light" ? "dark" : "light")} />
        </Toolbar>
      </AppBar>
      <Box 
        className={classes.appContainer} 
        spacing={2}>
        <Reservation flightType={flightType} handleFlightType={handleFlightType} handleSearch={handleSearch} />
        <Typography variant="h6" gutterBottom>
            -
        </Typography>
        <Paper elevation={0}>
          { loading ? 
            (
              <PageLoader />
            ) : (
              <>
                { !! flightData && flightData?.itineraries ?
                  (
                    <FlightDetail data={flightData.itineraries} />
                  ) : 
                  (
                    <Placeholder />
                  ) 
                } 
              </>
            )
          }
        </Paper>
      </Box>
    </main>
  )
}

export default Content