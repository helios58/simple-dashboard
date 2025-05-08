import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', borderRadius: 2, color: 'black' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'right', gap: 1 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <Typography variant="body1" sx={{ color: '#042a59' }}><b>John Doe</b></Typography>
            <Typography variant="body2" sx={{ color: '#042a59' }}>
              Profile
            </Typography>
          </Box>
          <img
            src="/Assets/Avatar.png"
            alt="Profile"
            style={{ width: 32, height: 32, borderRadius: '50%' }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;