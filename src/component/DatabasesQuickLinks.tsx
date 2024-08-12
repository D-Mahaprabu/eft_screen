import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const quickLinks = [
    { name: 'Deployment Options', path: '/courses/fullstack/docker-info' },
    { name: 'Oracle', path: '/courses/fullstack/oracle-info' },
    { name: 'MangoDb', path: '/courses/fullstack/mongodb-info' },
    { name: 'Back-End', path: '/courses/fullstack/java-info' },
];

const DatabasesQuickLinks: React.FC = () => {
    return (
        <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 1, boxShadow: 1, mb: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                Quick Links
            </Typography>
            <List>
                {quickLinks.map((link, index) => (
                    <ListItem button key={index} component={Link} to={link.path}>
                        <ListItemText primary={link.name} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default DatabasesQuickLinks;