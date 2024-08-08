import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const quickLinks = [
    { name: 'Databases', path: 'oracle-info' },
    { name: 'Java', path: 'java-info' },
    { name: 'Spring Boot', path: '/springboot-info'},
    { name: 'Maven', path: '/maven-info'},
    { name: 'Spring Security', path: 'springsecurity-info'},
    { name: 'Microservice Design', path: '/microservicedesign-info'},
    { name: 'Swagger', path: 'swagger-info' },
    { name: 'Elastic Stack', path: 'elasticstack-info'},
    { name: 'EhCache', path: 'ehcache-info' },
    { name: 'Kafka', path: 'kafka-info' },
    { name: 'Redis', path: '/redis-info'},
    { name: 'Hibernate', path: 'hibernate-info'},
    { name: 'Prometheus', path: '/prometheus-info'},
    { name: 'Architect Essentials', path: 'systemdesign-info'},
];

const BackendQuickLinks: React.FC = () => {
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

export default BackendQuickLinks;
