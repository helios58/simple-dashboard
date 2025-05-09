import React, { useEffect, useState } from 'react';
import { Grid, Card, Typography, Box } from '@mui/material';
import InsightItem from './InsightItem';
import CountryCard from './CountryCard';
import InfluencerCard from './InfluencerCard';
import { getBestInsights } from '../../Api/Insight';

export default function Insights() {
  const [insights, setInsights] = useState({});

  useEffect(() => {
    getBestInsights().then(setInsights);
  }, []);

  const {
    influencer,
    country,
    category,
    device,
    color,
    brand,
    day,
    time,
  } = insights;

  const insightsData = [
    { imageSrc: '/Assets/Cards/smartphone.png', title: device, paragraph: 'Appareil la plus utilisée', backGround: '#fdecec' },
    { imageSrc: '/Assets/Cards/award.png', title: color, paragraph: 'Meilleure couleur', backGround: '#fdecec' },
    { imageSrc: '/Assets/Cards/package.png', title: category, paragraph: 'Meilleure catégorie', backGround: '#ecfdf5' },
    { imageSrc: '/Assets/Cards/target.png', title: day, paragraph: 'Meilleur jour de la semaine', backGround: '#fff7e6' },
    { imageSrc: '/Assets/Cards/calendar.png', title: brand, paragraph: 'Meilleur produit', backGround: '#f0f4ff' },
    { imageSrc: '/Assets/Cards/sun.png', title: time, paragraph: 'Meilleur moment du jour', backGround: '#edf6fd' },
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#112D4E', mb: 2 }}>
        Insights
      </Typography>

      <Box sx={{ display: 'flex', gap: 2 }}>
         <Card sx={{ width: { sm: '50%' }, padding: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              {insightsData.slice(0, 3).map((item, index) => (
                <InsightItem key={index} {...item} />
              ))}
            </Grid>
            <Grid item xs={6}>
              {insightsData.slice(3, 6).map((item, index) => (
                <InsightItem key={index} {...item} />
              ))}
            </Grid>
          </Grid>
        </Card>

        <CountryCard country={country} />
        <InfluencerCard influencer={influencer} />
      </Box>
    </Box>
  );
}
