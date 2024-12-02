import { Paper, Skeleton } from "@mui/material"

const PageLoader = () => {
  return (
    <>
      <Paper sx={{ padding: 2 }}>
        <Skeleton height={60} />
        <Skeleton height={60} />
        <Skeleton height={60} />
      </Paper>  
    </>
  )
}

export default PageLoader