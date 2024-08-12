import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Jenkinslogo from '../images/jenkinsLogo.svg';
import CiCdQuickLinks from '../component/CicdQuickLinks';

const JenkinsInfo = () => {
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
                    <Typography>1. Introduction to Jenkins</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview of Jenkins:</strong><br />
                        What is Jenkins?<br />
                        History and evolution of Jenkins<br />
                        Jenkins ecosystem and core concepts<br /><br />

                        <strong>Setting Up Jenkins:</strong><br />
                        Installing Jenkins<br />
                        Setting up Jenkins on different platforms (Windows, Linux, Docker)<br />
                        Initial configuration and security setup
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. Jenkins Basics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Jenkins UI and Configuration:</strong><br />
                        Understanding Jenkins dashboard and user interface<br />
                        Configuring system settings and global tools<br />
                        Managing Jenkins users and permissions<br /><br />

                        <strong>Creating and Running Jobs:</strong><br />
                        Creating freestyle jobs<br />
                        Understanding build triggers and schedules<br />
                        Running and monitoring jobs
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. Pipelines as Code</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Introduction to Jenkins Pipelines:</strong><br />
                        What is a Jenkins Pipeline?<br />
                        Benefits of using pipelines<br />
                        Declarative vs. scripted pipelines<br /><br />

                        <strong>Creating Pipelines:</strong><br />
                        Writing Jenkinsfile<br />
                        Pipeline syntax and structure<br />
                        Using the Blue Ocean plugin for pipeline creation
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Pipeline Stages and Steps</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Defining Pipeline Stages:</strong><br />
                        Understanding pipeline stages and steps<br />
                        Creating multi-stage pipelines<br />
                        Using parallel execution<br /><br />

                        <strong>Advanced Pipeline Steps:</strong><br />
                        Using input steps for manual approval<br />
                        Using script steps for custom actions<br />
                        Integrating with external tools and services
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Jenkins Plugins</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Understanding Plugins:</strong><br />
                        Overview of Jenkins plugin architecture<br />
                        Finding and installing plugins<br /><br />

                        <strong>Essential Plugins:</strong><br />
                        Git, GitHub, and Bitbucket plugins<br />
                        Pipeline plugins (Declarative, Scripted)<br />
                        Build tools plugins (Maven, Gradle)<br /><br />

                        <strong>Managing Plugins:</strong><br />
                        Updating and configuring plugins<br />
                        Troubleshooting plugin issues
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Automated Testing and Reporting</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Integrating Testing:</strong><br />
                        Running unit, integration, and functional tests<br />
                        Using popular testing frameworks (JUnit, TestNG)<br /><br />

                        <strong>Test Reporting:</strong><br />
                        Generating test reports<br />
                        Integrating with Jenkins (JUnit plugin, TestNG plugin)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Continuous Integration (CI) with Jenkins</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>CI Practices:</strong><br />
                        Setting up CI pipelines<br />
                        Automating builds and tests<br />
                        Handling build artifacts<br /><br />

                        <strong>Code Quality and Analysis:</strong><br />
                        Integrating static code analysis tools (SonarQube, Checkstyle, PMD)<br />
                        Analyzing code quality reports
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. Continuous Deployment (CD) with Jenkins</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>CD Practices:</strong><br />
                        Setting up CD pipelines<br />
                        Deployment strategies (Blue/Green, Canary, Rolling)<br /><br />

                        <strong>Environment Management:</strong><br />
                        Managing multiple environments (development, staging, production)<br />
                        Environment-specific configurations
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9. Jenkins with Containers and Orchestration</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Docker Integration:</strong><br />
                        Building and deploying Docker containers<br />
                        Using Jenkins with Docker agents<br /><br />

                        <strong>Kubernetes Integration:</strong><br />
                        Deploying applications to Kubernetes clusters<br />
                        Using Jenkins X for Kubernetes-native CI/CD
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel10'} onChange={handleAccordionChange('panel10')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>10. Security and Access Control</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Securing Jenkins:</strong><br />
                        Implementing security best practices<br />
                        Managing user authentication and authorization<br />
                        Configuring role-based access control (RBAC)<br /><br />

                        <strong>Credentials Management:</strong><br />
                        Storing and using credentials securely<br />
                        Integrating with credential management tools (HashiCorp Vault, AWS Secrets Manager)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel11'} onChange={handleAccordionChange('panel11')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>11. Scaling Jenkins</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Scaling Jenkins:</strong><br />
                        Setting up master-slave architecture<br />
                        Configuring distributed builds<br />
                        Managing build agents<br /><br />

                        <strong>Performance Optimization:</strong><br />
                        Optimizing Jenkins performance<br />
                        Monitoring Jenkins with tools like Prometheus and Grafana
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel12'} onChange={handleAccordionChange('panel12')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>12. Backup and Recovery</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Backup Strategies:</strong><br />
                        Setting up backup jobs<br />
                        Using plugins for automated backups<br /><br />

                        <strong>Disaster Recovery:</strong><br />
                        Planning for disaster recovery<br />
                        Restoring Jenkins from backups
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel13'} onChange={handleAccordionChange('panel13')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>13. Monitoring and Logging</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Monitoring Jenkins:</strong><br />
                        Setting up monitoring tools (Prometheus, Grafana)<br />
                        Using the Monitoring plugin<br /><br />

                        <strong>Logging and Auditing:</strong><br />
                        Configuring and managing Jenkins logs<br />
                        Setting up audit trails
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel14'} onChange={handleAccordionChange('panel14')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>14. Real-World Jenkins Implementations</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Case Studies:</strong><br />
                        Analyzing Jenkins implementations in successful companies<br />
                        Lessons learned and best practices<br /><br />

                        <strong>Industry Standards and Compliance:</strong><br />
                        Understanding compliance requirements (PCI DSS, HIPAA, GDPR)<br />
                        Implementing compliance in Jenkins pipelines
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel15'} onChange={handleAccordionChange('panel15')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>15. Hands-On Projects</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Project Planning:</strong><br />
                        Defining project requirements and objectives<br />
                        Designing Jenkins pipeline architecture<br /><br />

                        <strong>Development:</strong><br />
                        Implementing CI/CD pipelines for different project types<br />
                        Integrating advanced Jenkins features and best practices<br /><br />

                        <strong>Review and Presentation:</strong><br />
                        Peer review and feedback<br />
                        Final project presentation<br />
                        Course wrap-up and next steps<br /><br />
                        This curriculum provides a comprehensive and structured approach to mastering Jenkins,
                        covering both foundational and advanced topics, and equipping learners with the skills needed
                        to implement and manage effective CI/CD pipelines using Jenkins.
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
                    Jenkins is a tool that is used for automation.<br />
                    Jenkins facilitates the automation of several stages of the software development lifecycle, including application development, testing, and deployment.<br />  
                    It is mainly an open-source server that allows all the developers to build, test and deploy software. It is written in Java and runs on java only.<br /> 
                    By using Jenkins we can make a continuous integration of projects(jobs) or end-to-endpoint automation
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

    return (<Stack>
            <AppBarComponent></AppBarComponent>
            <Stack>
                <img src={laptopimg} alt=""  height={'450px'}/>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
            <Box height={'auto'} width={'60%'} sx={{ ml: 2 }} >
                <Stack direction={'row'} sx={{mt:3}}>
                    <Box height={'50px'} width={'50px'}><img src={Jenkinslogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/></Box>
                    <Typography variant="h4" sx={{mt:1, ml:1, textTransform:'uppercase'}}>jenkins</Typography>
                </Stack>
                <Stack width={'auto'} direction={'row'}>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: 'red', color: 'white', mt: 2, position: 'relative', overflow: 'hidden' }}>
                        <MenuBookIcon />
                    </Box>
                    <Typography sx={{ mt: 2.5, ml:1 }}>15 Modules</Typography>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: 'red', color: 'white', mt: 2, ml: 3, position: 'relative', overflow: 'hidden' }}>
                        <MenuBookIcon />
                    </Box>
                    <Typography sx={{ mt: 2.5, ml:1 }}>72 Hours</Typography>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: 'red', color: 'white', mt: 2, ml: 3, position: 'relative', overflow: 'hidden' }}>
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
                                    color: activeTab === 0 ? 'red' : 'rgba(0, 0, 0, 0.54)' 
                                }} 
                            />
                            <Tab 
                                label="Curriculum" 
                                sx={{ 
                                    color: activeTab === 1 ? 'red' : 'rgba(0, 0, 0, 0.54)' 
                                }} 
                            />
                            <Tab 
                                label="Reviews" 
                                sx={{ 
                                    color: activeTab === 2 ? 'red' : 'rgba(0, 0, 0, 0.54)' 
                                }} 
                            />
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
                    <CiCdQuickLinks></CiCdQuickLinks>
                </Box>
            </Box>
            </Stack>
        </Stack>
    )
}

export default JenkinsInfo;