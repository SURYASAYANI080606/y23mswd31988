import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';

const plantData = [
  {
    name: 'Rose',
    scientificName: 'Rosa',
    soil: 'Well-drained, loamy soil',
    imageUrl: 'https://i.pinimg.com/564x/58/6d/9f/586d9fcbbaabc3f7ca73b015ba0a002b.jpg'
  },
  {
    name: 'Tulip',
    scientificName: 'Tulipa',
    soil: 'Well-drained soil',
    imageUrl: 'https://i.pinimg.com/564x/85/64/03/856403a46bd40a85259f7c2e80edec7a.jpg '
  },
  {
    name: 'Lavender',
    scientificName: 'Lavandula',
    soil: 'Sandy, well-drained soil',
    imageUrl: 'https://i.pinimg.com/564x/68/7f/0c/687f0c9b1bfb7bdb21f09aba33170ad8.jpg'
  },
  {
    name: 'Mint',
    scientificName: 'Mentha',
    soil: 'Moist, well-drained soil',
    imageUrl: 'https://i.pinimg.com/564x/c6/d2/ae/c6d2ae20c4cfd9a970ddd7092af50e8e.jpg'
  },
  {
    name: 'Cactus',
    scientificName: 'Cactaceae',
    soil: 'Sandy, well-drained soil',
    imageUrl: 'https://i.pinimg.com/474x/57/d5/37/57d5372afe3e29a99d66e2d718f529d6.jpg'
  },
  {
    name: 'Basil',
    scientificName: 'Ocimum basilicum',
    soil: 'Moist, well-drained soil',
    imageUrl: 'https://i.pinimg.com/564x/4a/f1/54/4af154fecaa1f14e3dbab91943e71047.jpg'
  },
  {
    name: 'Aloe Vera',
    scientificName: 'Aloe barbadensis miller',
    soil: 'Cactus or succulent mix',
    imageUrl: 'https://i.pinimg.com/564x/c1/6e/a9/c16ea9860dc3e0f417f2ca7b9a0abfc6.jpg'
  },
  {
    name: 'Orchid',
    scientificName: 'Orchidaceae',
    soil: 'Bark or sphagnum moss',
    imageUrl: 'https://i.pinimg.com/564x/71/34/e1/7134e1629844a3ef8df67679d7f8b07c.jpg'
  },
  {
    name: 'Sunflower',
    scientificName: 'Helianthus annuus',
    soil: 'Loamy, well-drained soil',
    imageUrl: 'https://i.pinimg.com/736x/03/a4/ee/03a4ee841a64bde40792edc909a3bfa1.jpg'
  }
];

export default function PlantCards() {
  return (
    <div>
      {/* Centered Side Heading with margin above */}
      <Typography
        variant="h4"
        align="center"
        sx={{ color: 'black', marginBottom: 4, marginTop: 4 }} // Adds black color and space above/below the heading
      >
        PLANT DETAILS
      </Typography>

      <Grid 
        container 
        spacing={2} 
        justifyContent="center"  // Center horizontally
        alignItems="center"  // Center vertically
        style={{ minHeight: '100vh' }}  // Full height of viewport for vertical centering
      >
        {plantData.map((plant, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, margin: 'auto' }}> {/* Center each card */}
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={plant.imageUrl} // Using the imageUrl from plantData
                  alt={plant.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" align="center"> {/* Center text */}
                    {plant.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }} align="center">
                    Scientific Name: {plant.scientificName}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }} align="center">
                    Soil: {plant.soil}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
