import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MicroservicesDesignLogo from '../images/microserviceDesignLogo.png';
import BackendQuickLinks from '../component/BackendQuickLinks';

const MicroservicesDesignInfo = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    const handleAccordionChange = (panel: string) => (
        event: React.SyntheticEvent,
        isExpanded: boolean
    ) => {
        setExpanded(isExpanded ? panel : false);
    };

    const renderCurriculum = () => (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>1. Introduction to Microservices</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview and Benefits:</strong><br />
                        Definition of microservices<br />
                        Advantages over monolithic architecture<br /><br />

                        <strong>Microservices vs. Monolithic Architecture:</strong><br />
                        Key differences and trade-offs
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. Core Concepts</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Service Design:</strong><br />
                        Principles of microservice design<br />
                        Identifying and defining services<br /><br />

                        <strong>Communication Patterns:</strong><br />
                        Synchronous (REST, gRPC)<br />
                        Asynchronous (Message Queues, Event-Driven)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. Data Management</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Database per Service:</strong><br />
                        Ensuring data consistency<br />
                        Handling data partitioning<br /><br />

                        <strong>Distributed Transactions:</strong><br />
                        Two-phase commit, Sagas
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Service Discovery</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Service Registry:</strong><br />
                        Using tools like Eureka, Consul, or Zookeeper<br /><br />

                        <strong>Client-Side vs. Server-Side Discovery:</strong><br />
                        Advantages and use cases for each
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. API Gateway</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Role of an API Gateway:</strong><br />
                        Routing, Aggregation, Authentication<br />
                        Tools like Netflix Zuul, Spring Cloud Gateway
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Resilience and Fault Tolerance</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Circuit Breakers:</strong><br />
                        Implementing with libraries like Hystrix, Resilience4j<br /><br />

                        <strong>Retry Patterns:</strong><br />
                        Implementing retries and fallbacks
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Security</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Securing Microservices:</strong><br />
                        OAuth2, JWT, API Key<br />
                        Service-to-service authentication<br /><br />

                        <strong>Data Encryption:</strong><br />
                        Encrypting data in transit and at rest
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. Monitoring and Logging</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Centralized Logging:</strong><br />
                        Tools like ELK Stack (Elasticsearch, Logstash, Kibana)<br /><br />

                        <strong>Monitoring:</strong><br />
                        Using tools like Prometheus, Grafana<br />
                        Implementing health checks
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9. CI/CD for Microservices</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Continuous Integration and Deployment:</strong><br />
                        Automated testing, building, and deployment<br /><br />

                        <strong>Containerization:</strong><br />
                        Using Docker and Kubernetes
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel10'} onChange={handleAccordionChange('panel10')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>10. Scaling and Performance</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Scalability Strategies:</strong><br />
                        Horizontal scaling, Load balancing<br /><br />

                        <strong>Performance Optimization:</strong><br />
                        Caching, Database optimization
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel11'} onChange={handleAccordionChange('panel11')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>11. Additional Resources</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Documentation and Guides:</strong><br />
                        Official documentation for Spring Cloud, Docker, Kubernetes<br /><br />

                        <strong>Community Support:</strong><br />
                        Forums, Stack Overflow, GitHub<br /><br />
                        This concise list covers the essential topics for designing and implementing microservices,
                        providing a strong foundation for backend developers.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 0:
                return (
                    <Typography variant="body1">
                        <strong>Microservice Design</strong> is a design pattern where an application is composed of small, independent services that communicate over a network.<br /><br />
                        <strong>Decentralized Services</strong>: Each microservice is developed, deployed, and scaled independently, focusing on a specific business capability.<br /><br />
                        <strong>Domain-Driven Design</strong>: Microservices are often aligned with business domains, with each service responsible for a particular domain or functionality.<br /><br />
                        <strong>API Gateway</strong>: Acts as a single entry point for all client requests, routing them to the appropriate microservices and handling cross-cutting concerns like authentication.<br /><br />
                        <strong>Service Discovery</strong>: A mechanism for services to find and communicate with each other dynamically, often using tools like Eureka or Consul.<br /><br />
                        <strong>Data Management</strong>: Each microservice typically has its own database or data store, ensuring loose coupling and service autonomy.<br /><br />
                        <strong>Inter-Service Communication</strong>: Services communicate via lightweight protocols such as HTTP/REST or messaging systems like RabbitMQ or Kafka.<br /><br />
                        <strong>Load Balancing</strong>: Distributes incoming requests across multiple instances of a microservice to ensure high availability and reliability.<br /><br />
                        <strong>Fault Tolerance</strong>: Implementing patterns like circuit breakers and retries to handle failures gracefully and maintain system resilience.<br /><br />
                        <strong>Deployment</strong>: Microservices can be deployed independently, often using containerization technologies like Docker and orchestration tools like Kubernetes.<br /><br />
                        <strong>Continuous Integration/Continuous Deployment (CI/CD)</strong>: Automated pipelines for building, testing, and deploying microservices to streamline development and operations.<br /><br />
                        <strong>Security</strong>: Each microservice should implement its own security measures and communicate securely, using protocols like OAuth2 and TLS.<br /><br />
                        <strong>Logging and Monitoring</strong>: Centralized logging and monitoring are essential for tracking the health and performance of microservices, often using tools like ELK Stack or Prometheus.<br /><br />
                        <strong>Configuration Management</strong>: Externalize configuration to manage settings across different environments, using tools like Spring Cloud Config or Consul.<br /><br />
                        <strong>Service Coordination</strong>: Orchestrate interactions between microservices using workflows or business processes, often managed by tools like Camunda or Apache Airflow.<br /><br />
                        <strong>Versioning</strong>: Manage API versioning to ensure compatibility and support backward and forward compatibility of microservices.<br /><br />
                        <strong>Database Integration</strong>: Each microservice manages its own data, but may need to integrate or synchronize data across services using patterns like event sourcing.<br /><br />
                        <strong>Scaling</strong>: Microservices can be scaled independently based on demand, improving resource utilization and system performance.<br /><br />
                        <strong>Deployment Strategies</strong>: Use strategies like blue-green deployments or canary releases to minimize downtime and risk during updates.<br /><br />
                        <strong>Team Autonomy</strong>: Microservices enable teams to work independently on different services, promoting faster development and deployment cycles.
                    </Typography>
                );
            case 1:
                return renderCurriculum();
            case 2:
                return (
                    <Typography variant="body1">
                        Reviews content
                    </Typography>
                );
            default:
                return null;
        }
    };

    return (
        <Stack>
            <AppBarComponent />
            <Stack>
                <img src={laptopimg} alt="" height={'450px'} />
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Box height={'auto'} width={'60%'} sx={{ ml: 2 }}>
                    <Stack direction={'row'} sx={{ mt: 3 }}>
                        <Box height={'50px'} width={'50px'}>
                            <img src={MicroservicesDesignLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Box>
                        <Typography variant="h4" sx={{ mt: 1, ml: 1, textTransform: 'uppercase' }}>Microservice Design</Typography>
                    </Stack>
                    <Stack width={'auto'} direction={'row'}>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, position: 'relative', overflow: 'hidden' }}>
                            <MenuBookIcon />
                        </Box>
                        <Typography sx={{ mt: 2.5, ml: 1 }}>15 Modules</Typography>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, ml: 3, position: 'relative', overflow: 'hidden' }}>
                            <MenuBookIcon />
                        </Box>
                        <Typography sx={{ mt: 2.5, ml: 1 }}>72 Hours</Typography>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, ml: 3, position: 'relative', overflow: 'hidden' }}>
                            <MenuBookIcon />
                        </Box>
                        <Typography sx={{ mt: 2.5, ml: 1 }}>Beginner</Typography>
                    </Stack>
                    <Box sx={{ width: '100%', mt: 2 }}>
                        <Paper square>
                            <Tabs
                                value={activeTab}
                                onChange={handleTabChange}
                                indicatorColor="primary"
                                textColor="inherit"
                            >
                                <Tab
                                    label="Overview"
                                    sx={{
                                        color: activeTab === 0 ? '#D81B0E' : 'rgba(0, 0, 0, 0.54)'
                                    }}
                                />
                                <Tab
                                    label="Curriculum"
                                    sx={{
                                        color: activeTab === 1 ? '#D81B0E' : 'rgba(0, 0, 0, 0.54)'
                                    }}
                                />
                                {/* <Tab
                                    label="Reviews"
                                    sx={{
                                        color: activeTab === 2 ? 'red' : 'rgba(0, 0, 0, 0.54)'
                                    }}
                                /> */}
                            </Tabs>
                        </Paper>
                        <Box sx={{ p: 3 }}>
                            {renderContent()}
                        </Box>
                    </Box>
                </Box>
                <Box width={'35%'} height={'auto'}>
                    <Card sx={{ width: 380, height: 90, mx: 'auto', mt: 2, ml: 2, mr: 122, borderRadius: 2, bgcolor: '#F5F4F0' }}>
                        <CardContent>
                            <Box sx={{ width: 40, height: 40, borderRadius: '3px', bgcolor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', mt: 0.5, fontSize: 30 }}>
                                ★
                            </Box>
                            <Typography variant="body2" sx={{ mt: -5, ml: 6 }}>
                                This course will help you gain the skills needed to excel in your field.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Box sx={{ mt: 2 }}>
                        <BackendQuickLinks />
                    </Box>
                </Box>
            </Stack>
        </Stack>
    );
}

export default MicroservicesDesignInfo;
