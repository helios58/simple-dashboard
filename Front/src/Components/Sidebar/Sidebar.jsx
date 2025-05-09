import React from 'react';
import {
    Drawer,
    List,
    ListItem,
    Tooltip,
} from '@mui/material';
import data from '../../Data/CardIcon';
const drawerWidth = 64;

const Sidebar = () => {
    const menuItems = data;

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    overflowX: 'hidden',
                },
            }}
        >
            <List>
                {menuItems.map((item, index) => (
                    <Tooltip
                        key={item.text}
                        title={item.text}
                        placement="right"
                        arrow
                    >
                        <ListItem
                            sx={{
                                marginTop: 1,
                                minHeight: 48,
                                justifyContent: 'center',
                                px: 2.5,
                                backgroundColor: index === 1 ? '#042a59' : 'transparent',
                                borderRadius: index === 1 ? '5px' : '0px', 
                                width: index === 1 ? '80%' : '100%',
                                position: index === 1 ? 'relative' : 'auto',
                                left: index === 1 ? '6px' : 'auto',
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.04)'
                                }
                            }}
                        >
                            <img
                                src={item.img}
                                alt={item.alt}
                                className={item.class} 
                            />
                        </ListItem>
                    </Tooltip>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;