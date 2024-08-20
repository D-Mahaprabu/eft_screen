import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const quickLinks = [
    { name: 'HTML', path: '/courses/fullstack/html-info' },
    { name: 'CSS', path: '/courses/fullstack/css-info' },
    { name: 'Bootstrap', path: '/courses/fullstack/bootstrap-info' },
    { name: 'JavaScript', path: '/courses/fullstack/js-info' },
    { name: 'TypeScript', path: '/courses/fullstack/ts-info' },
    { name: 'React', path: '/courses/fullstack/react-info' },
    { name: 'CI/CD Options', path: '/courses/fullstack/jenkins-info' }, 
];

const QuickLinks: React.FC = () => {
    return (
        <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 1, boxShadow: 1, mb: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#D81B0E' }}>
                Full Stack Quick Links
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