import { Accordion, AccordionSummary, AppBar, Autocomplete, Avatar, Box, Button, CircularProgress, FormControl, ListItem, ListItemAvatar, ListItemText, Menu, MenuItem, Paper, Stack, TextField, Toolbar, Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const FLIGHT_TYPE = {
  TYPE_1: "One Way",
  TYPE_2: "Round Trip",
}

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
}))

const Content = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [type, setType] = useState('TYPE_1')
  const [loading, setLoading] = useState(false)

  const open = Boolean(anchorEl);
  const id = open ? 'simple-menu' : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value) => {
    setType(value)
    setAnchorEl(null);
  }

  useEffect(() => {
    // setData(type)
    console.log(type)
  }, [type])

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
      <Box sx={{ maxWidth: 1024, margin: 'auto' }} spacing={2}>
        <Paper sx={{ padding: 2 }}>
          <Stack sx={{ 
            marginBottom: 1,
            display: 'inline-block',
            marginTop: 0,
            maxWidth: '100%'
          }}>
            <FormControl variant="standard">
              <Button aria-describedby={id} variant="contained" onClick={handleClick} >
                <Typography textAlign="center">{FLIGHT_TYPE[type]}</Typography>
              </Button>
              <Menu
                id={id}
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                { Object.keys(FLIGHT_TYPE).map((type) => (
                  <MenuItem key={type} onClick={() => handleClose(type)}>{FLIGHT_TYPE[type]}</MenuItem>
                ))}
              </Menu>
            </FormControl>
            <FormControl variant="standard">
              <Button aria-describedby={id} variant="contained" onClick={handleClick} >
                <Typography textAlign="center">Total</Typography>
              </Button>
              <Menu
                id={id}
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={() => {}}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <MenuItem key={type} onClick={() => {}}>Adults</MenuItem>
              </Menu>
            </FormControl>
            <FormControl variant="standard">
              <Button aria-describedby={id} variant="contained" onClick={handleClick} >
                <Typography textAlign="center">Class</Typography>
              </Button>
              <Menu
                id={id}
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={() => {}}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <MenuItem key={type} onClick={() => {}}>Economy</MenuItem>
              </Menu>
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