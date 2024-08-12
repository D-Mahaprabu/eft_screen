import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const quickLinks = [
    { name: 'CI/CD Options', path: '/courses/fullstack/jenkins-info' },
    { name: 'Aws', path: '/courses/fullstack/aws-info' },
    { name: 'Azure', path: '/courses/fullstack/azure-info' },
    { name: 'Google Cloud Platform', path: '/courses/fullstack/googlecloud-info' },
    { name: 'Deployment Options', path: '/courses/fullstack/docker-info' },
];

const CloudQuickLinks: React.FC = () => {
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

export default CloudQuickLinks;