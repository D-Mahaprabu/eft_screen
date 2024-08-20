import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CssLogo from '../images/css.png';
import QuickLinks from '../component/Quicklinks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CssInfo = () => {
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
                    <Typography>1. Introduction to CSS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview of CSS:</strong><br />
                        What is CSS?<br />
                        History and evolution of CSS<br />
                        How CSS works with HTML<br /><br />

                        <strong>CSS Syntax and Selectors:</strong><br />
                        Basic CSS syntax<br />
                        Types of selectors: element, class, ID, attribute, pseudo-class, pseudo-element<br />
                        Specificity and inheritance
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. CSS Box Model and Layout</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Understanding the CSS Box Model:</strong><br />
                        Content, padding, border, margin<br />
                        Box-sizing property<br /><br />

                        <strong>Layout Techniques:</strong><br />
                        Display property: block, inline, inline-block, none<br />
                        Position property: static, relative, absolute, fixed, sticky<br />
                        Float and clear<br />
                        Flexbox<br />
                        CSS Grid
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. Styling Text and Fonts</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Text Properties:</strong><br />
                        Font family, size, weight, style<br />
                        Text alignment, decoration, transform, indent<br />
                        Line height, letter spacing, word spacing<br /><br />

                        <strong>Web Fonts:</strong><br />
                        Using web fonts: Google Fonts, @font-face<br />
                        Font loading strategies
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Colors and Backgrounds</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Color:</strong><br />
                        Color values: named colors, HEX, RGB, RGBA, HSL, HSLA<br />
                        Color gradients: linear and radial<br /><br />

                        <strong>Backgrounds:</strong><br />
                        Background color, image, repeat, position, size, attachment, and clip
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Advanced Selectors and Combinators</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Attribute Selectors:</strong><br />
                        Selecting elements based on attributes and values<br /><br />

                        <strong>Pseudo-Classes and Pseudo-Elements:</strong><br />
                        Hover, focus, active, nth-child, first-child, last-child<br />
                        Before, after, first-letter, first-line<br /><br />

                        <strong>Combinators:</strong><br />
                        Descendant, child, adjacent sibling, general sibling
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Responsive Design and Media Queries</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Responsive Design Principles:</strong><br />
                        Fluid layouts, flexible images, media queries<br /><br />

                        <strong>Media Queries:</strong><br />
                        Syntax and usage<br />
                        Breakpoints and responsive design patterns
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. CSS Animations and Transitions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Transitions:</strong><br />
                        Transition properties: property, duration, timing function, delay<br />
                        Applying transitions to elements<br /><br />

                        <strong>Animations:</strong><br />
                        Keyframes and animation properties<br />
                        Creating complex animations
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. CSS Preprocessors</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Introduction to Preprocessors:</strong><br />
                        Benefits of using preprocessors<br />
                        Overview of popular preprocessors: Sass, Less<br /><br />

                        <strong>Using Sass:</strong><br />
                        Variables, nesting, partials, imports<br />
                        Mixins, extends, and functions
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9. CSS Frameworks and Methodologies</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>CSS Frameworks:</strong><br />
                        Overview of popular CSS frameworks: Bootstrap, Foundation<br />
                        Using and customizing frameworks<br /><br />

                        <strong>CSS Methodologies:</strong><br />
                        BEM (Block, Element, Modifier)<br />
                        OOCSS (Object-Oriented CSS)<br />
                        SMACSS (Scalable and Modular Architecture for CSS)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel10'} onChange={handleAccordionChange('panel10')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>10. Performance Optimization and Best Practices</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Performance Optimization:</strong><br />
                        Minification and concatenation<br />
                        Critical CSS<br />
                        Lazy loading and defer loading<br /><br />

                        <strong>Best Practices:</strong><br />
                        Writing maintainable and scalable CSS<br />
                        Organizing CSS files<br />
                        Using comments and documentation
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel11'} onChange={handleAccordionChange('panel11')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>11. Advanced CSS Techniques</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>CSS Variables (Custom Properties):</strong><br />
                        Defining and using CSS variables<br />
                        Advantages of CSS variables<br /><br />

                        <strong>CSS Shapes and Clipping:</strong><br />
                        Creating shapes with CSS<br />
                        Clipping paths and masking<br /><br />

                        <strong>CSS Grid and Flexbox Advanced Techniques:</strong><br />
                        Creating complex layouts<br />
                        Advanced use cases and patterns
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel12'} onChange={handleAccordionChange('panel12')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>12. Project Development and Best Practices</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Developing CSS Projects:</strong><br />
                        Planning and wireframing CSS projects<br />
                        Best practices for organizing CSS code<br />
                        Collaborating on CSS projects using version control (Git)<br /><br />

                        <strong>Testing and Debugging CSS:</strong><br />
                        Cross-browser testing<br />
                        Debugging common issues<br />
                        Tools and resources for testing and debugging CSS<br /><br />
                        This curriculum provides a structured and in-depth approach to mastering CSS, ensuring a
                        thorough understanding of both foundational and advanced techniques, and equipping learners
                        with the skills needed to create modern, responsive, and optimized web designs.
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
                        Expertise in CSS is essential for front-end development roles, making you more competitive in the job market and potentially leading to higher salaries.
                        With advanced CSS skills, you can streamline the styling process, improve site performance, and create maintainable, scalable designs for complex projects.
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
                    <Box height={'50px'} width={'50px'}><img src={CssLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/></Box>
                    <Typography variant="h4" sx={{mt:1, ml:1, textTransform:'uppercase'}}>CSS</Typography>
                </Stack>
                <Stack width={'auto'} direction={'row'}>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, position: 'relative', overflow: 'hidden' }}>
                        <MenuBookIcon />
                    </Box>
                    <Typography sx={{ mt: 2.5, ml:1 }}>12 Modules</Typography>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, ml: 3, position: 'relative', overflow: 'hidden' }}>
                        <MenuBookIcon />
                    </Box>
                    <Typography sx={{ mt: 2.5, ml:1 }}>30 Hours</Typography>
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
                    <QuickLinks></QuickLinks>
                </Box>
            </Box>
            </Stack>
        </Stack>
    )
}

export default CssInfo;