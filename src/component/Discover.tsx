import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const discoverLinks = [
    { name: 'AI & ML', path: '/ai&ml'},
    { name: 'DevOps', path: '/devops'}, 
    { name: 'Cloud', path: '/cloud'}, 
    { name: 'Data Engineering', path: '/data-engineering'}, 
    { name: 'Web Development', path: '/web-development'}
    ];

const Discover: React.FC = () => {
    return (
        <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 1, boxShadow: 1 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight:'bold'}}>
                Discover
            </Typography>
            <List>
                {discoverLinks.map((link, index) => (
                    <ListItem button key={index} component={Link} to={link.path}>
                        <ListItemText primary={link.name} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Discover;
