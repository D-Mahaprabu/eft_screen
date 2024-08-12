import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const quickLinks = [
    { name: 'Cloud', path: '/courses/fullstack/aws-info'},
    { name: 'Docker', path: '/courses/fullstack/docker-info' },
    { name: 'Kubernetes', path: '/courses/fullstack/kubernetes-info' },
    { name: 'Databases', path: '/courses/fullstack/oracle-info' },
];

const DeploymentQuickLinks: React.FC = () => {
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

export default DeploymentQuickLinks;