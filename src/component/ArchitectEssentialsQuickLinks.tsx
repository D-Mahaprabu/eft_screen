import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const quickLinks = [
    { name: 'Back-End', path: '/courses/fullstack/java-info' },
    { name: 'System Design', path: '/courses/fullstack/systemdesign-info'},
    { name: 'Debugging Skills', path: '/courses/fullstack/debuggingskills-info'},
    { name: 'Enterprise Architecture', path: '/courses/fullstack/enterprisearchitecture-info' },
    { name: 'Capacity Planning', path: '/courses/fullstack/capacityplanning-info'},
    { name: 'Exclusive Courses', path: '/courses/fullstack/ai-info'},
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
