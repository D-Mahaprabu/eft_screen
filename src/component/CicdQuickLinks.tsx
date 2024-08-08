import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const quickLinks = [
    { name: 'Front End', path: '/html-info'},
    { name: 'Devops', path: '/devops-info'},
    { name: 'CircleCI', path: '/circleci-info'},
    { name: 'Github Actions', path: 'githubactions-info'},
    { name: 'GitLab', path: '/gitlab-info'},
    { name: 'Cloud', path: 'aws-info'},
];

const CiCdQuickLinks: React.FC = () => {
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

export default CiCdQuickLinks;