import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Graph from '../Graph/Graph';
export default function MediaCard({ item }) {
    
    return (
        <Card>
            {
                item.isGraph ? <>
                    <div className='graph'>
                        <Graph />
                    </div>
                    <CardContent>
                        <Typography gutterBottom className='text-center' style={{ color: '#4A4A68' }} component="div">
                            {item.title}
                        </Typography>
                    </CardContent>
                </> : <>
                    <CardMedia
                        sx={{
                            height: { xs: 60, sm: 80 },
                            width: { xs: 60, sm: 80 },
                            margin: '0 auto',
                            marginTop: '50px',
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
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className='text-center'>
                            {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} className='text-center'>
                            {item.paragraph}
                        </Typography>
                    </CardContent>
                </>
            }
        </Card>
    );
}