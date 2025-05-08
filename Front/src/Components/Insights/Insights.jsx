import React, { useEffect, useState } from 'react';
import { Grid, Card, Typography, Box } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { getBestInfluencer, getBestCountry, getBestCategory } from "../../Services/Data";



export default function Insights() {
    const [bestInfluencer, setBestInfluencer] = useState([]);
    const [bestCountry, setBestCountry] = useState([]);
    const [bestCategory, setBestCategory] = useState([]);

    useEffect(() => {
        getBestInfluencer()
            .then((res) => {
                setBestInfluencer(res);
            }
            )
            .catch((err) => console.error('Error', err));

        getBestCountry()
            .then((res) => {
                const displayNames = new Intl.DisplayNames(['fr'], { type: 'region' });
                const countryName = displayNames.of(res);
                setBestCountry(countryName);
            }
            )
            .catch((err) => console.error('Error', err));

        getBestCategory()
            .then((res) => {
                setBestCategory(res);
            }
            )
            .catch((err) => console.error('Error', err));

    }, []);
    const Insights = [
        { imageSrc: '/Assets/Cards/smartphone.png', title: 'Mobile', paragraph: 'Appareil la plus utilisée', backGround: '#fdecec' },
        { imageSrc: '/Assets/Cards/award.png', title: 'Black', paragraph: 'Meilleure couleur', backGround: '#fdecec' },
        { imageSrc: '/Assets/Cards/package.png', title: bestCategory, paragraph: 'Meilleure catégorie', backGround: '#ecfdf5' },
        { imageSrc: '/Assets/Cards/target.png', title: 'Monday', paragraph: 'Meilleur jour de la semaine', backGround: '#fff7e6' },
        { imageSrc: '/Assets/Cards/calendar.png', title: 'Air Force', paragraph: 'Meilleur produit', backGround: '#f0f4ff' },
        { imageSrc: '/Assets/Cards/sun.png', title: 'Après midi', paragraph: 'Meilleur moment du jour', backGround: '#edf6fd' }
    ];
    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#112D4E', mb: 2 }}>
                Insights
            </Typography>

            <Box sx={{ display: 'flex', gap: 2 }}>
                <Card sx={{ width: '50%', padding: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            {Insights.slice(0, 3).map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2,
                                        mb: 2,
                                    }}
                                >
                                    <CardMedia
                                        sx={{
                                            height: { xs: 60, sm: 80 },
                                            width: { xs: 60, sm: 80 },
                                            backgroundColor: item.backGround,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <img
                                            src={item.imageSrc}
                                            alt="green iguana"
                                            style={{
                                                height: 40,
                                                width: 40,
                                                objectFit: 'contain',
                                            }}
                                        />
                                    </CardMedia>
                                    <Box sx={{ flex: 1 }}>
                                        <Typography sx={{ fontWeight: 600 }}>{item.title}</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.paragraph}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Grid>

                        <Grid item xs={6}>
                            {Insights.slice(3, 6).map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2,
                                        mb: 2,
                                    }}
                                >
                                    <CardMedia
                                        sx={{
                                            height: { xs: 60, sm: 80 },
                                            width: { xs: 60, sm: 80 },
                                            backgroundColor: item.backGround,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <img
                                            src={item.imageSrc}
                                            alt="green iguana"
                                            style={{
                                                height: 40,
                                                width: 40,
                                                objectFit: 'contain',
                                            }}
                                        />
                                    </CardMedia>
                                    <Box sx={{ flex: 1 }}>
                                        <Typography sx={{ fontWeight: 600 }}>{item.title}</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.paragraph}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Grid>
                    </Grid>
                </Card>

                <Card sx={{ width: '25%', padding: 3 }}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image="France.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                            {bestCountry}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} textAlign={'center'}>
                            Meilleur <br /> Pays
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ width: '25%', padding: 3 }}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image="Image.png"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                            {bestInfluencer}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} textAlign={'center'}>
                            Meilleur <br /> influenceur
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}