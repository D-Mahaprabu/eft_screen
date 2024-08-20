import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DebuggingSkillsLogo from '../images/debuggingSkillsLogo.png';
import ArchitectEssentialsQuickLinks from '../component/ArchitectEssentialsQuickLinks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DebuggingSkillsInfo = () => {
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
                    <Typography>1: Introduction to Debugging</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Definition and Importance:</strong><br/>
                        What is debugging?<br/>
                        The importance of debugging in software development.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2: Key Concepts in Debugging</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Types of Errors:</strong><br/>
                        Syntax errors<br/>
                        Runtime errors<br/>
                        Logical errors<br/><br/>

                        <strong>Debugging Process:</strong><br/>
                        Identifying the problem<br/>
                        Isolating the source<br/>
                        Fixing the bug<br/>
                        Testing the solution
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3: Debugging Techniques</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Manual Debugging:</strong><br/>
                        Code review and walkthroughs<br/>
                        Using print statements and logging<br/><br/>

                        <strong>Automated Debugging:</strong><br/>
                        Using debuggers (breakpoints, step-through execution)<br/>
                        Static code analysis tools<br/><br/>

                        <strong>Advanced Techniques:</strong><br/>
                        Binary search for locating errors<br/>
                        Rubber duck debugging<br/>
                        Pair programming
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4: Tools for Debugging</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>IDEs and Editors:</strong><br/>
                        Built-in debugging tools in IDEs (e.g., Visual Studio, IntelliJ IDEA, Eclipse)<br/><br/>

                        <strong>Standalone Debuggers:</strong><br/>
                        Examples: GDB, LLDB<br/><br/>

                        <strong>Log Management Tools:</strong><br/>
                        Examples: Loggly, Splunk, ELK Stack
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5: Ways of Checking Debugging Skills</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Practical Assessments:</strong><br/>
                        Debugging exercises and coding challenges<br/>
                        Fixing bugs in existing codebases<br/><br/>

                        <strong>Code Reviews:</strong><br/>
                        Participating in and conducting code reviews<br/>
                        Analyzing and improving peers' code<br/><br/>

                        <strong>Certifications and Courses:</strong><br/>
                        Completing relevant courses (e.g., Pluralsight, Coursera)<br/>
                        Obtaining certifications in specific tools or languages<br/><br/>

                        <strong>Learning from Others:</strong><br/>
                        Collaborating with peers and mentors<br/>
                        Participating in coding communities and forums<br/><br/>
                        By understanding these key aspects and implementing effective debugging strategies,
                        developers can enhance their problem-solving abilities and improve the overall quality of their software.
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
                        Debugging skills module enhances your ability to quickly identify and resolve complex issues, improve code quality, reduce development time, and increase overall system reliability by mastering advanced debugging techniques and problem-solving strategies.
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
                <img src={laptopimg} alt="Laptop" height="450px" />
            </Stack>
            <Stack direction="row" justifyContent="space-between">
                <Box height="auto" width="60%" sx={{ ml: 2 }}>
                    <Stack direction="row" sx={{ mt: 3 }}>
                        <Box height="50px" width="50px">
                            <img src={DebuggingSkillsLogo} alt="Debugging Skills Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Box>
                        <Typography variant="h4" sx={{ mt: 1, ml: 1, textTransform: 'uppercase' }}>Debugging Skills</Typography>
                    </Stack>
                    <Stack width="auto" direction="row">
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, position: 'relative', overflow: 'hidden' }}>
                            <MenuBookIcon />
                        </Box>
                        <Typography sx={{ mt: 2.5, ml: 1 }}>5 Modules</Typography>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, ml: 3, position: 'relative', overflow: 'hidden' }}>
                            <MenuBookIcon />
                        </Box>
                        <Typography sx={{ mt: 2.5, ml: 1 }}>12 Hours</Typography>
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

export default DebuggingSkillsInfo;
