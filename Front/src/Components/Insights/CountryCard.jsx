import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const CountryCard = ({ country }) => (
  <Card className sx={{ width: '25%', padding: 3 }}>
    <CardMedia sx={{ height: 200 }} image="France.jpg" title="Country" />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" textAlign="center">
        {country}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }} textAlign="center">
        Meilleur <br /> Pays
      </Typography>
    </CardContent>
  </Card>
);

export default CountryCard;
