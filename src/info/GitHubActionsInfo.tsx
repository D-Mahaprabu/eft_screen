import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GithubActionsLogo from '../images/gitHubActionsLogo.png';
import CiCdQuickLinks from '../component/CicdQuickLinks';

const GitHubActionsInfo = () => {
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
                    <Typography>1. Introduction to GitHub Actions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview of GitHub Actions:</strong><br />
                        What is GitHub Actions?<br />
                        Benefits and key features<br />
                        Comparison with other CI/CD tools<br /><br />

                        <strong>Architecture and Components:</strong><br />
                        Understanding workflows, jobs, and steps<br />
                        Introduction to runners<br />
                        Exploring the GitHub Actions marketplace
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. Getting Started with GitHub Actions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Setting Up:</strong><br />
                        Creating a GitHub repository<br />
                        Navigating the GitHub Actions tab<br />
                        Enabling GitHub Actions for your repository<br /><br />

                        <strong>Creating Your First Workflow:</strong><br />
                        Introduction to workflow files and YAML syntax<br />
                        Setting up a basic workflow<br />
                        Running your first GitHub Actions workflow
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. Workflow Basics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Defining Workflows:</strong><br />
                        Workflow triggers (push, pull_request, schedule, workflow_dispatch)<br />
                        Using events to trigger workflows<br />
                        Configuring jobs and steps<br /><br />

                        <strong>Using Actions:</strong><br />
                        Introduction to pre-built actions from the GitHub Marketplace<br />
                        Using actions in your workflows<br />
                        Writing custom actions<br /><br />

                        <strong>Managing Workflow Artifacts:</strong><br />
                        Uploading and downloading artifacts<br />
                        Storing build outputs and logs
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Advanced Workflow Configuration</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Job Dependencies and Matrix Builds:</strong><br />
                        Defining job dependencies and sequencing<br />
                        Using matrix builds for parallel job execution<br /><br />

                        <strong>Environment Variables and Secrets:</strong><br />
                        Using environment variables in workflows<br />
                        Storing and accessing secrets securely<br /><br />

                        <strong>Reusable Workflows:</strong><br />
                        Creating reusable workflows<br />
                        Calling reusable workflows from other workflows
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Custom Actions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Creating Custom Actions:</strong><br />
                        Types of custom actions (Docker container actions, JavaScript actions, Composite actions)<br />
                        Writing and publishing custom actions<br /><br />

                        <strong>Testing and Debugging Actions:</strong><br />
                        Testing custom actions locally<br />
                        Debugging workflows and actions<br />
                        Using workflow logs for troubleshooting
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Continuous Integration (CI) with GitHub Actions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Setting Up CI Pipelines:</strong><br />
                        Configuring build and test workflows<br />
                        Integrating with various programming languages and frameworks<br /><br />

                        <strong>Automated Testing:</strong><br />
                        Running unit tests, integration tests, and end-to-end tests<br />
                        Generating and analyzing test reports<br /><br />

                        <strong>Code Quality and Analysis:</strong><br />
                        Integrating code quality tools (ESLint, Pylint, etc.)<br />
                        Using code coverage tools and generating reports
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Continuous Deployment (CD) with GitHub Actions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Setting Up CD Pipelines:</strong><br />
                        Configuring deployment workflows<br />
                        Deploying to various environments (staging, production)<br /><br />

                        <strong>Deployment Strategies:</strong><br />
                        Implementing Blue/Green deployments<br />
                        Implementing Canary deployments<br />
                        Rolling back deployments<br /><br />

                        <strong>Integrating with Cloud Providers:</strong><br />
                        Deploying to AWS, Azure, Google Cloud<br />
                        Using GitHub Actions for Kubernetes deployments
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. Security and Compliance</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Securing Workflows:</strong><br />
                        Best practices for securing workflows and actions<br />
                        Managing access to secrets and sensitive data<br /><br />

                        <strong>Compliance and Auditing:</strong><br />
                        Implementing compliance checks in workflows<br />
                        Using audit logs and reports for compliance
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9. Monitoring and Optimization</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Monitoring Workflows:</strong><br />
                        Setting up monitoring for GitHub Actions<br />
                        Using third-party monitoring tools<br /><br />

                        <strong>Performance Optimization:</strong><br />
                        Optimizing workflow execution times<br />
                        Managing and scaling self-hosted runners<br /><br />

                        <strong>Alerts and Notifications:</strong><br />
                        Configuring alerts for workflow events<br />
                        Integrating with notification services (Slack, Teams)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel10'} onChange={handleAccordionChange('panel10')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>10. Best Practices and Real-World Implementations</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Best Practices:</strong><br />
                        Writing maintainable and efficient workflows<br />
                        Using version control for workflows<br /><br />

                        <strong>Case Studies:</strong><br />
                        Analyzing successful GitHub Actions implementations<br />
                        Lessons learned and best practices from industry leaders
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel11'} onChange={handleAccordionChange('panel11')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>11. Hands-On Projects</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Project Planning:</strong><br />
                        Defining project requirements and objectives<br />
                        Designing GitHub Actions workflows for real-world scenarios<br /><br />

                        <strong>Development:</strong><br />
                        Implementing CI/CD pipelines for different project types<br />
                        Integrating advanced GitHub Actions features and best practices<br /><br />

                        <strong>Review and Presentation:</strong><br />
                        Peer review and feedback on projects<br />
                        Final project presentation<br />
                        Course wrap-up and next steps<br /><br />
                        This curriculum provides a comprehensive and structured approach to mastering GitHub
                        Actions, covering both foundational and advanced topics, and equipping learners with the skills
                        needed to effectively implement and manage CI/CD pipelines using GitHub Actions.
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
                        <strong>GitHub Actions</strong> is a CI/CD and automation tool integrated directly within GitHub repositories.<br /><br />
                        <strong>Workflows:</strong> are defined in YAML files located in the .github/workflows directory of a repository.<br /><br />
                        <strong>Jobs:</strong> represent individual tasks within a workflow, and they can run in parallel or sequentially based on dependencies.<br /><br />
                        <strong>Actions:</strong> are reusable units of code that can be used to perform tasks like building, testing, or deploying; they are available in the GitHub Marketplace.<br /><br />
                        <strong>Runners:</strong> execute jobs and can be GitHub-hosted or self-hosted on your own infrastructure.<br /><br />
                        <strong>Triggers:</strong> start workflows based on events such as push, pull request, issue creation, or scheduled times.<br /><br />
                        <strong>Artifacts:</strong> are files produced by jobs that can be saved and shared across jobs within the same workflow.<br /><br />
                        <strong>Secrets:</strong> are used to store sensitive information securely, such as API keys or deployment credentials.<br /><br />
                        <strong>Matrices:</strong> enable you to run jobs across multiple configurations, such as different operating systems or versions of a language.<br /><br />
                        <strong>Caching:</strong> speeds up workflows by storing and reusing dependencies and other files between runs.<br /><br />
                        <strong>Environments:</strong> define deployment environments and enable environment-specific rules and protection, such as manual approvals.<br /><br />
                        <strong>GitHub Marketplace:</strong> offers a wide range of pre-built actions and workflows contributed by the community.<br /><br />
                        <strong>Reusable Workflows:</strong> allow you to create and share workflows across multiple repositories for consistency and efficiency.<br /><br />
                        <strong>Self-hosted Runners:</strong> provide control over the execution environment, allowing custom configurations and specialized hardware.<br /><br />
                        <strong>Logs:</strong> offer detailed visibility into the execution of workflows and jobs, helping with debugging and monitoring.<br /><br />
                        <strong>Manual Triggers:</strong> let you start workflows manually from the GitHub UI or via API calls.<br /><br />
                        <strong>Concurrent Jobs:</strong> can be run in parallel to speed up build and test processes, depending on your configuration.<br /><br />
                        <strong>Deployment Strategies:</strong>support various methods such as blue-green deployments, rolling updates, and canary releases.<br /><br />
                        <strong>Approval Gates:</strong> allow for manual intervention and approval before certain jobs or deployments are executed.<br /><br />
                        <strong>Integration with GitHub:</strong> provides seamless access to repository data, including code, issues, and pull requests, directly within workflows.<br /><br />
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
                    <Box height={'50px'} width={'50px'}><img src={GithubActionsLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/></Box>
                    <Typography variant="h4" sx={{mt:1, ml:1, textTransform:'uppercase'}}>github actions</Typography>
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

export default GitHubActionsInfo;