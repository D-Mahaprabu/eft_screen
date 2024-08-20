import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuickLinks from '../component/Quicklinks';
import Jslogo from '../images/jsLogo.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const JsInfo = () => {
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
                    <Typography>1. Introduction to JavaScript</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview of JavaScript:</strong><br />
                        What is JavaScript?<br />
                        History and evolution of JavaScript<br />
                        JavaScript engines and runtime environments (e.g., V8, Node.js)<br /><br />

                        <strong>Setting Up the Environment:</strong><br />
                        Setting up a development environment (VS Code, browser DevTools)<br />
                        Writing and running JavaScript code
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. JavaScript Basics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Syntax and Fundamentals:</strong><br />
                        Variables (var, let, const)<br />
                        Data types (string, number, boolean, null, undefined, symbol, bigint)<br />
                        Operators (arithmetic, comparison, logical, assignment)<br /><br />

                        <strong>Control Structures:</strong><br />
                        Conditional statements (if, else, else if, switch)<br />
                        Loops (for, while, do-while, for...in, for...of)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. Functions and Scope</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Functions:</strong><br />
                        Declaring and invoking functions<br />
                        Function expressions and arrow functions<br />
                        Parameters, arguments, and default parameters<br />
                        Higher-order functions and callbacks<br /><br />

                        <strong>Scope and Closures:</strong><br />
                        Understanding scope (global, local, block)<br />
                        Closures and their applications
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Objects and Arrays</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Objects:</strong><br />
                        Creating and manipulating objects<br />
                        Object properties and methods<br />
                        The `this` keyword<br />
                        Object destructuring and spread/rest operators<br /><br />

                        <strong>Arrays:</strong><br />
                        Creating and manipulating arrays<br />
                        Array methods (push, pop, shift, unshift, map, filter, reduce, etc.)<br />
                        Array destructuring and spread/rest operators
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Advanced Data Types</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Strings:</strong><br />
                        String methods and properties<br />
                        Template literals<br /><br />

                        <strong>Numbers:</strong><br />
                        Number methods and properties<br />
                        Working with Math object<br /><br />

                        <strong>Dates:</strong><br />
                        Creating and manipulating dates<br />
                        Date methods
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Error Handling and Debugging</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Error Handling:</strong><br />
                        Understanding errors in JavaScript<br />
                        Using try, catch, finally<br />
                        Custom error handling<br /><br />

                        <strong>Debugging:</strong><br />
                        Using browser DevTools for debugging<br />
                        Setting breakpoints and stepping through code
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Asynchronous JavaScript</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Asynchronous Concepts:</strong><br />
                        Understanding asynchronous programming<br />
                        Callbacks<br /><br />

                        <strong>Promises:</strong><br />
                        Creating and using promises<br />
                        Promise chaining<br />
                        Handling errors in promises<br /><br />

                        <strong>Async/Await:</strong><br />
                        Understanding async/await syntax<br />
                        Error handling in async/await
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. The Document Object Model (DOM)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>DOM Manipulation:</strong><br />
                        Understanding the DOM<br />
                        Selecting elements (getElementById, querySelector, etc.)<br />
                        Manipulating element properties and attributes<br /><br />

                        <strong>Event Handling:</strong><br />
                        Understanding events and event listeners<br />
                        Handling events (click, submit, etc.)<br />
                        Event delegation
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9. JavaScript in the Browser</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Browser APIs:</strong><br />
                        Introduction to browser APIs<br />
                        Working with the Fetch API<br />
                        Using Web Storage API (localStorage and sessionStorage)<br /><br />

                        <strong>Working with Forms:</strong><br />
                        Form validation<br />
                        Handling form submissions
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel10'} onChange={handleAccordionChange('panel10')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>10. Object-Oriented JavaScript</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Prototypes and Inheritance:</strong><br />
                        Understanding prototypes<br />
                        Prototype chain and inheritance<br /><br />

                        <strong>ES6 Classes:</strong><br />
                        Creating and using classes<br />
                        Inheritance with classes<br />
                        Static methods and properties
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel11'} onChange={handleAccordionChange('panel11')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>11. Functional Programming in JavaScript</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Functional Programming Concepts:</strong><br />
                        Pure functions<br />
                        Immutability<br />
                        Function composition<br /><br />

                        <strong>Higher-Order Functions:</strong><br />
                        Using map, filter, and reduce<br />
                        Currying and partial application
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel12'} onChange={handleAccordionChange('panel12')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>12. Modules and Tooling</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Modules:</strong><br />
                        Understanding ES6 modules<br />
                        Importing and exporting modules<br /><br />

                        <strong>Build Tools and Package Managers:</strong><br />
                        Using npm and yarn<br />
                        Introduction to build tools (Webpack, Babel)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel13'} onChange={handleAccordionChange('panel13')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>13. Testing in JavaScript</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Testing Overview:</strong><br />
                        Importance of testing<br />
                        Types of testing (unit, integration, end-to-end)<br /><br />

                        <strong>Testing Tools and Frameworks:</strong><br />
                        Using Jest for unit testing<br />
                        Writing and running tests<br />
                        Mocking and code coverage
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel14'} onChange={handleAccordionChange('panel14')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>14. Performance Optimization</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Optimizing JavaScript Performance:</strong><br />
                        Understanding the event loop and asynchronous patterns<br />
                        Memory management and garbage collection<br />
                        Profiling and performance analysis<br /><br />

                        <strong>Best Practices:</strong><br />
                        Writing efficient and maintainable code<br />
                        Avoiding common performance pitfalls
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel15'} onChange={handleAccordionChange('panel15')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>15. Advanced JavaScript Concepts</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Generators and Iterators:</strong><br />
                        Understanding and using generators<br />
                        Implementing custom iterators<br /><br />

                        <strong>Meta-programming:</strong><br />
                        Understanding proxies and Reflect API<br />
                        Using Symbols
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel16'} onChange={handleAccordionChange('panel16')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>16. Capstone Project</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Project Planning:</strong><br />
                        Defining project requirements and objectives<br />
                        Designing the application architecture<br /><br />

                        <strong>Development:</strong><br />
                        Implementing features using advanced JavaScript techniques<br />
                        Integrating with APIs and external libraries<br /><br />

                        <strong>Review and Presentation:</strong><br />
                        Peer review and feedback<br />
                        Final project presentation<br />
                        Course wrap-up and next steps<br /><br />
                        This curriculum provides a comprehensive and structured approach to mastering JavaScript,
                        covering both foundational and advanced topics, and equipping learners with the skills needed
                        to build modern, efficient, and maintainable JavaScript applications.
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
                         JavaScript expertise is highly sought after in the tech industry, leading to better job prospects, higher salaries, and opportunities in a wide range of development roles.
                         Mastering JavaScript allows you to develop dynamic and interactive web applications, both on the client-side and server-side (with Node.js), making you a full-stack developer.
                    </Typography>
                );
            case 1:
                return (
                    renderCurriculum()
                );
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
                <img src={laptopimg} alt="Laptop" height={'450px'} />
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Box height={'auto'} width={'60%'} sx={{ ml: 2 }}>
                    <Stack direction={'row'} sx={{ mt: 3 }}>
                        <Box height={'50px'} width={'50px'}>
                            <img src={Jslogo} alt="JavaScript Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Box>
                        <Typography variant="h4" sx={{ mt: 1, ml: 1, textTransform: 'uppercase' }}>JavaScript</Typography>
                    </Stack>
                    <Stack width={'auto'} direction={'row'}>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, position: 'relative', overflow: 'hidden' }}>
                            <MenuBookIcon />
                        </Box>
                        <Typography sx={{ mt: 2.5, ml: 1 }}>16 Modules</Typography>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, ml: 3, position: 'relative', overflow: 'hidden' }}>
                            <MenuBookIcon />
                        </Box>
                        <Typography sx={{ mt: 2.5, ml: 1 }}>60 Hours</Typography>
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

export default JsInfo;
