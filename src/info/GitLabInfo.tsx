import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Accordion, AccordionSummary, AccordionDetails, Card, CardContent } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Gitlablogo from '../images/gitLabLogo.svg';
import CiCdQuickLinks from '../component/CicdQuickLinks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const GitLabInfo = () => {
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
                    <Typography>1. Introduction to GitLab</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Comprehensive Overview:</strong><br />
                        Deep dive into GitLab’s history, evolution, and significance in DevOps<br />
                        Exploring GitLab's architecture and ecosystem, including its self-hosted and cloud-hosted options<br /><br />
                        
                        <strong>Installation and Setup:</strong><br />
                        Advanced installation methods (Omnibus, Docker, Kubernetes, source installation)<br />
                        Detailed initial configuration, security best practices, and hardening GitLab for production use
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. Mastering GitLab UI and Version Control</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Expert Navigation of GitLab UI:</strong><br />
                        Advanced usage of GitLab's interface, including Projects, Groups, and advanced settings<br />
                        Customizing the GitLab environment for team-specific needs<br /><br />
                        
                        <strong>Advanced Version Control:</strong><br />
                        Mastering Git workflows (Git Flow, GitHub Flow, GitLab Flow)<br />
                        Advanced Git commands and conflict resolution techniques<br />
                        Automating repository management with GitLab's API
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. Advanced Project Management</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Expert Project Creation and Configuration:</strong><br />
                        Setting up complex projects with advanced settings, CI/CD configurations, and integrations<br />
                        Managing large-scale projects, subgroups, and multi-repository projects<br /><br />
                        
                        <strong>Advanced Issue and Merge Request Management:</strong><br />
                        Implementing custom issue templates, workflows, and automation<br />
                        Configuring and enforcing code review processes, approvals, and merge strategies
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. GitLab CI/CD Mastery</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>In-Depth CI/CD Pipeline Configuration:</strong><br />
                        Designing and optimizing CI/CD pipelines for large-scale, complex projects<br />
                        Advanced use of `.gitlab-ci.yml`, including variables, matrix builds, and dependency management<br />
                        Securing CI/CD pipelines with secrets management, dynamic environments, and protected branches<br /><br />
                        
                        <strong>Optimizing CI/CD for Performance:</strong><br />
                        Advanced caching strategies, artifact management, and pipeline efficiency<br />
                        Parallel builds, Docker layer caching, and multi-stage pipelines
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. GitLab Runners and Customization</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Advanced Runner Management:</strong><br />
                        Deep dive into GitLab Runner architecture, including custom executors<br />
                        Setting up and managing auto-scaling runners in Kubernetes, Docker, and cloud environments<br /><br />
                        
                        <strong>Customization and Extensibility:</strong><br />
                        Custom scripts and Docker images for runners<br />
                        Extending GitLab CI/CD pipelines with custom integrations and tools
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Security and Compliance</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Advanced Security Features:</strong><br />
                        Implementing GitLab's built-in security scanning tools (SAST, DAST, Dependency Scanning, License Compliance)<br />
                        Enforcing security policies, role-based access control (RBAC), and audit logging<br /><br />
                        
                        <strong>Compliance and Auditing:</strong><br />
                        Configuring GitLab for industry-specific compliance (PCI DSS, HIPAA, GDPR)<br />
                        Implementing and managing audit logs, enforcing regulatory requirements
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Monitoring, Logging, and Performance Tuning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Advanced Monitoring and Alerts:</strong><br />
                        Integrating GitLab with Prometheus and Grafana for comprehensive monitoring<br />
                        Setting up and tuning advanced alerting, performance dashboards, and health checks<br /><br />
                        
                        <strong>Performance Tuning and Optimization:</strong><br />
                        Scaling GitLab for enterprise use: optimizing GitLab for performance, reducing latency, and managing large-scale deployments
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. GitLab Advanced Integrations</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Enterprise-Level Integrations:</strong><br />
                        Integrating GitLab with enterprise tools (Jira, Jenkins, Slack, LDAP/AD, and custom third-party tools)<br />
                        Automating workflows with GitLab’s API, webhooks, and custom scripts<br /><br />
                        
                        <strong>Kubernetes and Cloud-Native Deployments:</strong><br />
                        Advanced GitLab Kubernetes integration, including GitOps, Helm charts, and managing Kubernetes clusters from GitLab<br />
                        Managing cloud-native CI/CD pipelines with cloud providers (AWS, GCP, Azure)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9. Disaster Recovery, Backup, and High Availability</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Enterprise Backup Strategies:</strong><br />
                        Setting up, managing, and automating GitLab backups for high availability<br />
                        Implementing and testing disaster recovery plans<br /><br />
                        
                        <strong>High Availability and Scaling:</strong><br />
                        Configuring GitLab for high availability with Geo, load balancing, and failover strategies<br />
                        Scaling GitLab horizontally and vertically to meet enterprise demands
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
                        <strong>GitLab</strong> is a web-based DevOps platform that provides source code management, CI/CD, and project management tools.<br /><br />
                        <strong>Repositories:</strong> support Git for version control, allowing for collaborative development and code management.<br /><br />
                        <strong>CI/CD Pipelines:</strong> automate the build, test, and deployment processes through configurable pipelines defined in .gitlab-ci.yml.<br /><br />
                        <strong>Jobs:</strong> are individual tasks within a pipeline, such as compiling code or running tests, and can be executed sequentially or in parallel.<br /><br />
                        <strong>Stages:</strong> organize jobs into phases, allowing you to control the order of execution within a pipeline.<br /><br />
                        <strong>Runners:</strong> execute the jobs defined in pipelines and can be GitLab-hosted or self-hosted for customized execution environments.<br /><br />
                        <strong>Merge Requests (MRs):</strong> facilitate code reviews and discussions before changes are merged into the main branch.<br /><br />
                        <strong>Issues:</strong> track bugs, tasks, and feature requests, providing a way to manage and prioritize work.<br /><br />
                        <strong>Boards:</strong> offer a Kanban-style interface for tracking and organizing issues and tasks.<br /><br />
                        <strong>Milestones:</strong> group issues and merge requests into larger projects or goals, helping to manage timelines and deliverables.<br /><br />
                        <strong>Secrets and Variables:</strong> securely store sensitive information and configuration settings for use in CI/CD pipelines.<br /><br />
                        <strong>Container Registry:</strong> provides a built-in Docker image registry for managing and distributing container images.<br /><br />
                        <strong>Package Registry:</strong> supports various package formats (like Maven, NPM) for managing dependencies and artifacts.<br /><br />
                        <strong>Code Quality:</strong> features include static code analysis, security scanning, and performance metrics integrated into pipelines.<br /><br />
                        <strong>Deployment Strategies:</strong> support methods like rolling deployments and blue-green deployments, enhancing deployment flexibility.<br /><br />
                        <strong>Security:</strong> includes features like vulnerability scanning, compliance management, and audit logs to ensure the security of the application.<br /><br />
                        <strong>Collaborative Tools:</strong> include wiki pages, snippet sharing, and real-time chat integration for enhanced team collaboration.<br /><br />
                        <strong>Self-Managed or Cloud:</strong> GitLab can be used as a self-hosted instance or as a cloud service, providing flexibility in deployment options.<br /><br />
                        <strong>Analytics and Reporting:</strong> offer insights into pipeline performance, code quality, and project progress through dashboards and reports.<br /><br />
                        <strong>Integrations:</strong> with external tools and services allow for extended functionality, such as third-party issue trackers, chat systems, and cloud providers.
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
                    <Box height={'50px'} width={'50px'}><img src={Gitlablogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/></Box>
                    <Typography variant="h4" sx={{mt:1, ml:1, textTransform:'uppercase'}}>git lab</Typography>
                </Stack>
                <Stack width={'auto'} direction={'row'}>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, position: 'relative', overflow: 'hidden' }}>
                        <MenuBookIcon />
                    </Box>
                    <Typography sx={{ mt: 2.5, ml:1 }}>15 Modules</Typography>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, ml: 1, position: 'relative', overflow: 'hidden' }}>
                        <MenuBookIcon />
                    </Box>
                    <Typography sx={{ mt: 2.5, ml:1 }}>6 Months</Typography>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, ml: 1, position: 'relative', overflow: 'hidden' }}>
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
                    <CiCdQuickLinks></CiCdQuickLinks>
                </Box>
            </Box>
            </Stack>
        </Stack>
    )
}

export default GitLabInfo;
