import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

export const App = () => {
  return (
    <div>
      <Container maxwidth = "lg">
        <AppBar position="static" color="inherit">
          <Typography variant="h2" align="center">Book Reviews</Typography>
        </AppBar>
      </Container>
    </div>
  )
}

export default App