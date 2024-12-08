import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// Sample weather data
const weatherData = [
  {
    location: 'Garden',
    temperature: '24°C',
    sunlight: 'Full Sun',
    humidity: '60%',
    windSpeed: '5 km/h'
  },
  {
    location: 'Greenhouse',
    temperature: '20°C',
    sunlight: 'Partial Shade',
    humidity: '70%',
    windSpeed: '2 km/h'
  },
  {
    location: 'Balcony',
    temperature: '22°C',
    sunlight: 'Full Sun',
    humidity: '55%',
    windSpeed: '3 km/h'
  },
  {
    location: 'Indoor Plant',
    temperature: '18°C',
    sunlight: 'Low Light',
    humidity: '50%',
    windSpeed: 'Calm'
  }
];

const WeatherMonitoring = () => {
  return (
    <div>
      {/* Centered Side Heading with margin above */}
      <Typography
        variant="h4"
        align="center"
        sx={{ color: 'black', marginBottom: 4, marginTop: 4 }} // Adds black color and space above/below the heading
      >
        WEATHER MONITORING
      </Typography>

      <Grid
        container
        spacing={2}
        justifyContent="center"  // Center horizontally
        alignItems="center"  // Center vertically
        style={{ minHeight: '100vh' }}  // Full height of viewport for vertical centering
      >
        {weatherData.map((weather, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, margin: 'auto' }}> {/* Center each card */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" align="center"> {/* Center text */}
                  {weather.location}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} align="center">
                  Temperature: {weather.temperature}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} align="center">
                  Sunlight: {weather.sunlight}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} align="center">
                  Humidity: {weather.humidity}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} align="center">
                  Wind Speed: {weather.windSpeed}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default WeatherMonitoring;
