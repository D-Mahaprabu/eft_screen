import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PrometheusLogo from '../images/prometheusLogo.svg';
import BackendQuickLinks from '../component/BackendQuickLinks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PrometheusInfo = () => {
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
                    <Typography>1: Introduction to Prometheus</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview and Features:</strong><br/>
                        What is Prometheus?<br/>
                        Key features: time-series database, flexible queries, alerting<br/>
                        Use cases: monitoring, alerting, performance metrics
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2: Prometheus Architecture</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Core Components:</strong><br/>
                        Prometheus server<br/>
                        Exporters<br/>
                        Pushgateway<br/>
                        Alertmanager<br/>
                        Grafana integration for visualization
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3: Setting Up Prometheus</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Installation:</strong><br/>
                        Installing Prometheus<br/>
                        Basic configuration (prometheus.yml)<br/><br/>

                        <strong>Running Prometheus:</strong><br/>
                        Starting the Prometheus server<br/>
                        Understanding the Prometheus UI
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4: Metrics Collection</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Instrumenting Applications:</strong><br/>
                        Adding Prometheus client libraries to applications (e.g., for Java, Python, Go)<br/>
                        Exposing metrics endpoints<br/><br/>

                        <strong>Using Exporters:</strong><br/>
                        Common exporters: Node Exporter, Blackbox Exporter, cAdvisor<br/>
                        Configuring and running exporters
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5: Querying with PromQL</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Introduction to PromQL:</strong><br/>
                        Basics of Prometheus Query Language (PromQL)<br/>
                        Writing queries to extract and analyze metrics<br/><br/>

                        <strong>Advanced PromQL:</strong><br/>
                        Aggregation operators and functions<br/>
                        Rate calculations and histogram queries
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6: Alerting and Notification</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Setting Up Alerting Rules:</strong><br/>
                        Defining alerting rules in Prometheus<br/>
                        Configuring Alertmanager<br/><br/>

                        <strong>Notification Channels:</strong><br/>
                        Integrating Alertmanager with notification channels (Email, Slack, PagerDuty)<br/>
                        Managing alert silences and inhibition
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7: Visualizing Metrics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Grafana Integration:</strong><br/>
                        Setting up Grafana with Prometheus<br/>
                        Creating and customizing dashboards in Grafana<br/><br/>

                        <strong>Prometheus Console Templates:</strong><br/>
                        Using Prometheus's built-in graphing capabilities
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8: Performance Tuning and Best Practices</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Optimizing Prometheus:</strong><br/>
                        Retention policies and storage management<br/>
                        Scaling Prometheus for high availability<br/><br/>

                        <strong>Best Practices:</strong><br/>
                        Labeling and naming metrics<br/>
                        Efficient use of resources and query optimization
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9: Practical Exercises</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Hands-on Labs:</strong><br/>
                        Installing and configuring Prometheus and Node Exporter<br/>
                        Writing basic and advanced PromQL queries<br/><br/>
                        This concise curriculum covers the essential Prometheus topics that a backend developer
                        needs to understand, providing a solid foundation for implementing and managing monitoring
                        solutions with Prometheus.
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
                        <strong>Prometheus</strong> is an open-source monitoring and alerting toolkit designed for reliability and scalability.<br /><br />
                        <strong>Time-Series Database</strong>: Prometheus stores data in a time-series format, enabling efficient querying and analysis of metrics over time.<br /><br />
                        <strong>Metric Collection</strong>: Collects metrics from configured endpoints at specified intervals using HTTP pull requests.<br /><br />
                        <strong>PromQL</strong>: Prometheus Query Language (PromQL) is used for querying and aggregating time-series data, offering powerful data manipulation capabilities.<br /><br />
                        <strong>Data Model</strong>: Organizes metrics into a multi-dimensional data model with labels, allowing for rich and flexible querying.<br /><br />
                        <strong>Exporters</strong>: Utilizes exporters to collect metrics from various services and systems, converting them into Prometheus-compatible formats.<br /><br />
                        <strong>Alerting</strong>: Supports alerting through Alertmanager, which handles alerts generated by Prometheus and manages notifications.<br /><br />
                        <strong>Service Discovery</strong>: Provides service discovery mechanisms to dynamically discover targets for monitoring based on various criteria.<br /><br />
                        <strong>Push Gateway</strong>: Allows for pushing metrics from short-lived jobs or applications to Prometheus via the Push Gateway.<br /><br />
                        <strong>Scraping</strong>: Prometheus regularly scrapes metrics from configured endpoints to collect and store time-series data.<br /><br />
                        <strong>Visualization</strong>: Integrates with Grafana for creating dashboards and visualizing metrics in a user-friendly manner.<br /><br />
                        <strong>High Availability</strong>: Prometheus can be configured in a high-availability setup with multiple instances to ensure reliability and fault tolerance.<br /><br />
                        <strong>Data Retention</strong>: Configurable data retention policies allow users to manage the amount of time data is kept in storage.<br /><br />
                        <strong>Metrics Aggregation</strong>: Prometheus supports various aggregation functions, such as sums, averages, and rate calculations, for analyzing data.<br /><br />
                        <strong>Label-based Filtering</strong>: Metrics are identified and filtered based on labels, enabling detailed and granular analysis of data.<br /><br />
                        <strong>API Access</strong>: Provides a REST API for querying and retrieving metrics data, allowing integration with other systems and tools.<br /><br />
                        <strong>Scrape Interval</strong>: Configurable scrape intervals determine how frequently Prometheus collects metrics from endpoints.<br /><br />
                        <strong>Security</strong>: Prometheus includes basic security features such as authentication and access control, though additional measures may be needed for production environments.<br /><br />
                        <strong>Community and Ecosystem</strong>: Prometheus has an active community and a rich ecosystem of tools, plugins, and integrations.<br /><br />
                        <strong>Deployment</strong>: Can be deployed on various platforms, including cloud services, Kubernetes, and on-premises environments, for flexible and scalable monitoring.
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
                            <img src={PrometheusLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Box>
                        <Typography variant="h4" sx={{ ml: 1, textTransform: 'uppercase' }}>Prometheus</Typography>
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

export default PrometheusInfo;
