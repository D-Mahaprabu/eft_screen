import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ElasticStackLogo from '../images/elasticStackLogo.png';
import BackendQuickLinks from '../component/BackendQuickLinks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ElasticStackInfo = () => {
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
                    <Typography>1. Introduction to Elastic Stack</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview and Components:</strong><br />
                        What is Elastic Stack (ELK Stack)?<br />
                        Key components: Elasticsearch, Logstash, Kibana, Beats<br />
                        Use cases: log and event data analysis, real-time search and analytics
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. Elasticsearch</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Core Concepts:</strong><br />
                        Understanding Elasticsearch: indices, documents, and shards<br />
                        Cluster architecture: nodes and clusters<br /><br />

                        <strong>Basic Operations:</strong><br />
                        Indexing and searching documents<br />
                        CRUD operations with Elasticsearch<br /><br />

                        <strong>Mapping and Analyzers:</strong><br />
                        Defining mappings for structured and unstructured data<br />
                        Using analyzers to control text analysis
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. Logstash</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Introduction to Logstash:</strong><br />
                        Overview of Logstash: purpose and architecture<br />
                        Key concepts: pipelines, inputs, filters, outputs<br /><br />

                        <strong>Configuring Pipelines:</strong><br />
                        Setting up Logstash pipelines<br />
                        Common input plugins (file, beats, HTTP)<br />
                        Filtering and transforming data with filter plugins (grok, mutate)<br />
                        Output plugins (Elasticsearch, file, stdout)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Kibana</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Introduction to Kibana:</strong><br />
                        Overview of Kibana: purpose and features<br />
                        Setting up and configuring Kibana<br /><br />

                        <strong>Data Visualization:</strong><br />
                        Creating and customizing visualizations<br />
                        Building dashboards for data insights<br /><br />

                        <strong>Searching and Analyzing Data:</strong><br />
                        Using Kibana to query and analyze data<br />
                        Understanding Kibana's query language
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Beats</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Introduction to Beats:</strong><br />
                        Overview of Beats: lightweight data shippers<br />
                        Types of Beats: Filebeat, Metricbeat, Packetbeat, Heartbeat<br /><br />

                        <strong>Setting Up Beats:</strong><br />
                        Installing and configuring Beats<br />
                        Common use cases for different Beats
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Securing the Elastic Stack</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Security Best Practices:</strong><br />
                        Securing Elasticsearch: authentication and authorization<br />
                        Configuring TLS/SSL for secure communication<br /><br />

                        <strong>Role-Based Access Control:</strong><br />
                        Setting up roles and permissions in Kibana
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Performance Tuning and Scaling</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Optimizing Performance:</strong><br />
                        Indexing strategies for better performance<br />
                        Configuring Elasticsearch for high availability<br /><br />

                        <strong>Scaling the Elastic Stack:</strong><br />
                        Strategies for scaling Elasticsearch clusters<br />
                        Managing large-scale deployments
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
                        Setting up and configuring Elasticsearch, Logstash, Kibana, and Beats<br />
                        Creating a basic data pipeline with Logstash and visualizing data in Kibana<br /><br />
                        This concise curriculum covers the essential Elastic Stack topics that a backend developer
                        needs to understand, providing a solid foundation for effectively utilizing the Elastic Stack for log
                        management, search, and analytics.
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
                        <strong>Elastic Stack</strong>, formerly known as the ELK Stack, is a set of open-source tools for search, logging, and analytics.<br /><br />
                        <strong>Elastic Search</strong>: The core search and analytics engine of the stack, providing fast full-text search, indexing, and data analysis.<br /><br />
                        <strong>Kibana</strong>: A data visualization and exploration tool that provides a graphical interface for interacting with data stored in Elasticsearch.<br /><br />
                        <strong>Logstash</strong>: A data processing pipeline that ingests, transforms, and ships data to Elasticsearch or other destinations.<br /><br />
                        <strong>Beats</strong>: Lightweight data shippers that send various types of data (logs, metrics, etc.) from clients to Logstash or Elasticsearch.<br /><br />
                        <strong>Indexing</strong>: Elasticsearch indexes data to enable fast and efficient search queries and analytics.<br /><br />
                        <strong>Full-Text Search</strong>: Elasticsearch provides powerful full-text search capabilities, including relevance scoring and language processing.<br /><br />
                        <strong>Data Visualization</strong>: Kibana allows users to create visualizations like charts, graphs, and dashboards to analyze and interpret data.<br /><br />
                        <strong>Data Ingestion</strong>: Logstash and Beats handle data ingestion from various sources, including logs, metrics, and application data.<br /><br />
                        <strong>Real-Time Analytics</strong>: Elasticsearch supports real-time data indexing and querying, enabling up-to-date analytics and search results.<br /><br />
                        <strong>Aggregation</strong>: Elasticsearch provides powerful aggregation capabilities to summarize and analyze large volumes of data.<br /><br />
                        <strong>Cluster Management</strong>: Elasticsearch can be deployed in a cluster configuration, allowing horizontal scaling and high availability.<br /><br />
                        <strong>Security</strong>: The Elastic Stack includes security features like authentication, authorization, and encryption to protect data.<br /><br />
                        <strong>Alerting</strong>: Provides alerting capabilities to monitor data and trigger notifications or actions based on specified conditions.<br /><br />
                        <strong>Machine Learning</strong>: Integrates machine learning features to automatically detect anomalies and patterns in data.<br /><br />
                        <strong>Visualization Dashboards</strong>: Kibana dashboards can be customized to display different visualizations, providing insights into data trends and metrics.<br /><br />
                        <strong>Data Enrichment</strong>: Logstash supports data enrichment by adding context or transforming data before sending it to Elasticsearch.<br /><br />
                        <strong>APIs</strong>: Elasticsearch offers RESTful APIs for interacting with and managing data, making integration with other systems straightforward.<br /><br />
                        <strong>Community and Support</strong>: The Elastic Stack has an active community and offers commercial support options for enterprise needs.<br /><br />
                        <strong>Open Source and Commercial</strong>: While the core components are open-source, Elastic also offers commercial features and support through Elastic Stack subscriptions.
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
                            <img src={ElasticStackLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Box>
                        <Typography variant="h4" sx={{ mt: 1, ml: 1, textTransform: 'uppercase' }}>Elastic Stack</Typography>
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
};

export default ElasticStackInfo;
