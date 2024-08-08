import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

const discoverLinks = ['AI & ML', 'DevOps', 'Cloud', 'Data Engineering', 'Web Development'];

const Discover: React.FC = () => {
    return (
        <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 1, boxShadow: 1 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight:'bold'}}>
                Discover
            </Typography>
            <List>
                {discoverLinks.map((link, index) => (
                    <ListItem button key={index}>
                        <ListItemText primary={link} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Discover;
