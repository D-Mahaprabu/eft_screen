import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CircleCiLogo from '../images/circleCiLogo.png';
import CiCdQuickLinks from '../component/CicdQuickLinks';

const CircleCiInfo = () => {
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
                    <Typography>1. Introduction to CircleCI</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview of CircleCI:</strong><br />
                        What is CircleCI?<br />
                        History and evolution of CircleCI<br />
                        Key features and benefits
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. Setting Up CircleCI</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Creating a CircleCI Account:</strong><br />
                        Signing up and setting up your CircleCI account<br />
                        Connecting CircleCI to your version control system (GitHub, Bitbucket)<br /><br />

                        <strong>Initial Configuration:</strong><br />
                        Adding your first project to CircleCI<br />
                        Understanding the CircleCI dashboard
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. CircleCI Configuration Basics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Understanding `.circleci/config.yml`:</strong><br />
                        Structure and syntax of the configuration file<br />
                        Key concepts: jobs, workflows, steps, and commands<br /><br />

                        <strong>Defining Jobs and Workflows:</strong><br />
                        Creating basic jobs<br />
                        Setting up workflows to manage job sequences
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Advanced CircleCI Configuration</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Using Executors:</strong><br />
                        Different types of executors (Docker, machine, macOS)<br />
                        Configuring executors for specific environments<br /><br />

                        <strong>Optimizing Builds:</strong><br />
                        Caching dependencies<br />
                        Using workspaces to share data between jobs
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Environment Variables and Secrets Management</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Setting Environment Variables:</strong><br />
                        Defining and using environment variables in your configuration<br />
                        Securing sensitive information with contexts and encrypted environment variables
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Testing and Deployment with CircleCI</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Running Tests:</strong><br />
                        Configuring jobs to run tests<br />
                        Collecting and viewing test results<br /><br />

                        <strong>Continuous Deployment:</strong><br />
                        Setting up deployment jobs<br />
                        Integrating with cloud providers (AWS, Google Cloud, Azure)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Advanced Workflows</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Parallelism and Resource Classes:</strong><br />
                        Using parallelism to speed up builds<br />
                        Selecting appropriate resource classes for jobs<br /><br />

                        <strong>Conditional Steps and Branch Filters:</strong><br />
                        Configuring conditional steps<br />
                        Running jobs and workflows based on branch filters
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. Integrations and Notifications</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Integrating with Other Tools:</strong><br />
                        Integrating CircleCI with other DevOps tools (Slack, Jira)<br />
                        Using third-party orbs to extend functionality<br /><br />

                        <strong>Setting Up Notifications:</strong><br />
                        Configuring notifications for build and deployment statuses
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9. Security and Compliance</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Security Best Practices:</strong><br />
                        Securing your CircleCI configuration<br />
                        Managing user permissions and access control<br /><br />

                        <strong>Compliance and Audit Logs:</strong><br />
                        Enabling and viewing audit logs<br />
                        Ensuring compliance with industry standards
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel10'} onChange={handleAccordionChange('panel10')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>10. Monitoring and Troubleshooting</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Monitoring Builds:</strong><br />
                        Using CircleCI insights for monitoring builds and workflows<br />
                        Identifying and resolving common build issues<br /><br />

                        <strong>Debugging Builds:</strong><br />
                        Techniques for debugging failed builds<br />
                        Using SSH to access build environments for troubleshooting
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel11'} onChange={handleAccordionChange('panel11')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>11. Scaling and Performance Optimization</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Scaling CircleCI:</strong><br />
                        Managing and scaling resources for large projects<br />
                        Optimizing build performance for faster CI/CD pipelines<br /><br />

                        <strong>Advanced Performance Techniques:</strong><br />
                        Implementing advanced caching strategies<br />
                        Utilizing matrix builds for comprehensive testing<br /><br />
                        This curriculum covers the essential aspects of using CircleCI for continuous integration and
                        deployment, providing a comprehensive guide for both beginners and advanced users.
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
                        <strong>CircleCI</strong> is a continuous integration and continuous delivery (CI/CD) platform that automates the software development pipeline.<br /><br />
                        <strong>Configuration:</strong> is done using a .circleci/config.yml file, which defines workflows, jobs, and steps.<br /><br />
                        <strong>Jobs:</strong> are individual tasks like building, testing, or deploying, and they are executed in parallel or sequentially as defined.<br /><br />
                        <strong>Workflows:</strong> orchestrate the execution of jobs, allowing you to define complex pipelines with dependencies and conditional logic.<br /><br />
                        <strong>Insights Dashboard:</strong> provides visualizations and metrics on pipeline performance, success rates, and build times, helping teams monitor and optimize their CI/CD processes.<br /><br />
                        <strong>Build Caching:</strong> improves build performance by reusing previously built artifacts and dependencies.<br /><br />
                        <strong>Parallelism:</strong> allows jobs to run concurrently, speeding up the build and test process.<br /><br />
                        <strong>Customizable Executors:</strong> let you choose between Docker, machine (VM), or macOS environments for running jobs.<br /><br />
                        <strong>Integrations:</strong> with version control systems like GitHub, GitLab, and Bitbucket streamline the CI/CD process.<br /><br />
                        <strong>Orbs:</strong> are reusable packages of CircleCI configuration that simplify and standardize common tasks.<br /><br />
                        <strong>Environment Variables:</strong> are used to store sensitive information and configuration settings securely.<br /><br />
                        <strong>Workspaces:</strong> allow jobs to share data between steps within the same workflow, facilitating complex pipelines.<br /><br />
                        <strong>Artifacts:</strong> are files or directories produced by jobs that can be saved and used later in the pipeline.<br /><br />
                        <strong>SSH:</strong> Access provides the ability to debug running jobs by connecting directly to the build environment.<br /><br />
                        <strong>Test Insights:</strong> offer detailed analytics on test performance and failures, helping you identify and address issues quickly.<br /><br />
                        <strong>Deployment:</strong> features support various deployment strategies, including rolling deployments and blue-green deployments.<br /><br />
                        <strong>CircleCI CLI:</strong> (Command Line Interface) allows you to interact with CircleCI from your local machine for tasks like local builds and pipeline configuration validation.<br /><br />
                        <strong>Security:</strong> practices include role-based access control, secure environment variable management, and integration with security tools.<br /><br />
                        <strong>Monitoring and Notifications:</strong> provide real-time updates on build and deployment status through various channels like email or Slack.<br /><br />
                        <strong>Scalability:</strong> handles increased workloads by dynamically scaling resources based on demand, ensuring efficient build processes.
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
                    <Box height={'50px'} width={'50px'}><img src={CircleCiLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/></Box>
                    <Typography variant="h4" sx={{mt:1, ml:1, textTransform:'uppercase'}}>circleci</Typography>
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
                    <CiCdQuickLinks></CiCdQuickLinks>
                </Box>
            </Box>
            </Stack>
        </Stack>
    )
}

export default CircleCiInfo;