import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SpringBootLogo from '../images/springBootLogo.png';
import BackendQuickLinks from '../component/BackendQuickLinks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SpringBootInfo = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    const handleAccordionChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const renderCurriculum = () => (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>1: Introduction to Spring Boot</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview of Spring Boot:</strong><br/>
                        History and evolution of Spring Boot<br/>
                        Key features and benefits<br/>
                        Differences between Spring and Spring Boot<br/><br/>

                        <strong>Getting Started with Spring Boot:</strong><br/>
                        Setting up the development environment<br/>
                        Creating a basic Spring Boot application<br/>
                        Understanding Spring Boot project structure
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2: Core Concepts of Spring Boot</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Spring Boot Annotations:</strong><br/>
                        Key annotations: `@SpringBootApplication`, `@Component`, `@Service`, `@Repository`, `@Controller`, `@RestController`<br/>
                        Understanding dependency injection with `@Autowired`<br/>
                        Using `@Configuration` and `@Bean`<br/><br/>

                        <strong>Configuration and Properties:</strong><br/>
                        Externalized configuration with `application.properties` and `application.yml`<br/>
                        Using `@Value` and `@ConfigurationProperties` for property injection<br/>
                        Profiles for different environments
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3: Building RESTful Web Services</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>RESTful Services with Spring Boot:</strong><br/>
                        Creating RESTful endpoints with `@RestController` and `@RequestMapping`<br/>
                        Handling HTTP methods: GET, POST, PUT, DELETE<br/>
                        Path variables and request parameters<br/><br/>

                        <strong>Request and Response Handling:</strong><br/>
                        Working with `@RequestBody` and `@ResponseBody`<br/>
                        Exception handling with `@ControllerAdvice` and `@ExceptionHandler`<br/>
                        Customizing HTTP responses with `ResponseEntity`
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4: Data Access with Spring Boot</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Spring Data JPA:</strong><br/>
                        Setting up Spring Data JPA<br/>
                        Creating repositories with `@Repository` and `CrudRepository`<br/>
                        Query methods and custom queries with `@Query`<br/><br/>

                        <strong>Database Configuration:</strong><br/>
                        Configuring data sources<br/>
                        Using H2 in-memory database for development<br/>
                        Connecting to MySQL, PostgreSQL, and other databases
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5: Spring Boot Security</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Spring Security Basics:</strong><br/>
                        Adding Spring Security to a Spring Boot application<br/>
                        Configuring basic authentication and authorization<br/>
                        Customizing login and logout<br/><br/>

                        <strong>Advanced Security Features:</strong><br/>
                        Role-based access control<br/>
                        JWT (JSON Web Token) authentication<br/>
                        Security configuration with `WebSecurityConfigurerAdapter`
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6: Testing with Spring Boot</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Unit Testing:</strong><br/>
                        Setting up JUnit and Mockito for testing<br/>
                        Writing unit tests for Spring components<br/><br/>

                        <strong>Integration Testing:</strong><br/>
                        Writing integration tests with `@SpringBootTest`<br/>
                        Testing RESTful services with MockMvc<br/>
                        Using Testcontainers for integration testing with databases
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7: Spring Boot Actuator</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Introduction to Actuator:</strong><br/>
                        Adding Actuator to a Spring Boot application<br/>
                        Using Actuator endpoints for monitoring and management<br/><br/>

                        <strong>Customizing Actuator:</strong><br/>
                        Creating custom Actuator endpoints<br/>
                        Securing Actuator endpoints<br/>
                        Integrating with monitoring tools (e.g., Prometheus, Grafana)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8: Spring Boot DevTools and Developer Productivity</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Spring Boot DevTools:</strong><br/>
                        Setting up DevTools for automatic restarts<br/>
                        Using LiveReload for hot reloading<br/><br/>

                        <strong>Developer Productivity Tools:</strong><br/>
                        Using Lombok for boilerplate code reduction<br/>
                        Spring Boot CLI for rapid prototyping
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9: Messaging and Asynchronous Processing</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Spring Boot Messaging:</strong><br/>
                        Integrating with messaging systems (e.g., RabbitMQ, Kafka)<br/>
                        Using `@RabbitListener` and `@KafkaListener`<br/><br/>

                        <strong>Asynchronous Processing:</strong><br/>
                        Using `@Async` for asynchronous methods<br/>
                        Scheduling tasks with `@Scheduled`
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel10'} onChange={handleAccordionChange('panel10')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>10: Microservices with Spring Boot</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Building Microservices:</strong><br/>
                        Creating and configuring microservices with Spring Boot<br/>
                        Service discovery with Netflix Eureka<br/>
                        API Gateway with Spring Cloud Gateway<br/><br/>

                        <strong>Inter-Service Communication:</strong><br/>
                        Using Feign clients for RESTful communication<br/>
                        Circuit breaker patterns with Resilience4j
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel11'} onChange={handleAccordionChange('panel11')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>11: Deployment and DevOps</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Packaging Spring Boot Applications:</strong><br/>
                        Creating executable JARs and WARs<br/>
                        Dockerizing Spring Boot applications<br/><br/>

                        <strong>Deploying to Cloud Platforms:</strong><br/>
                        Deploying to AWS, Azure, and Google Cloud<br/>
                        Using Kubernetes for container orchestration
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel12'} onChange={handleAccordionChange('panel12')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>12: Advanced Topics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Spring Boot and GraphQL:</strong><br/>
                        Setting up GraphQL with Spring Boot<br/>
                        Creating GraphQL queries and mutations<br/><br/>

                        <strong>Reactive Programming with Spring WebFlux:</strong><br/>
                        Introduction to reactive programming<br/>
                        Building reactive applications with Spring WebFlux
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel13'} onChange={handleAccordionChange('panel13')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>13: Hands-On Projects</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Project Planning:</strong><br/>
                        Defining project requirements and objectives<br/>
                        Designing architecture for real-world scenarios<br/><br/>

                        <strong>Development:</strong><br/>
                        Implementing Spring Boot solutions for different project types<br/>
                        Integrating advanced Spring Boot features and best practices<br/><br/>
                        
                        <strong>Review and Presentation:</strong><br/>
                        Peer review and feedback on projects<br/>
                        Final project presentation<br/>
                        Course wrap-up and next steps<br/><br/>
                        This curriculum provides a comprehensive and structured approach to mastering Spring Boot,
                        covering both foundational and advanced topics, and equipping learners with the skills needed
                        to effectively use Spring Boot for a variety of backend development tasks.
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
                       Learning Spring Boot becomes priority for back-end developers since it is widely used in the industry for building scalable, production-ready applications, making you more marketable.
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
                <Box height={'auto'} width={'60%'} sx={{ ml: 2 }} >
                    <Stack direction={'row'} sx={{ mt: 3 }}>
                        <Box height={'50px'} width={'50px'}>
                            <img src={SpringBootLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Box>
                        <Typography variant="h4" sx={{ mt: 1, ml: 1, textTransform: 'uppercase' }}>Spring Boot</Typography>
                    </Stack>
                    <Stack width={'auto'} direction={'row'}>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, position: 'relative', overflow: 'hidden' }}>
                            <MenuBookIcon />
                        </Box>
                        <Typography sx={{ mt: 2.5, ml: 1 }}>13 Modules</Typography>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, ml: 3, position: 'relative', overflow: 'hidden' }}>
                            <MenuBookIcon />
                        </Box>
                        <Typography sx={{ mt: 2.5, ml: 1 }}>54 Hours</Typography>
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
                <Box width={'35%'} height={'auto'} >
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
    )
}

export default SpringBootInfo;
