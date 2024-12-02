import { FormControl, Stack } from "@mui/material"
import FormPassenger from "../../Form/Passenger"
import FormClass from "../../Form/Class"
import { FLIGHT_CLASS, FLIGHT_TYPE } from "../../../Constant"
import FormType from "../../Form/Type"

const ReservationOption = ({ handleType }) => {
  return (
    <>
      <Stack
        direction="row" 
        spacing={2} 
        sx={{ marginBottom: 2 }}>
        <FormControl variant="standard" sx={{ m: 1 }}>
          <FormType setData={handleType} defaultData={FLIGHT_TYPE} name="flight-type" />
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1 }}>
          <FormPassenger name="flight-passenger" />
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1 }}>
          <FormClass defaultData={FLIGHT_CLASS} name="flight-class" />
        </FormControl>
      </Stack>
    </>
  )
}

export default ReservationOption
