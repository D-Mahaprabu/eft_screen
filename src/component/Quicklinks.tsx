import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const quickLinks = [
    { name: 'HTML', path: '/html-info' },
    { name: 'CSS', path: '/css-info' },
    { name: 'Bootstrap', path: '/bootstrap-info' },
    { name: 'React', path: 'react-info' },
    { name: 'JavaScript', path: 'js-info' },
    { name: 'TypeScript', path: 'ts-info' },
    { name: 'CI/CD Options', path: 'jenkins-info' },
];

const QuickLinks: React.FC = () => {
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

export default QuickLinks;