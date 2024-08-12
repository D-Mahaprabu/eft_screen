import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HtmlLogo from '../images/htmlLogo.svg';
import QuickLinks from '../component/Quicklinks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HtmlInfo = () => {
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
                    <Typography>1. Introduction to HTML</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview of HTML:</strong><br />
                        History and evolution of HTML<br />
                        Role of HTML in web development<br />
                        Basic HTML syntax and structure<br /><br />

                        <strong>Basic HTML Document Structure:</strong><br />
                        Doctype declaration<br />
                        HTML, head, and body tags<br />
                        Creating a simple HTML document
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. HTML Elements and Attributes</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Text Formatting and Structuring Content:</strong><br />
                        Headings (h1-h6)<br />
                        Paragraphs and line breaks<br />
                        Bold, italic, underline, and other text styles<br />
                        Lists (ordered, unordered, and description lists)<br /><br />

                        <strong>Links and Navigation:</strong><br />
                        Anchor tags and hyperlinks<br />
                        Absolute vs. relative URLs<br />
                        Creating email and telephone links<br />
                        Navigation bars and menus<br /><br />

                        <strong>Images and Multimedia:</strong><br />
                        Embedding images with the `&lt;img&gt;` tag<br />
                        Image attributes (alt, width, height)<br />
                        Adding audio and video using HTML5 tags<br />
                        Embedding external media (YouTube, Vimeo)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. HTML Document Structure and Semantics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>HTML5 Semantic Elements:</strong><br />
                        Understanding the importance of semantic HTML<br />
                        Semantic tags: `&lt;header&gt;`, `&lt;footer&gt;`, `&lt;article&gt;`, `&lt;section&gt;`, `&lt;nav&gt;`, `&lt;aside&gt;`, `&lt;main&gt;`<br />
                        Benefits of using semantic elements for SEO and accessibility<br /><br />

                        <strong>Tables:</strong><br />
                        Creating tables with `&lt;table&gt;`, `&lt;tr&gt;`, `&lt;td&gt;`, `&lt;th&gt;`<br />
                        Table attributes (border, colspan, rowspan)<br />
                        Adding captions and summaries to tables<br />
                        Advanced table techniques and best practices
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Forms and User Input</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>HTML Forms:</strong><br />
                        Creating forms using the `&lt;form&gt;` tag<br />
                        Form elements: `&lt;input&gt;`, `&lt;textarea&gt;`, `&lt;button&gt;`, `&lt;select&gt;`, `&lt;option&gt;`<br />
                        Form attributes: action, method (GET and POST)<br />
                        Creating accessible forms with proper labeling<br /><br />

                        <strong>Advanced Form Elements and Validation:</strong><br />
                        New HTML5 input types: email, url, number, range, date, etc.<br />
                        Form validation attributes: required, pattern, minlength, maxlength<br />
                        Custom form validation with JavaScript
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Advanced HTML Techniques</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Interactive HTML Elements:</strong><br />
                        Creating interactive elements with the `&lt;details&gt;` and `&lt;summary&gt;` tags<br />
                        Using the `&lt;dialog&gt;` element for modal dialogs<br />
                        Embedding interactive maps and other advanced media<br /><br />

                        <strong>HTML5 APIs:</strong><br />
                        Introduction to HTML5 APIs<br />
                        Geolocation API<br />
                        Web Storage API (localStorage and sessionStorage)<br />
                        Web Workers and Service Workers
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Accessibility and SEO</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Web Accessibility:</strong><br />
                        Understanding web accessibility principles<br />
                        Using ARIA roles and attributes<br />
                        Best practices for creating accessible HTML content<br /><br />

                        <strong>Search Engine Optimization (SEO):</strong><br />
                        Importance of SEO for web pages<br />
                        Using meta tags for SEO<br />
                        Creating SEO-friendly HTML structures
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Performance Optimization</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Optimizing HTML for Performance:</strong><br />
                        Minimizing and compressing HTML files<br />
                        Lazy loading images and other media<br />
                        Best practices for fast-loading HTML pages<br /><br />

                        <strong>HTML Best Practices:</strong><br />
                        Clean and maintainable HTML code<br />
                        Proper use of comments and whitespace<br />
                        Organizing HTML files and directories
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. Advanced HTML Document Features</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>HTML Templates and Imports:</strong><br />
                        Using the `&lt;template&gt;` tag for reusable HTML fragments<br />
                        HTML imports and modular HTML development<br /><br />

                        <strong>HTML Forms with Complex Input Types:</strong><br />
                        Date and time input types<br />
                        Color input type<br />
                        Range sliders and number inputs with validation
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9. Final Project and Assessment</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Capstone Project:</strong><br />
                        Defining project requirements and objectives<br />
                        Designing and developing a comprehensive HTML-based website<br />
                        Implementing advanced HTML techniques and best practices<br /><br />

                        <strong>Review and Presentation:</strong><br />
                        Peer review and feedback<br />
                        Final project presentation<br />
                        Course wrap-up and next steps<br /><br />
                        This curriculum provides a structured and in-depth approach to mastering HTML, ensuring a
                        thorough understanding of both basic and advanced techniques, and equipping learners with
                        the skills needed to create modern, accessible, and SEO-friendly web pages.
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
                        HTML stands for Hyper Text Markup Language<br />
                        HTML is the standard markup language for creating Web pages<br />
                        HTML describes the structure of a Web page<br />
                        HTML consists of a series of elements<br />
                        HTML elements tell the browser how to display the content<br />
                        HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.
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
                    <Box height={'50px'} width={'50px'}><img src={HtmlLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/></Box>
                    <Typography variant="h4" sx={{mt:1, ml:1, textTransform:'uppercase'}}>HTML</Typography>
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
                    <QuickLinks></QuickLinks>
                </Box>
            </Box>
            </Stack>
        </Stack>
    )
}

export default HtmlInfo;