import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CapacityPlanningLogo from '../images/capacityPlanningLogo.png';
import ArchitectEssentialsQuickLinks from '../component/ArchitectEssentialsQuickLinks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CapacityPlanningInfo = () => {
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
                    <Typography>1. Introduction to Capacity Planning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Definition and Importance:</strong><br />
                        What is capacity planning?<br />
                        The importance of capacity planning in IT and business
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. Key Concepts in Capacity Planning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Capacity vs. Demand:</strong><br />
                        Understanding capacity (resource availability)<br />
                        Understanding demand (resource requirements)<br /><br />
                        
                        <strong>Types of Capacity Planning:</strong><br />
                        Short-term (tactical) planning<br />
                        Long-term (strategic) planning
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. Steps in Capacity Planning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Assessing Current Capacity:</strong><br />
                        Inventory of existing resources<br />
                        Current utilization analysis<br /><br />

                        <strong>Forecasting Demand:</strong><br />
                        Historical data analysis<br />
                        Predictive analytics and modeling<br /><br />

                        <strong>Gap Analysis:</strong><br />
                        Comparing current capacity to future demand<br />
                        Identifying capacity gaps and bottlenecks<br /><br />

                        <strong>Planning and Implementation:</strong><br />
                        Developing a capacity plan<br />
                        Allocating resources and implementing changes
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Tools and Techniques for Capacity Planning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Monitoring Tools:</strong><br />
                        Examples: Nagios, Zabbix, New Relic<br /><br />

                        <strong>Data Collection and Analysis:</strong><br />
                        Performance metrics (CPU, memory, network usage)<br />
                        Trend analysis and reporting tools<br /><br />

                        <strong>Forecasting Tools:</strong><br />
                        Time-series analysis tools<br />
                        Predictive modeling tools (e.g., R, Python)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Best Practices in Capacity Planning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Regular Monitoring and Review:</strong><br />
                        Continuous monitoring of resource utilization<br />
                        Regular updates to capacity plans based on new data<br /><br />

                        <strong>Scalability and Flexibility:</strong><br />
                        Designing systems that can scale up/down as needed<br />
                        Implementing cloud-based solutions for flexible resource management<br /><br />

                        <strong>Collaboration and Communication:</strong><br />
                        Involving stakeholders in the planning process<br />
                        Communicating capacity plans and changes to relevant teams
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Implementation Possibilities</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Cloud Infrastructure:</strong><br />
                        Leveraging cloud services (AWS, Azure, Google Cloud) for scalable capacity<br />
                        Using auto-scaling features to adjust capacity dynamically<br /><br />

                        <strong>Virtualization and Containers:</strong><br />
                        Implementing virtualization (VMware, Hyper-V) to optimize resource use<br />
                        Using containers (Docker, Kubernetes) for efficient workload management<br /><br />

                        <strong>Hybrid Solutions:</strong><br />
                        Combining on-premises and cloud resources<br />
                        Creating hybrid infrastructure for cost-effective capacity management
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Measuring Success</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Key Performance Indicators (KPIs):</strong><br />
                        System performance metrics (response time, throughput)<br />
                        Cost metrics (resource costs, cost per transaction)<br /><br />

                        <strong>Feedback Loops:</strong><br />
                        Regularly reviewing capacity plans and outcomes<br />
                        Adjusting plans based on performance data and feedback<br /><br />
                        By following these steps and employing best practices, organizations can effectively manage
                        their resources, meet demand, and ensure smooth operations.
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
                        <strong>Capacity Planning</strong> is the process of determining the resources needed to meet future demand and ensure system performance.<br /><br />
                        <strong>Demand Forecasting</strong>: Involves predicting future resource needs based on historical data, trends, and business growth projections.<br /><br />
                        <strong>Resource Allocation</strong>: Ensures that resources such as CPU, memory, storage, and bandwidth are allocated appropriately to meet anticipated demand.<br /><br />
                        <strong>Performance Metrics</strong>: Monitors key performance metrics like response times, throughput, and error rates to assess current system capacity.<br /><br />
                        <strong>Scalability</strong>: Plans for scalability to accommodate growing workloads by scaling up (vertical scaling) or scaling out (horizontal scaling).<br /><br />
                        <strong>Capacity Analysis</strong>: Analyzes current capacity and identifies potential bottlenecks or limitations that could impact system performance.<br /><br />
                        <strong>Trend Analysis</strong>: Uses trend analysis to predict future demand based on historical usage patterns and anticipated changes.<br /><br />
                        <strong>Resource Planning</strong>: Develops plans for acquiring additional resources, such as hardware or cloud services, to meet future requirements.<br /><br />
                        <strong>Cost Management</strong>: Balances capacity needs with budget constraints to ensure cost-effective resource acquisition and utilization.<br /><br />
                        <strong>Redundancy</strong>: Incorporates redundancy and failover strategies to ensure high availability and reliability of resources.<br /><br />
                        <strong>Testing</strong>: Performs load testing and stress testing to validate capacity plans and identify potential issues before they impact production.<br /><br />
                        <strong>Scalability Planning</strong>: Develops strategies for scaling infrastructure to handle peak loads and unexpected spikes in demand.<br /><br />
                        <strong>Monitoring Tools</strong>: Utilizes monitoring tools and dashboards to continuously track resource usage and performance against capacity plans.<br /><br />
                        <strong>Capacity Reviews</strong>: Conducts regular capacity reviews to reassess and adjust plans based on changing business needs and technology advancements.<br /><br />
                        <strong>Documentation</strong>: Documents capacity planning processes, decisions, and assumptions to provide a reference for future planning and audits.<br /><br />
                        <strong>Risk Management</strong>: Identifies and mitigates risks associated with capacity planning, such as resource shortages or system failures.<br /><br />
                        <strong>Vendor Management</strong>: Manages relationships with vendors and service providers to ensure timely delivery of resources and support.<br /><br />
                        <strong>Automated Scaling</strong>: Implements automated scaling solutions to dynamically adjust resources based on real-time demand.<br /><br />
                        <strong>Capacity Planning Models</strong>: Utilizes models and simulations to predict future capacity needs and assess the impact of different scenarios.<br /><br />
                        <strong>Continuous Improvement</strong>: Continuously improves capacity planning processes by incorporating feedback, lessons learned, and new best practices.
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
                <img src={laptopimg} alt="" height="450px" />
            </Stack>
            <Stack direction="row" justifyContent="space-between">
                <Box height="auto" width="60%" sx={{ ml: 2 }}>
                    <Stack direction="row" sx={{ mt: 3 }}>
                        <Box height="50px" width="50px">
                            <img src={CapacityPlanningLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Box>
                        <Typography variant="h4" sx={{ mt: 1, ml: 1, textTransform: 'uppercase' }}>Capacity Planning</Typography>
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

export default CapacityPlanningInfo;
