import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EnterpriseArchitectureLogo from '../images/enterpriseArchitectureLogo.png';
import ArchitectEssentialsQuickLinks from '../component/ArchitectEssentialsQuickLinks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const EnterpriseArchitectureInfo = () => {
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
                    <Typography>1: Introduction to Enterprise Architecture (EA)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Definition and Purpose:</strong><br/>
                        What is Enterprise Architecture?<br/>
                        Importance of EA in aligning IT and business goals.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2: Key Concepts in Enterprise Architecture</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Business Architecture:</strong><br/>
                        Business strategy and goals<br/>
                        Business processes and capabilities<br/><br/>

                        <strong>Data Architecture:</strong><br/>
                        Data models and structures<br/>
                        Data governance and management<br/><br/>

                        <strong>Application Architecture:</strong><br/>
                        Software applications and services<br/>
                        Application integration and interfaces<br/><br/>

                        <strong>Technology Architecture:</strong><br/>
                        IT infrastructure and platforms<br/>
                        Network, hardware, and software
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3: EA Frameworks and Methodologies</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>TOGAF (The Open Group Architecture Framework):</strong><br/>
                        Architecture Development Method (ADM)<br/>
                        TOGAF content framework and deliverables<br/><br/>

                        <strong>Zachman Framework:</strong><br/>
                        A matrix for organizing architectural artifacts<br/>
                        Different perspectives: Planner, Owner, Designer, Builder, Subcontractor, User<br/><br/>

                        <strong>FEAF (Federal Enterprise Architecture Framework):</strong><br/>
                        Reference models: Performance, Business, Service, Data, and Technical
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4: EA Implementation Process</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Initiation and Planning:</strong><br/>
                        Establishing an EA team and governance structure<br/>
                        Defining EA vision, goals, and scope<br/><br/>

                        <strong>Current State Analysis:</strong><br/>
                        Assessing existing architecture<br/>
                        Identifying pain points and areas for improvement<br/><br/>

                        <strong>Future State Design:</strong><br/>
                        Defining target architecture<br/>
                        Developing roadmaps for transition<br/><br/>

                        <strong>Implementation and Governance:</strong><br/>
                        Executing the transition plan<br/>
                        Continuous monitoring and governance
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5: EA Tools and Technologies</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>EA Modeling Tools:</strong><br/>
                        Examples: ArchiMate, Sparx Systems Enterprise Architect, IBM Rational System Architect<br/><br/>

                        <strong>Data Management Tools:</strong><br/>
                        Examples: ERwin Data Modeler, Microsoft Power BI, Informatica<br/><br/>

                        <strong>Application Integration Platforms:</strong><br/>
                        Examples: MuleSoft, Dell Boomi, Microsoft Azure Logic Apps
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
                       EA (Enterprise Architecture) is a framework that facilitates an organization’s integration of IT architecture into its business strategy, allowing for streamlined and efficient integration of all business components.
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
                            <img src={EnterpriseArchitectureLogo} alt="Enterprise Architecture Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Box>
                        <Typography variant="h4" sx={{ mt: 1, ml: 1, textTransform: 'uppercase' }}>Enterprise Architecture</Typography>
                    </Stack>
                    <Stack width="auto" direction="row">
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: 'red', color: 'white', mt: 2, position: 'relative', overflow: 'hidden' }}>
                            <MenuBookIcon />
                        </Box>
                        <Typography sx={{ mt: 2.5, ml: 1 }}>15 Modules</Typography>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: 'red', color: 'white', mt: 2, ml: 3, position: 'relative', overflow: 'hidden' }}>
                            <MenuBookIcon />
                        </Box>
                        <Typography sx={{ mt: 2.5, ml: 1 }}>72 Hours</Typography>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: 'red', color: 'white', mt: 2, ml: 3, position: 'relative', overflow: 'hidden' }}>
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

export default EnterpriseArchitectureInfo;
