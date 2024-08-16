import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import KafkaLogo from '../images/kafkaLogo.png';
import BackendQuickLinks from '../component/BackendQuickLinks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const KafkaInfo = () => {
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
                    <Typography>1. Introduction to Kafka</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview and Features:</strong><br />
                        What is Kafka?<br />
                        Key features: scalability, durability, fault-tolerance<br />
                        Use cases: real-time data streaming, log aggregation, messaging
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. Kafka Architecture</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Core Concepts:</strong><br />
                        Topics, partitions, and replicas<br />
                        Producers and consumers<br />
                        Brokers and clusters<br />
                        ZooKeeper and its role in Kafka
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. Getting Started with Kafka</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Installation and Setup:</strong><br />
                        Installing Kafka and ZooKeeper<br />
                        Starting Kafka and ZooKeeper
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Producing and Consuming Messages</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Producers:</strong><br />
                        Writing a basic producer<br />
                        Configuring producers: acks, retries, and batching<br /><br />

                        <strong>Consumers:</strong><br />
                        Writing a basic consumer<br />
                        Configuring consumers: group IDs, offsets, and polling
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Advanced Kafka Features</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Kafka Streams:</strong><br />
                        Introduction to Kafka Streams API<br />
                        Building stream processing applications<br /><br />

                        <strong>Kafka Connect:</strong><br />
                        Introduction to Kafka Connect<br />
                        Setting up connectors for data integration
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Managing Kafka</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Monitoring and Management:</strong><br />
                        Monitoring Kafka with built-in tools and third-party solutions<br />
                        Managing Kafka clusters<br /><br />

                        <strong>Security:</strong><br />
                        Configuring SSL encryption<br />
                        Setting up authentication and authorization (SASL, ACLs)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Performance Tuning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Optimizing Kafka:</strong><br />
                        Best practices for performance tuning<br />
                        Configuring Kafka for high throughput and low latency
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. Practical Exercises</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Hands-on Labs:</strong><br />
                        Setting up a Kafka cluster<br />
                        Writing and configuring producers and consumers<br /><br />
                        This concise curriculum covers the essential Kafka topics that a backend developer needs to
                        understand, providing a solid foundation for working with Kafka in real-world applications.
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
                        <strong>Kafka</strong> is an open-source, distributed event streaming platform designed for high-throughput, fault-tolerant data processing.<br /><br />
                        <strong>Publish-Subscribe Model</strong>: Kafka operates on a publish-subscribe model where producers send messages to topics and consumers read messages from topics.<br /><br />
                        <strong>Topics</strong>: Data is organized into topics, which are logical channels to which messages are published and from which messages are consumed.<br /><br />
                        <strong>Partitions</strong>: Topics are divided into partitions, allowing Kafka to scale horizontally and distribute data across multiple brokers.<br /><br />
                        <strong>Brokers</strong>: Kafka clusters consist of multiple brokers that store and manage partitions, providing high availability and fault tolerance.<br /><br />
                        <strong>Producers</strong>: Producers are components that send data to Kafka topics, pushing messages to partitions within topics.<br /><br />
                        <strong>Consumers</strong>: Consumers read data from Kafka topics, typically organized into consumer groups for parallel processing and load balancing.<br /><br />
                        <strong>Offset Management</strong>: Kafka tracks the position of messages within partitions using offsets, allowing consumers to process messages from specific points.<br /><br />
                        <strong>Replication</strong>: Data within Kafka is replicated across multiple brokers to ensure durability and availability in case of broker failures.<br /><br />
                        <strong>High Throughput</strong>: Kafka is designed for high throughput, capable of handling large volumes of data with low latency.<br /><br />
                        <strong>Durability</strong>: Kafka guarantees message durability by persisting messages to disk and replicating them across multiple brokers.<br /><br />
                        <strong>Fault Tolerance</strong>: The distributed nature of Kafka and its replication mechanism provide resilience to broker failures and ensure data integrity.<br /><br />
                        <strong>Stream Processing</strong>: Kafka integrates with Kafka Streams for real-time stream processing, enabling complex data transformations and aggregations.<br /><br />
                        <strong>Connectors</strong>: Kafka Connect provides a framework for integrating Kafka with external systems like databases, message queues, and data lakes.<br /><br />
                        <strong>Schema Registry</strong>: Kafka Schema Registry helps manage and enforce message schemas, ensuring compatibility and data consistency across producers and consumers.<br /><br />
                        <strong>Consumer Groups</strong>: Consumers can be organized into consumer groups, allowing parallel consumption of messages from partitions and scalable processing.<br /><br />
                        <strong>Log Compaction</strong>: Kafka supports log compaction, which retains only the latest value for each key, reducing storage requirements and providing up-to-date data.<br /><br />
                        <strong>Monitoring and Management</strong>: Kafka provides metrics and management tools for monitoring cluster health, performance, and operational metrics.<br /><br />
                        <strong>Security</strong>: Kafka includes security features such as encryption, authentication, and authorization to protect data and control access.<br /><br />
                        <strong>Community and Ecosystem</strong>: Kafka has a vibrant community and a rich ecosystem of tools and integrations, supported by extensive documentation and active development.
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
            <AppBarComponent></AppBarComponent>
            <Stack>
                <img src={laptopimg} alt=""  height={'450px'}/>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
            <Box height={'auto'} width={'60%'} sx={{ ml: 2 }} >
                <Stack direction={'row'} sx={{mt:3}}>
                    <Box height={'50px'} width={'50px'}><img src={KafkaLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/></Box>
                    <Typography variant="h4" sx={{mt:1, ml:1, textTransform:'uppercase'}}>Kafka</Typography>
                </Stack>
                <Stack width={'auto'} direction={'row'}>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, position: 'relative', overflow: 'hidden' }}>
                        <MenuBookIcon />
                    </Box>
                    <Typography sx={{ mt: 2.5, ml:1 }}>15 Modules</Typography>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, ml: 3, position: 'relative', overflow: 'hidden' }}>
                        <MenuBookIcon />
                    </Box>
                    <Typography sx={{ mt: 2.5, ml:1 }}>72 Hours</Typography>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, ml: 3, position: 'relative', overflow: 'hidden' }}>
                        <MenuBookIcon />
                    </Box>
                    <Typography sx={{ mt: 2.5, ml:1 }}>Beginner</Typography>
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
            <Card sx={{ width: 380, height: 90, mx: 'auto', mt:2, ml:2, mr: 122, borderRadius: 2, bgcolor: '#F5F4F0' }}>
                      <CardContent>
                        <Box sx={{ width: 40, height: 40, borderRadius: '3px', bgcolor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', mt: 0.5, fontSize: 30 }}>
                            ★
                        </Box>
                            <Typography variant="body2" sx={{mt: -5, ml: 6}}>
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

export default KafkaInfo;
