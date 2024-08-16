import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EnterpriseArchitectureLogo from '../images/enterpriceArchitectureLogo.png';
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
                        <strong>Enterprise Architecture</strong> is a strategic framework for aligning an organization's IT infrastructure with its business goals and processes.<br /><br />
                        <strong>Holistic View</strong>: Provides a comprehensive view of the organization’s structure, including business processes, information systems, and technology.<br /><br />
                        <strong>Frameworks</strong>: Utilizes frameworks like TOGAF, Zachman, and FEAF to standardize and guide the development of the enterprise architecture.<br /><br />
                        <strong>Business Alignment</strong>: Ensures that IT investments and strategies are closely aligned with business objectives and requirements.<br /><br />
                        <strong>Architecture Layers</strong>: Consists of multiple layers, including business, information, application, and technology, each addressing different aspects of the enterprise.<br /><br />
                        <strong>Documentation</strong>: Involves creating detailed documentation of the architecture, including diagrams, models, and descriptions of processes and systems.<br /><br />
                        <strong>Governance</strong>: Establishes governance structures to oversee the development, implementation, and maintenance of the architecture.<br /><br />
                        <strong>Standards and Policies</strong>: Defines standards and policies for technology, processes, and data management to ensure consistency and quality across the organization.<br /><br />
                        <strong>Change Management</strong>: Facilitates effective change management by providing a structured approach to integrating new technologies and processes.<br /><br />
                        <strong>Integration</strong>: Focuses on integrating various systems and applications to improve interoperability and streamline operations.<br /><br />
                        <strong>Risk Management</strong>: Identifies and mitigates risks associated with IT and business processes, ensuring resilience and security.<br /><br />
                        <strong>Performance Measurement</strong>: Includes mechanisms for measuring and evaluating the performance of IT systems and their alignment with business goals.<br /><br />
                        <strong>Technology Roadmap</strong>: Develops a technology roadmap to guide future technology investments and upgrades in alignment with business strategies.<br /><br />
                        <strong>Data Management</strong>: Establishes practices for managing data, including data governance, quality, and integration, to support business decisions.<br /><br />
                        <strong>Stakeholder Engagement</strong>: Engages stakeholders from various departments to gather requirements, address concerns, and ensure alignment with business needs.<br /><br />
                        <strong>Optimization</strong>: Focuses on optimizing IT resources, processes, and systems to enhance efficiency and reduce costs.<br /><br />
                        <strong>Agility</strong>: Promotes agility by enabling organizations to adapt to changing business environments and technological advancements.<br /><br />
                        <strong>Compliance</strong>: Ensures compliance with industry regulations and standards, mitigating legal and operational risks.<br /><br />
                        <strong>Best Practices</strong>: Incorporates best practices and lessons learned to continuously improve the architecture and its implementation.<br /><br />
                        <strong>Continuous Improvement</strong>: Emphasizes continuous improvement by regularly reviewing and updating the architecture to meet evolving business and technology needs.
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

export default EnterpriseArchitectureInfo;
