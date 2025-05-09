import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { getSaleScore } from "../../Services/Data";

const Graph = () => {
    const pathParts = window.location.pathname.split('/');
    const id = pathParts[pathParts.length - 1];
    const [saleScore, setSaleScore] = useState([]);
    let percentage = 0;
    useEffect(() => {
        getSaleScore(id)
            .then((res) => {
                setSaleScore(res);
            }
            )
            .catch((err) => console.error('Error', err));
    }, [id]);

    if (saleScore >= 100) {
        percentage = 100;
    } else if (saleScore != null) {
        percentage = saleScore;
    } else {
        percentage = 0;
    }
    return (
        <div style={{ width: 270, height: 270 }}>
            
            <box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={3}
                bgcolor="#fff"
                borderRadius="8px"
                boxShadow={3}
            >
                <CircularProgressbarWithChildren 
                
                    value={percentage}
                    styles={{
                        path: {
                            stroke: `url(#gradient)`,
                            strokeWidth: 8,
                        },
                        trail: {
                            stroke: '#e6e6e6',
                            strokeWidth: 8,
                        },
                    }}
                >

                    <Typography variant="h6" className='percentage hiden-sm-md'>
                        {percentage}%
                    </Typography>
                </CircularProgressbarWithChildren>

                <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00c6ff" />
                            <stop offset="100%" stopColor="#ff4b2b" />
                        </linearGradient>
                    </defs>
                </svg>
            </box>
        </div>
    );
};

export default Graph;
