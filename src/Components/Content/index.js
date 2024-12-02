import { Accordion, AccordionSummary, AppBar, Autocomplete, Avatar, Box, Button, CircularProgress, Container, FormControl, ListItem, ListItemAvatar, ListItemText, Menu, MenuItem, Paper, Stack, TextField, Toolbar, Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FormPassenger from '../Form/Passenger'
import { FLIGHT_TYPE, FLIGHT_CLASS } from '../../Constant'
import FormSelect from '../Form/Select'

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
  const classes = useStyles()
  const [loading, setLoading] = useState(false)


  return (
    <main className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>Header</Toolbar>
      </AppBar>
      <Box sx={{ margin: '0 auto 40px', maxWidth: 1248, position: 'relative' }}>
        <Box sx={{ maxWidth: 1248, overflow: 'hidden', position: 'relative' }}>
          Flights
        </Box>
      </Box>
      <Box 
        className={classes.appContainer} 
        spacing={2}>
        <Paper sx={{ padding: 2 }}>
          <Stack 
            direction="row" 
            spacing={2} 
            sx={{ marginBottom: 1 }}>
            <FormControl variant="standard" sx={{ m: 1 }}>
              <FormSelect setData={() => {}} defaultData={FLIGHT_TYPE} name="flight-type" icon={<SyncAltIcon />} />
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1 }}>
              <FormPassenger setData={() => {}} />
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1 }}>
              <FormSelect setData={() => {}} defaultData={FLIGHT_CLASS} name="flight-class" />
            </FormControl>
          </Stack>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}>
            <FormControl fullWidth>
              <Autocomplete
                id="combo-box-demo"
                noOptionsText={"Type something..."}
                options={[]}
                loading={false}
                onChange={() => {}}
                onInputChange={() => {}}
                isOptionEqualToValue={(option, value) => option.presentation.suggestionTitle === value.presentation.suggestionTitle}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={"title"}
                    slotProps={{
                      input: {
                        ...params.InputProps,
                        endAdornment: (
                          <>
                            {loading ? <CircularProgress color="inherit" size={20} /> : null}
                            {params.InputProps.endAdornment}
                          </>
                        ),
                      },
                    }}
                  />
                )}
              />
            </FormControl>
            <Typography sx={{ textAlign: 'center'}}>
              <SyncAltIcon sx={{ height: '100%' }} fontSize="inherit" />
            </Typography>
            <FormControl fullWidth>
              <Autocomplete
                id="combo-box-demo"
                noOptionsText={"Type something..."}
                options={[]}
                loading={false}
                onChange={() => {}}
                onInputChange={() => {}}
                isOptionEqualToValue={(option, value) => option.presentation.suggestionTitle === value.presentation.suggestionTitle}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={"title"}
                    slotProps={{
                      input: {
                        ...params.InputProps,
                        endAdornment: (
                          <>
                            {loading ? <CircularProgress color="inherit" size={20} /> : null}
                            {params.InputProps.endAdornment}
                          </>
                        ),
                      },
                    }}
                  />
                )}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField name="flight-date" id="flight-date" type="date" label="Depart" variant="outlined" />
            </FormControl>
            <Button variant="contained" onClick={() => {}}>
              <SearchIcon />
            </Button>
          </Stack>
        </Paper>
        <Typography variant="h6" gutterBottom>
            -
        </Typography>
        <Paper elevation={0}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="images.png" />
                </ListItemAvatar>
                <ListItemText
                  primary={'Emirates'}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: 'text.primary', display: 'inline' }}
                      >
                        Fly Emirates
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            </AccordionSummary>
          </Accordion>
        </Paper>
      </Box>
    </main>
  )
}

export default Content