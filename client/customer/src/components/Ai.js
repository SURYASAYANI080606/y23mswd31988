import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Ai = () => {
  return (
    <div>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: 'black', marginBottom: 4, marginTop: 4 }} // Adds black color and space above/below the heading
      >
        AI in Plant Care
      </Typography>

      <Grid 
        container 
        spacing={2} 
        justifyContent="center"  // Center horizontally
        alignItems="center"  // Center vertically
        style={{ minHeight: '100vh' }}  // Full height of viewport for vertical centering
      >
        <Grid item xs={12} sm={8} md={6}>
          <Card sx={{ maxWidth: 600, margin: '  ' }}> {/* Center each card */}
            <CardContent>
              <Typography variant="body1" align="center">
                Artificial Intelligence (AI) is transforming plant care by offering innovative solutions that simplify gardening. Through advanced algorithms and sensors, AI can monitor soil conditions, optimize watering schedules, and detect pests or diseases early. This technology provides gardeners with valuable insights, allowing them to make informed decisions and ensure their plants thrive. By automating routine tasks and enhancing plant health management, AI not only saves time but also fosters a deeper connection between people and nature.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Ai;
