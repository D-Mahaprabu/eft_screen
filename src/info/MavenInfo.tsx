import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MavenLogo from '../images/mavenLogo.png';
import BackendQuickLinks from '../component/BackendQuickLinks';

const MavenInfo = () => {
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
                    <Typography>1: Introduction to Maven</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        What is Maven and why use it?<br />
                        Installing Maven<br />
                        Basic Maven directory structure
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2: Project Object Model (POM)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        Structure of `pom.xml`<br />
                        Key elements: `&lt;groupId&gt;`, `&lt;artifactId&gt;`, `&lt;version&gt;`
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3: Basic Maven Commands</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        Common lifecycle phases: `validate`, `compile`, `test`, `package`, `install`, `deploy`<br />
                        Commands: `mvn clean`, `mvn compile`, `mvn package`, `mvn install`
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4: Dependency Management</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        Declaring dependencies in `pom.xml`<br />
                        Dependency scopes: `compile`, `provided`, `runtime`, `test`, `system`<br />
                        Managing transitive dependencies and conflicts
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5: Repositories</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        Local repository<br />
                        Configuring remote repositories in `pom.xml`
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6: Plugins</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        Core plugins: Compiler (`maven-compiler-plugin`), Surefire (`maven-surefire-plugin`), Assembly (`maven-assembly-plugin`)<br />
                        Configuring and executing plugins
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7: Build Profiles</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        Creating and using build profiles<br />
                        Activating profiles based on environment variables, OS, etc.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8: Multi-Module Projects</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        Structure and setup of multi-module projects<br />
                        Parent POM and module POMs
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9: IDE Integration</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        Importing Maven projects into IntelliJ IDEA, Eclipse, NetBeans<br />
                        Using IDE features to manage Maven projects
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel10'} onChange={handleAccordionChange('panel10')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>10: CI/CD Integration</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        Setting up Maven builds in CI/CD tools (Jenkins, GitLab CI, GitHub Actions)<br />
                        Automating tests and deployments<br /><br />
                        These topics cover the essential aspects of Maven that every backend developer should be
                        familiar with for effective project management and build automation.
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
                        <strong>Maven</strong> is a build automation tool used primarily for Java projects, managing project builds, dependencies, and documentation.<br /><br />
                        <strong>Project Object Model (POM)</strong>: The central configuration file, pom.xml, defines project structure, dependencies, plugins, and other settings.<br /><br />
                        <strong>Dependency Management</strong>: Maven automatically handles downloading, updating, and managing project dependencies from a central repository.<br /><br />
                        <strong>Repositories</strong>: Maven uses repositories to store and retrieve project dependencies, with a central repository and support for local and remote repositories.<br /><br />
                        <strong>Build Lifecycle</strong>: Maven follows a build lifecycle consisting of phases such as compile, test, package, and install, which are executed in order.<br /><br />
                        <strong>Plugins</strong>: Maven uses plugins to perform various tasks during the build process, such as compiling code, running tests, and packaging artifacts.<br /><br />
                        <strong>Archetypes</strong>: Maven archetypes are templates for generating new projects, providing a standardized project structure and configuration.<br /><br />
                        <strong>Multi-Module Projects</strong>: Maven supports multi-module projects, allowing you to manage multiple sub-projects with a single parent POM.<br /><br />
                        <strong>Site Generation</strong>: Maven can generate project documentation and reports using the mvn site command, providing insights into project quality and status.<br /><br />
                        <strong>Build Profiles</strong>: Profiles allow you to customize build configurations for different environments, such as development, testing, and production.<br /><br />
                        <strong>Dependency Scope</strong>: Maven defines different dependency scopes, such as compile, test, and runtime, to control when dependencies are included.<br /><br />
                        <strong>Effective POM</strong>: Maven can generate the "effective POM," a combination of the project's POM and all inherited settings from parent POMs and profiles.<br /><br />
                        <strong>Plugins Repository</strong>: Maven Central provides a repository for plugins and extensions, allowing easy access to additional build functionalities.<br /><br />
                        <strong>Dependency Management Section</strong>: The Dependency Management section in the POM allows you to define dependency versions centrally for all modules.<br /><br />
                        <strong>Build Profiles</strong>: Profiles enable you to customize the build process for different environments or configurations, like development or production.<br /><br />
                        <strong>Plugins Configuration</strong>: Plugins can be configured in the POM file to customize their behavior and integrate with different parts of the build process.<br /><br />
                        <strong>Continuous Integration</strong>: Maven integrates with CI tools like Jenkins, Bamboo, and GitLab CI to automate builds and deployments.<br /><br />
                        <strong>Community Support</strong>: Maven has a large and active community, offering extensive documentation, forums, and support for users.<br /><br />
                        <strong>Profiles</strong>: Maven profiles allow for customized build configurations, making it easier to manage builds for different environments or use cases.<br /><br />
                        <strong>Command Line Interface</strong>: Maven provides a command-line interface for executing build tasks, such as mvn clean install, to manage and build projects.
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
                    <Box height={'50px'} width={'50px'}><img src={MavenLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/></Box>
                    <Typography variant="h4" sx={{mt:1, ml:1, textTransform:'uppercase'}}>Maven</Typography>
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

export default MavenInfo;
