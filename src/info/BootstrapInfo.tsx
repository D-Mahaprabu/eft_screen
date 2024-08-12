import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuickLinks from '../component/Quicklinks';
import Bootstraplogo from '../images/bootstrapLogo.svg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BootStrapInfo = () => {
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
                    <Typography>1. Introduction to Bootstrap</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview of Bootstrap:</strong><br />
                        What is Bootstrap?<br />
                        History and evolution of Bootstrap<br />
                        Benefits of using Bootstrap in web development<br /><br />

                        <strong>Getting Started with Bootstrap:</strong><br />
                        Including Bootstrap in a project (CDN, local installation)<br />
                        Overview of Bootstrap's file structure<br />
                        Understanding Bootstrap's grid system
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. Bootstrap Grid System</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Grid Basics:</strong><br />
                        Container classes (`.container`, `.container-fluid`)<br />
                        Rows and columns<br />
                        Responsive grid system<br />
                        Breakpoints and media queries<br /><br />

                        <strong>Advanced Grid Techniques:</strong><br />
                        Nesting columns<br />
                        Offsetting columns<br />
                        Reordering columns with flexbox utilities
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. Bootstrap Typography and Utilities</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Typography:</strong><br />
                        Headings, paragraphs, and other text elements<br />
                        Inline text elements (mark, small, strong, em)<br />
                        Blockquotes and lists<br /><br />

                        <strong>Utilities:</strong><br />
                        Spacing utilities (margin and padding)<br />
                        Display utilities<br />
                        Text alignment and text transformation<br />
                        Colors and background utilities
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Bootstrap Components</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Basic Components:</strong><br />
                        Buttons<br />
                        Button groups<br />
                        Badges<br />
                        Alerts<br /><br />

                        <strong>Navigation Components:</strong><br />
                        Navbar<br />
                        Navs and tabs<br />
                        Pagination<br />
                        Breadcrumbs<br /><br />

                        <strong>Form Components:</strong><br />
                        Form controls (input, textarea, select)<br />
                        Form layout (inline, horizontal, vertical)<br />
                        Input groups<br />
                        Validation states
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Bootstrap Layout Components</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Cards:</strong><br />
                        Card layout and content<br />
                        Card images and overlays<br />
                        Card groups and decks<br /><br />

                        <strong>Media Objects:</strong><br />
                        Creating media objects<br />
                        Aligning media objects<br /><br />

                        <strong>Jumbotron and Containers:</strong><br />
                        Creating and using jumbotrons<br />
                        Using containers for layout
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Bootstrap JavaScript Components</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>JavaScript Plugins:</strong><br />
                        Overview of Bootstrap's JavaScript components<br />
                        Including Bootstrap's JavaScript (CDN, local installation)<br /><br />

                        <strong>Interactive Components:</strong><br />
                        Modals<br />
                        Tooltips<br />
                        Popovers<br />
                        Dropdowns<br /><br />

                        <strong>Carousel:</strong><br />
                        Creating a carousel<br />
                        Configuring carousel options
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Customizing Bootstrap</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Using Sass for Customization:</strong><br />
                        Introduction to Sass<br />
                        Customizing Bootstrap's variables<br />
                        Compiling customized Bootstrap<br /><br />

                        <strong>Bootstrap Themes:</strong><br />
                        Using pre-built themes<br />
                        Creating custom themes
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. Responsive Design with Bootstrap</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Responsive Utilities:</strong><br />
                        Responsive visibility classes<br />
                        Responsive embed<br />
                        Responsive images<br /><br />

                        <strong>Building Responsive Layouts:</strong><br />
                        Using the grid system for responsive design<br />
                        Media queries for custom breakpoints
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9. Project Development and Best Practices</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Developing Bootstrap Projects:</strong><br />
                        Planning and wireframing Bootstrap projects<br />
                        Best practices for organizing Bootstrap code<br />
                        Collaborating on Bootstrap projects using version control (Git)<br /><br />

                        <strong>Capstone Project:</strong><br />
                        Defining project requirements and objectives<br />
                        Designing and developing a comprehensive Bootstrap-based website<br />
                        Implementing advanced Bootstrap techniques and best practices<br /><br />
                        This curriculum provides a structured and comprehensive introduction to Bootstrap, ensuring a
                        solid understanding of both basic and advanced techniques, and equipping learners with the
                        skills needed to create modern, responsive, and optimized web designs using Bootstrap.
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
                       Bootstrap is a popular front-end framework that simplifies web design by providing a responsive grid system, pre-designed components, and customizable utilities.<br /> 
                       It is designed to help developers create modern, visually appealing websites and applications quickly.<br /> 
                       Bootstrap streamlines the development process with its easy-to-use tools and mobile-first approach.
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
                        <Box height={'50px'} width={'50px'}>
                            <img src={Bootstraplogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Box>
                        <Typography variant="h4" sx={{ mt: 1, ml: 1, textTransform: 'uppercase' }}>BOOTSTRAP</Typography>
                    </Stack>
                    <Stack width={'auto'} direction={'row'}>
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
                        <QuickLinks />
                    </Box>
                </Box>
            </Stack>
        </Stack>
    );
};

export default BootStrapInfo;
