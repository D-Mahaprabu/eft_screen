import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DockerLogo from '../images/dockerLogo.png';
import DeploymentQuickLinks from '../component/DeploymentQuickLinks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DockerInfo = () => {
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
                    <Typography>1. Introduction to Docker</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview of Docker:</strong><br />
                        History and evolution of Docker<br />
                        Benefits and features of containerization<br />
                        Key Docker concepts: images, containers, registries, and orchestration<br /><br />
                        
                        <strong>Getting Started with Docker:</strong><br />
                        Installing Docker on various platforms<br />
                        Overview of the Docker architecture (Docker Engine, Docker CLI, Docker Desktop)<br />
                        Navigating Docker documentation and community resources
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. Docker Basics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Docker Images:</strong><br />
                        Understanding Docker images and layers<br />
                        Building Docker images using Dockerfile<br />
                        Managing images with Docker Hub and private registries<br /><br />

                        <strong>Docker Containers:</strong><br />
                        Creating and running Docker containers<br />
                        Understanding container lifecycle and management<br />
                        Working with container networking and storage
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. Docker CLI and Commands</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Core Docker Commands:</strong><br />
                        Basic commands for images and containers (build, run, pull, push, etc.)<br />
                        Inspecting and managing containers (start, stop, restart, remove)<br />
                        Using Docker logs and Docker exec for troubleshooting<br /><br />

                        <strong>Advanced Docker Commands:</strong><br />
                        Managing container volumes and bind mounts<br />
                        Networking commands for creating and managing Docker networks<br />
                        Using Docker Compose for multi-container applications
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Docker Networking</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Networking Basics:</strong><br />
                        Understanding Docker's default bridge network<br />
                        Configuring container networking modes (bridge, host, none, overlay)<br /><br />

                        <strong>Advanced Networking:</strong><br />
                        Creating and managing user-defined networks<br />
                        Working with Docker networking plugins<br />
                        Configuring DNS and service discovery in Docker
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Docker Storage</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Storage Concepts:</strong><br />
                        Understanding Docker storage drivers<br />
                        Managing data persistence with Docker volumes<br /><br />

                        <strong>Advanced Storage:</strong><br />
                        Creating and using bind mounts<br />
                        Implementing storage strategies for stateful applications<br />
                        Backup and restore strategies for Docker volumes
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Docker Compose</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Introduction to Docker Compose:</strong><br />
                        Understanding the purpose and benefits of Docker Compose<br />
                        Writing Docker Compose files (docker-compose.yml)<br /><br />

                        <strong>Multi-Container Applications:</strong><br />
                        Defining and managing multi-container applications with Compose<br />
                        Using Compose commands for lifecycle management<br />
                        Networking and volumes in Docker Compose
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Docker Swarm</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Introduction to Docker Swarm:</strong><br />
                        Overview of Docker Swarm mode and its architecture<br />
                        Setting up a Swarm cluster<br /><br />

                        <strong>Swarm Management:</strong><br />
                        Deploying and managing services in Swarm<br />
                        Configuring service discovery and load balancing<br />
                        Managing Swarm nodes and scaling services
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. Docker Security</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Security Fundamentals:</strong><br />
                        Best practices for securing Docker containers<br />
                        Understanding Docker's security architecture<br /><br />

                        <strong>Advanced Security:</strong><br />
                        Using Docker Bench for Security<br />
                        Implementing container isolation and namespaces<br />
                        Managing secrets and sensitive data with Docker
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9. Docker for CI/CD</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Integrating Docker with CI/CD Pipelines:</strong><br />
                        Overview of CI/CD concepts and Docker's role in pipelines<br />
                        Using Docker in Jenkins, GitLab CI, and GitHub Actions<br /><br />

                        <strong>Automating Docker Builds and Deployments:</strong><br />
                        Setting up automated builds with Docker Hub and private registries<br />
                        Implementing deployment strategies with Docker Compose and Swarm
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel10'} onChange={handleAccordionChange('panel10')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>10. Advanced Docker Usage</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Custom Docker Networks:</strong><br />
                        Configuring advanced network setups (multi-host networking, overlay networks)<br />
                        Using third-party networking plugins<br /><br />

                        <strong>Optimizing Docker Performance:</strong><br />
                        Best practices for image optimization<br />
                        Monitoring and profiling Docker containers
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel11'} onChange={handleAccordionChange('panel11')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>11. Real-World Implementations</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Case Studies:</strong><br />
                        Analyzing successful Docker implementations in various industries<br />
                        Lessons learned and best practices from industry leaders<br /><br />

                        <strong>Project Planning:</strong><br />
                        Defining project requirements and objectives<br />
                        Designing Docker architecture for real-world scenarios
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel12'} onChange={handleAccordionChange('panel12')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>12. Hands-On Projects</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Development:</strong><br />
                        Implementing Docker solutions for different project types<br />
                        Integrating advanced Docker features and best practices<br /><br />

                        <strong>Review and Presentation:</strong><br />
                        Peer review and feedback on projects<br />
                        Final project presentation<br />
                        Course wrap-up and next steps<br /><br />
                        This curriculum provides a comprehensive and structured approach to mastering Docker,
                        covering both foundational and advanced topics, and equipping learners with the skills needed
                        to effectively use Docker for a variety of containerization and DevOps tasks.
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
                        Mastering Docker allows you to create, deploy, and manage containerized applications, simplifying development, testing, and deployment across various environments
                        gaining expertise in Docker is highly valued in DevOps and development roles, leading to better job opportunities, increased salaries, and career growth.
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
                        <Box>
                            <img src={DockerLogo} alt="" width={75} height={60}  />
                        </Box>
                        <Typography variant="h4" sx={{ mt: 1, ml: 1, textTransform: 'uppercase' }}>Docker</Typography>
                    </Stack>
                    <Stack width={'auto'} direction={'row'}>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, position: 'relative', overflow: 'hidden' }}>
                            <MenuBookIcon />
                        </Box>
                        <Typography sx={{ mt: 2.5, ml: 1 }}>12 Modules</Typography>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, ml: 3, position: 'relative', overflow: 'hidden' }}>
                            <MenuBookIcon />
                        </Box>
                        <Typography sx={{ mt: 2.5, ml: 1 }}>38 Hours</Typography>
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
                        <DeploymentQuickLinks />
                    </Box>
                </Box>
            </Stack>
        </Stack>
    );
}

export default DockerInfo;
