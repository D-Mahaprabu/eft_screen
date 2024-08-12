import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const quickLinks = [
    { name: 'Databases', path: '/courses/fullstack/oracle-info' },
    { name: 'Java', path: '/courses/fullstack/java-info' },
    { name: 'Spring Boot', path: '/courses/fullstack/springboot-info'},
    { name: 'Maven', path: '/courses/fullstack/maven-info'},
    { name: 'Spring Security', path: '/courses/fullstack/springsecurity-info'},
    { name: 'Microservice Design', path: '/courses/fullstack/microservicedesign-info'},
    { name: 'Swagger', path: '/courses/fullstack/swagger-info' },
    { name: 'Elastic Stack', path: '/courses/fullstack/elasticstack-info'},
    { name: 'EhCache', path: '/courses/fullstack/ehcache-info' },
    { name: 'Kafka', path: '/courses/fullstack/kafka-info' },
    { name: 'Redis', path: '/courses/fullstack/redis-info'},
    { name: 'Hibernate', path: '/courses/fullstack/hibernate-info'},
    { name: 'Prometheus', path: '/courses/fullstack/prometheus-info'},
    { name: 'Architect Essentials', path: '/courses/fullstack/systemdesign-info'},
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
