import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const quickLinks = [
    { name: 'Backend', path: 'java-info' },
    { name: 'System Design', path: 'systemdesign-info'},
    { name: 'Debugging Skills', path: '/debuggingskills-info'},
    { name: 'Enterprise Architecture', path: 'enterprisearchitecture-info' },
    { name: 'Capacity Planning', path: '/capacityplanning-info'},
    { name: 'Exclusive Courses', path: 'ai-info'},
];

const ArchitectEssentialsQuickLinks: React.FC = () => {
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

export default ArchitectEssentialsQuickLinks;
