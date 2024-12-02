import { Accordion, AccordionDetails, AccordionSummary, AppBar, Autocomplete, Avatar, Box, Button, CircularProgress, Container, Divider, FormControl, ListItem, ListItemAvatar, ListItemText, Menu, MenuItem, Paper, Stack, Switch, TextField, Toolbar, Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { useContext, useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FormPassenger from '../Form/Passenger'
import { FLIGHT_TYPE, FLIGHT_CLASS } from '../../Constant'
import FormAirport from '../Form/Airport'
import { FlightContext } from '../../Contexts/FlightProvider'
import FormType from '../Form/Type'
import FormClass from '../Form/Class'
import FormDepartDate from '../Form/DepartDate'
import FormReturnDate from '../Form/ReturnDate'
import Reservation from '../Reservation'

const API_URL = 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights?'

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
  const { mode, setMode, flightData, setFlightData, reservation, setReservation } = useContext(FlightContext)
  const classes = useStyles()
  const [flightType, setFlightType] = useState(Object.keys(FLIGHT_TYPE)[0])
  const [expanded, setExpanded] = useState(false)
  const [loading, setLoading] = useState(false)


  const handleFlightType = (value) => {
    setFlightType(value);
  }


  useEffect(() => {
    console.log('reservation', reservation)
  }, [reservation])

  const handleSearch = () => {
    // if(reservation.originSkyId || reservation.originEntityId) {

    //   return
    // }
    // const queryParams = objectToQueryString(reservation)
    // getFlights(queryParams)
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
        <Reservation flightType={flightType} handleFlightType={handleFlightType} searchFn={handleSearch} />
        <Typography variant="h6" gutterBottom>
            -
        </Typography>
        <Paper elevation={0}>
          {/* { !! flightData && flightData?.itineraries?.map((flight, index) => {
            const departureDate = new Date(flight.legs[0].departure)
            const arrivalDate = new Date(flight.legs[0].arrival)
            return (
              <Accordion key={index} expanded={expanded === index} onChange={handleExpandItem(index)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt={flight.legs[0].carriers.marketing[0].logoUrl} src={flight.legs[0].carriers.marketing[0].logoUrl}/>
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${dateFormatter.format(departureDate)} - ${dateFormatter.format(arrivalDate)} + ${flight.legs[0].timeDeltaInDays}`}
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: 'text.primary', display: 'inline' }}
                          >
                            {flight.legs[0].carriers.marketing[0].name}
                          </Typography>
                        </>
                      }
                    />
                    <ListItemText
                        primary={`${Math.floor(flight.legs[0].durationInMinutes /60)} hr ${flight.legs[0].durationInMinutes % 60} min`}
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: 'text.primary', display: 'inline' }}
                          >
                            {`${flight.legs[0].origin.displayCode} - ${flight.legs[0].destination.displayCode}`}
                          </Typography>
                        </>
                      }
                    />
                    <ListItemText
                      primary={`${flight.legs[0].stopCount} Stop`}
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: 'text.primary', display: 'inline' }}
                          >
                            {`${Math.floor(flight.legs[0].segments[0].durationInMinutes / 60 )} hr ${flight.legs[0].segments[0].durationInMinutes % 60} min ${flight.legs[0].segments[0].destination.displayCode}`}
                          </Typography>
                        </>
                      }
                    />
                    <ListItemText
                      primary={`${flight.price.formatted}`}
                      />
                  </ListItem>
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                  <Stack>
                    { flight.legs[0].segments.map((segment, segIndex) => {
                      return (
                        <>
                          <ListItem alignItems="flex-start">
                            <ListItemText
                              key={segIndex}
                              primary={`${segment.destination.name} (${segment.destination.displayCode})`}
                              secondary={
                                <>
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    sx={{ color: 'text.primary', display: 'inline' }}
                                  >
                                  asds
                                  </Typography>
                                </>
                              }
                            />
                          </ListItem>
                          <Divider />
                        </>
                      )
                    })}
                  </Stack>
                </AccordionDetails>
              </Accordion>
            )
          })} */}
        </Paper>
      </Box>
    </main>
  )
}

export default Content