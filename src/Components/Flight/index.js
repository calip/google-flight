import { Accordion, AccordionDetails, AccordionSummary, Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { dateFormatter } from "../../Utils";


const FlightDetail = ({ data }) => {
  const [expanded, setExpanded] = useState(false)

  const handleExpandItem = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }

  return (
    <>
      { data.map((flight, index) => {
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
                  primary={`${dateFormatter.format(new Date(flight.legs[0].departure))} - ${dateFormatter.format(new Date(flight.legs[0].arrival))} + ${flight.legs[0].timeDeltaInDays}`}
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
                  primary={`${flight.legs[0].stopCount > 0 ? `${flight.legs[0].stopCount} Stop`: ''}`}
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
      })}
    </>
  )
}

export default FlightDetail
