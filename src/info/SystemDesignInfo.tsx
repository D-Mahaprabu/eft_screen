import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SystemDesignLogo from '../images/systemDesignLogo.png';
import ArchitectEssentialsQuickLinks from '../component/ArchitectEssentialsQuickLinks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SystemDesignInfo = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const renderCurriculum = () => (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>1: Introduction to System Design</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Definition and Importance:</strong><br/>
                        What is system design?<br/>
                        Why is system design critical in software engineering?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2: Key Concepts in System Design</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Scalability:</strong><br/>
                        Horizontal vs. vertical scaling<br/>
                        Load balancing and partitioning<br/><br/>

                        <strong>Performance:</strong><br/>
                        Latency vs. throughput<br/>
                        Caching strategies (e.g., CDN, in-memory caches)<br/><br/>

                        <strong>Availability:</strong><br/>
                        High availability vs. fault tolerance<br/>
                        Redundancy and failover mechanisms<br/><br/>

                        <strong>Consistency and Data Integrity:</strong><br/>
                        CAP theorem (Consistency, Availability, Partition Tolerance)<br/>
                        ACID vs. BASE properties<br/><br/>

                        <strong>Security:</strong><br/>
                        Authentication and authorization<br/>
                        Data encryption and secure communication
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3: Components of a System</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Client-Side:</strong><br/>
                        Web and mobile clients<br/>
                        User interface design and experience<br/><br/>

                        <strong>Server-Side:</strong><br/>
                        Web servers and application servers<br/>
                        Microservices architecture vs. monolithic architecture<br/><br/>

                        <strong>Database:</strong><br/>
                        SQL vs. NoSQL databases<br/>
                        Data modeling and indexing<br/><br/>

                        <strong>Networking:</strong><br/>
                        API design (REST, GraphQL)<br/>
                        Communication protocols (HTTP, WebSocket)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4: Design Principles and Patterns</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>SOLID Principles:</strong><br/>
                        Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion<br/><br/>

                        <strong>Design Patterns:</strong><br/>
                        Singleton, Factory, Observer, Strategy, etc.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5: System Design Process</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Requirement Gathering:</strong><br/>
                        Functional and non-functional requirements<br/>
                        Use cases and user stories<br/><br/>

                        <strong>High-Level Design:</strong><br/>
                        Architectural diagram<br/>
                        Defining major components and their interactions<br/><br/>

                        <strong>Detailed Design:</strong><br/>
                        Component diagrams<br/>
                        Data flow diagrams
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6: Implementation Possibilities</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Service-Oriented Architecture (SOA):</strong><br/>
                        Microservices<br/>
                        API Gateway<br/><br/>

                        <strong>Event-Driven Architecture:</strong><br/>
                        Message brokers (Kafka, RabbitMQ)<br/>
                        Event sourcing and CQRS<br/><br/>

                        <strong>Serverless Architecture:</strong><br/>
                        Function-as-a-Service (AWS Lambda, Azure Functions)<br/>
                        Backend-as-a-Service (Firebase)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7: Examples and Case Studies</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Designing a URL Shortener:</strong><br/>
                        Requirements: Shortening, redirection, analytics<br/>
                        Components: API, database, caching, web interface<br/><br/>

                        <strong>Designing an E-commerce Platform:</strong><br/>
                        Requirements: User management, product catalog, shopping cart, payment processing<br/>
                        Components: Frontend, backend services, database, third-party integrations
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8: Best Practices</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Documentation:</strong><br/>
                        Comprehensive system design documentation<br/>
                        Diagrams and user manuals<br/><br/>

                        <strong>Testing and Monitoring:</strong><br/>
                        Automated testing (unit, integration, end-to-end)<br/>
                        Monitoring tools (Prometheus, Grafana)<br/><br/>

                        <strong>Iterative Improvement:</strong><br/>
                        Feedback loops<br/>
                        Continuous integration and continuous deployment (CI/CD)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9: Implementation Example: URL Shortener</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Step-by-Step Implementation:</strong><br/><br/>
                        <strong>1. Requirements:</strong><br/>
                        User can submit a URL to get a shortened version.<br/>
                        User can be redirected to the original URL using the shortened link.<br/>
                        Track usage statistics.<br/><br/>

                        <strong>2. High-Level Design:</strong><br/>
                        <strong>Components:</strong> API Gateway, URL Service, Data Storage, Analytics Service<br/>
                        <strong>Interaction:</strong><br/>
                        User submits a URL through the frontend.<br/>
                        URL Service generates a unique short URL and stores it in the database.<br/>
                        On access, the API Gateway redirects to the original URL and logs the access in the Analytics Service.<br/><br/>

                        <strong>3. Detailed Design:</strong><br/>
                        <strong>Data Storage:</strong> Use a NoSQL database for quick access (e.g., MongoDB).<br/>
                        <strong>Short URL Generation:</strong> Use a hash function or an incremental ID.<br/>
                        <strong>Analytics:</strong> Store access logs in a separate collection/table for analytics.<br/><br/>

                        <strong>4. Implementation Steps:</strong><br/>
                        Set up the database schema.<br/>
                        Develop the API endpoints for URL creation and redirection.<br/>
                        Implement the frontend interface.<br/>
                        Integrate logging for analytics.<br/><br/>

                        <strong>5. Scaling Considerations:</strong><br/>
                        Use a CDN for static content delivery.<br/>
                        Implement caching for frequently accessed URLs.<br/>
                        Horizontal scaling of services based on load.<br/><br/>
                        This structured plan provides a concise yet comprehensive overview of system design, covering
                        key concepts, design principles, and practical implementation examples.
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
                        <strong>System Design</strong> is the process of defining the architecture, components, and interfaces of a system to meet specific requirements.<br /><br />
                        <strong>Architectural Patterns</strong>: Utilizes various architectural patterns such as microservices, monolithic, and serverless to structure and design systems.<br /><br />
                        <strong>Scalability</strong>: Ensures that a system can handle increasing loads by scaling up (vertical scaling) or out (horizontal scaling) as needed.<br /><br />
                        <strong>Reliability</strong>: Designs systems to be dependable and available, minimizing downtime and handling failures gracefully.<br /><br />
                        <strong>Performance</strong>: Focuses on optimizing system performance, including response time and throughput, to meet user expectations and requirements.<br /><br />
                        <strong>Fault Tolerance</strong>: Implements mechanisms to tolerate and recover from faults, ensuring continuous operation despite hardware or software failures.<br /><br />
                        <strong>Load Balancing</strong>: Distributes incoming traffic across multiple servers or instances to ensure even load distribution and high availability.<br /><br />
                        <strong>Data Storage</strong>: Chooses appropriate data storage solutions, such as relational databases, NoSQL databases, or file systems, based on requirements.<br /><br />
                        <strong>Security</strong>: Incorporates security measures to protect data and system integrity, including encryption, authentication, and authorization.<br /><br />
                        <strong>API Design</strong>: Defines APIs for communication between system components and external services, ensuring clear and consistent interfaces.<br /><br />
                        <strong>Monitoring and Logging</strong>: Implements monitoring and logging to track system performance, detect issues, and facilitate troubleshooting and analysis.<br /><br />
                        <strong>Redundancy</strong>: Adds redundancy at various levels (e.g., hardware, network, services) to ensure system availability and fault tolerance.<br /><br />
                        <strong>Concurrency</strong>: Designs systems to handle concurrent operations efficiently, using techniques like locking, synchronization, and parallel processing.<br /><br />
                        <strong>Data Consistency</strong>: Ensures data consistency across distributed components and systems using techniques like consensus algorithms and data replication.<br /><br />
                        <strong>Scalability Strategies</strong>: Employs strategies such as sharding, partitioning, and caching to enhance system scalability and performance.<br /><br />
                        <strong>Deployment</strong>: Plans deployment strategies, including continuous integration and continuous deployment (CI/CD) pipelines, for efficient updates and releases.<br /><br />
                        <strong>User Experience</strong>: Considers user experience in the design process, ensuring that the system is intuitive, responsive, and meets user needs.<br /><br />
                        <strong>Cost Management</strong>: Balances cost considerations with system requirements, optimizing resource usage and minimizing operational expenses.<br /><br />
                        <strong>Documentation</strong>: Provides comprehensive documentation for system components, architecture, and design decisions to facilitate maintenance and onboarding.<br /><br />
                        <strong>Testing and Validation</strong>: Incorporates rigorous testing and validation processes to ensure that the system meets functional and non-functional requirements.
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
                <img src={laptopimg} alt="Laptop" height="450px" />
            </Stack>
            <Stack direction="row" justifyContent="space-between">
                <Box height="auto" width="60%" sx={{ ml: 2 }}>
                    <Stack direction="row" sx={{ mt: 3 }}>
                        <Box height="50px" width="50px">
                            <img src={SystemDesignLogo} alt="System Design Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Box>
                        <Typography variant="h4" sx={{ mt: 1, ml: 1, textTransform: 'uppercase' }}>System Design</Typography>
                    </Stack>
                    <Stack width="auto" direction="row">
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
                <Box width="35%" height="auto">
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
                        <ArchitectEssentialsQuickLinks />
                    </Box>
                </Box>
            </Stack>
        </Stack>
    );
};

export default SystemDesignInfo;
