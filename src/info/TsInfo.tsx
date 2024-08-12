import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuickLinks from '../component/Quicklinks';
import Tslogo from '../images/typescriptLogo.svg';

const TsInfo = () => {
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
                    <Typography>1. Introduction to TypeScript</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>What is TypeScript?</strong><br />
                        Overview of TypeScript<br />
                        Benefits of using TypeScript<br />
                        TypeScript vs. JavaScript<br /><br />

                        <strong>Setting Up the Environment:</strong><br />
                        Installing TypeScript<br />
                        Setting up a TypeScript project<br />
                        Compiling TypeScript to JavaScript
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. TypeScript Basics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Basic Types:</strong><br />
                        Primitive types (string, number, boolean, null, undefined, void)<br />
                        Arrays and tuples<br />
                        Enums<br /><br />

                        <strong>Type Annotations:</strong><br />
                        Adding type annotations<br />
                        Type inference
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. Functions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Function Types:</strong><br />
                        Function type annotations<br />
                        Optional and default parameters<br />
                        Rest parameters<br /><br />

                        <strong>Arrow Functions:</strong><br />
                        Arrow function syntax<br />
                        Differences between arrow functions and regular functions
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Object Types</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Interfaces:</strong><br />
                        Defining and implementing interfaces<br />
                        Optional properties and readonly properties<br />
                        Extending interfaces<br /><br />

                        <strong>Type Aliases:</strong><br />
                        Creating and using type aliases<br />
                        Differences between type aliases and interfaces
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Classes and Inheritance</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Classes:</strong><br />
                        Defining classes and constructors<br />
                        Public, private, and protected modifiers<br />
                        Readonly properties<br /><br />

                        <strong>Inheritance:</strong><br />
                        Extending classes<br />
                        Method overriding<br />
                        Using super keyword
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Advanced Types</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Union and Intersection Types:</strong><br />
                        Creating and using union types<br />
                        Creating and using intersection types<br /><br />

                        <strong>Type Guards and Type Assertions:</strong><br />
                        Using type guards (typeof, instanceof)<br />
                        Type assertions (as and angle-bracket syntax)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Generics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Generic Types:</strong><br />
                        Creating generic functions and classes<br />
                        Using generic constraints<br /><br />

                        <strong>Built-in Generics:</strong><br />
                        Understanding and using built-in generic types (Array, Promise)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. Modules and Namespaces</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Modules:</strong><br />
                        Exporting and importing modules<br />
                        Understanding module resolution<br /><br />

                        <strong>Namespaces:</strong><br />
                        Defining and using namespaces<br />
                        Differences between modules and namespaces
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9. TypeScript Tooling</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>TypeScript Compiler:</strong><br />
                        Configuring the TypeScript compiler (tsconfig.json)<br />
                        Compiler options<br /><br />

                        <strong>TypeScript in Modern Workflows:</strong><br />
                        Integrating TypeScript with build tools (Webpack, Babel)<br />
                        Using TypeScript with modern frameworks (React, Angular, Vue)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel10'} onChange={handleAccordionChange('panel10')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>10. Advanced Topics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Decorators:</strong><br />
                        Understanding and using decorators<br />
                        Creating custom decorators<br /><br />

                        <strong>Mixins:</strong><br />
                        Creating and using mixins<br /><br />

                        <strong>Type Compatibility:</strong><br />
                        Understanding structural typing<br />
                        Type compatibility rules
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel11'} onChange={handleAccordionChange('panel11')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>11. Testing and Debugging</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Testing TypeScript:</strong><br />
                        Setting up a testing environment<br />
                        Writing and running tests with popular testing frameworks (Jest, Mocha)<br /><br />

                        <strong>Debugging TypeScript:</strong><br />
                        Debugging TypeScript code in modern editors (VS Code)<br />
                        Source maps
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel12'} onChange={handleAccordionChange('panel12')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>12. Project Development and Best Practices</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Developing TypeScript Projects:</strong><br />
                        Planning and structuring TypeScript projects<br />
                        Best practices for writing clean and maintainable TypeScript code<br /><br />

                        <strong>Capstone Project:</strong><br />
                        Defining project requirements and objectives<br />
                        Designing and developing a comprehensive TypeScript-based application<br />
                        Implementing advanced TypeScript techniques and best practices<br /><br />
                        This curriculum provides a structured and comprehensive introduction to TypeScript, ensuring a
                        solid understanding of both basic and advanced concepts, and equipping learners with the skills
                        needed to effectively use TypeScript in modern web development.
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
                        TypeScript is a powerful, open-source programming language developed and maintained by Microsoft.<br />
                        It builds on JavaScript by adding static type definitions, making it a superset of JavaScript. <br />
                        TypeScript enhances the development experience by enabling developers to catch errors early through type checking, and it facilitates the development of large-scale applications with improved code quality and maintainability.
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
                            <img src={Tslogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Box>
                        <Typography variant="h4" sx={{ mt: 1, ml: 1, textTransform: 'uppercase' }}>TypeScript</Typography>
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
}

export default TsInfo;
