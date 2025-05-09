import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const InfluencerCard = ({ influencer }) => (
    <Card sx={{ width: { xs: '100%', sm: '100%', md: '23%' , xl : '24%' }, padding: 3 }}>
    <CardMedia sx={{ height: 200 }} image="Image.png" title="Influencer" />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" textAlign="center">
        {influencer}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }} textAlign="center">
        Meilleur <br /> influenceur
      </Typography>
    </CardContent>
  </Card>
);

export default InfluencerCard;
