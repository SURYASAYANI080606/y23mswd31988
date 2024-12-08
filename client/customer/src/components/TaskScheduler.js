import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const wateringSchedule = [
  {
    name: 'Rose',
    wateringFrequency: 'Every 2 days',
    notes: 'Water early in the morning or late afternoon.',
    soilType: 'Loamy soil'
  },
  {
    name: 'Tulip',
    wateringFrequency: 'Once a week',
    notes: 'Keep the soil moist but not soggy.',
    soilType: 'Well-drained sandy soil'
  },
  {
    name: 'Lavender',
    wateringFrequency: 'Every 2 weeks',
    notes: 'Allow soil to dry out between waterings.',
    soilType: 'Sandy or gravelly soil'
  },
  {
    name: 'Mint',
    wateringFrequency: 'Every 5 days',
    notes: 'Keep the soil consistently moist.',
    soilType: 'Rich, moist soil'
  },
  {
    name: 'Cactus',
    wateringFrequency: 'Once a month',
    notes: 'Water sparingly; allow soil to dry completely.',
    soilType: 'Well-draining sandy soil'
  },
  {
    name: 'Basil',
    wateringFrequency: 'Every 3-4 days',
    notes: 'Water thoroughly but allow the soil to dry slightly.',
    soilType: 'Moist, rich soil'
  },
  {
    name: 'Aloe Vera',
    wateringFrequency: 'Every 2-3 weeks',
    notes: 'Water only when the top inch of soil is dry.',
    soilType: 'Sandy or gravelly soil'
  },
  {
    name: 'Orchid',
    wateringFrequency: 'Once a week',
    notes: 'Mist leaves; avoid water on flowers.',
    soilType: 'Orchid potting mix'
  },
  {
    name: 'Sunflower',
    wateringFrequency: 'Every 2-3 days',
    notes: 'Water deeply; keep soil moist during growth.',
    soilType: 'Well-draining soil'
  }
];

export default function TaskScheduler() {
  return (
    <div>
      {/* Centered Side Heading with margin above */}
      <Typography
        variant="h4"
        align="center"
        sx={{ color: 'black', marginBottom: 4, marginTop: 4 }} // Adds black color and space above/below the heading
      >
        TASK SCHEDULER
      </Typography>

      <Grid
        container
        spacing={2}
        justifyContent="center"  // Center horizontally
        alignItems="center"  // Center vertically
        style={{ minHeight: '100vh' }}  // Full height of viewport for vertical centering
      >
        {wateringSchedule.map((task, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, margin: 'auto' }}> {/* Center each card */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" align="center"> {/* Center text */}
                  {task.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} align="center">
                  Watering Frequency: {task.wateringFrequency}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} align="center">
                  Soil Type: {task.soilType}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} align="center">
                  Notes: {task.notes}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
