import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuickLinks from '../component/Quicklinks';
import ReactLogo from '../images/reactLogo.svg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ReactInfo = () => {
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
                    <Typography>1. Introduction to React</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview of React:</strong><br />
                        What is React?<br />
                        History and evolution of React<br />
                        React ecosystem and core concepts<br /><br />

                        <strong>Getting Started with React:</strong><br />
                        Setting up a React development environment<br />
                        Creating a new React project with Create React App<br />
                        Understanding the project structure
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. JSX and Rendering</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>JSX Syntax:</strong><br />
                        Introduction to JSX<br />
                        Embedding expressions in JSX<br />
                        JSX vs. HTML<br /><br />

                        <strong>Rendering Elements:</strong><br />
                        Rendering elements to the DOM<br />
                        Updating rendered elements
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. Components and Props</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Components:</strong><br />
                        Function components<br />
                        Class components<br />
                        Component lifecycle methods<br /><br />

                        <strong>Props:</strong><br />
                        Understanding props<br />
                        Passing props to components<br />
                        Default props and prop types
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. State and Lifecycle</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>State:</strong><br />
                        Managing state in class components<br />
                        The `useState` hook for functional components<br /><br />

                        <strong>Lifecycle Methods:</strong><br />
                        Mounting, updating, and unmounting phases<br />
                        Using `useEffect` for side effects in functional components
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Event Handling and Forms</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Event Handling:</strong><br />
                        Handling events in React<br />
                        Synthetic events<br />
                        Event handlers in functional and class components<br /><br />

                        <strong>Forms:</strong><br />
                        Controlled vs. uncontrolled components<br />
                        Handling form submissions<br />
                        Form validation
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Conditional Rendering and Lists</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Conditional Rendering:</strong><br />
                        Using if/else statements<br />
                        Conditional rendering with ternary operators<br />
                        Short-circuit evaluation<br /><br />

                        <strong>Lists and Keys:</strong><br />
                        Rendering lists of data<br />
                        The importance of keys<br />
                        Best practices for keys
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Advanced Hooks</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Built-in Hooks:</strong><br />
                        `useState`, `useEffect`, `useContext`<br />
                        `useReducer`, `useCallback`, `useMemo`<br />
                        `useRef`, `useLayoutEffect`, `useDebugValue`<br /><br />

                        <strong>Custom Hooks:</strong><br />
                        Creating custom hooks<br />
                        Reusing logic with custom hooks
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. Context API and State Management</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Context API:</strong><br />
                        Introduction to the Context API<br />
                        Creating and using context<br />
                        Context vs. props drilling<br /><br />

                        <strong>State Management:</strong><br />
                        Lifting state up<br />
                        Using Context API for global state<br />
                        Introduction to Redux and other state management libraries
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9. Routing in React</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>React Router:</strong><br />
                        Setting up React Router<br />
                        Creating routes and links<br />
                        Nested routes and route parameters<br />
                        Programmatic navigation
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel10'} onChange={handleAccordionChange('panel10')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>10. Performance Optimization</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Performance Optimization Techniques:</strong><br />
                        Using React.memo<br />
                        Using `useMemo` and `useCallback`<br />
                        Code splitting and lazy loading<br /><br />

                        <strong>React Profiler:</strong><br />
                        Analyzing performance with the React Profiler<br />
                        Identifying and fixing performance bottlenecks
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel11'} onChange={handleAccordionChange('panel11')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>11. Testing in React</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Testing Overview:</strong><br />
                        Importance of testing in React<br />
                        Setting up a testing environment<br /><br />

                        <strong>Testing Tools and Libraries:</strong><br />
                        Jest<br />
                        React Testing Library<br />
                        End-to-end testing with Cypress
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel12'} onChange={handleAccordionChange('panel12')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>12. Building and Deploying React Applications</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Building for Production:</strong><br />
                        Optimizing builds<br />
                        Environment variables<br /><br />

                        <strong>Deployment:</strong><br />
                        Deploying to various platforms (Netlify, Vercel, Heroku, GitHub Pages)<br />
                        Continuous Integration/Continuous Deployment (CI/CD)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel13'} onChange={handleAccordionChange('panel13')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>13. Advanced React Patterns</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Higher-Order Components (HOCs):</strong><br />
                        Creating and using HOCs<br />
                        Common use cases for HOCs<br /><br />

                        <strong>Render Props:</strong><br />
                        Understanding render props pattern<br />
                        Using render props to share logic<br /><br />

                        <strong>Portals:</strong><br />
                        Creating and using React portals
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel14'} onChange={handleAccordionChange('panel14')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>14. Capstone Project</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Project Planning:</strong><br />
                        Defining project requirements and objectives<br />
                        Designing the application architecture<br /><br />

                        <strong>Development:</strong><br />
                        Implementing features using React<br />
                        Using advanced React patterns and techniques<br /><br />

                        <strong>Review and Presentation:</strong><br />
                        Peer review and feedback<br />
                        Final project presentation<br />
                        Course wrap-up and next steps<br /><br />
                        This curriculum provides a comprehensive and structured approach to mastering React,
                        covering both foundational and advanced topics, and equipping learners with the skills needed
                        to build modern, efficient, and maintainable React applications.
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
                        <strong>React</strong> is a popular JavaScript library for building user interfaces, particularly single-page applications.<br />
                        It focuses on creating components, which are reusable pieces of UI that manage their own state and logic.<br /><br />
                        <strong>JSX:</strong> is a syntax extension that allows writing HTML-like code directly within JavaScript, making the code more readable.<br /><br />
                        <strong>Components:</strong> can be functional or class-based, with functional components being more common in modern React.<br /><br />
                        <strong>Props:</strong> are used to pass data from one component to another, enabling reusability and modularity.<br /><br />
                        <strong>State:</strong> is used to manage dynamic data within a component, allowing it to react to user interactions and other changes.<br /><br />
                        <strong>Hooks:</strong> like useState, useEffect, and useContext enable functional components to use state and other React features.<br /><br />
                        <strong>useEffect:</strong> is a hook that handles side effects, such as fetching data, directly within functional components.<br /><br />
                        <strong>React:</strong> Router is a popular library for managing navigation and routing in React applications, enabling multi-page experiences.<br /><br />
                        <strong>Virtual DOM:</strong> is a key concept where React creates a lightweight copy of the real DOM, improving performance by minimizing direct manipulation of the DOM.<br /><br />
                        <strong>Reconciliation:</strong> is the process React uses to update the UI by comparing the Virtual DOM with the real DOM and applying changes efficiently.<br /><br />
                        <strong>Context API:</strong> allows for state management across multiple components without prop drilling, facilitating global state management.<br /><br />
                        <strong>Redux:</strong> is a state management library often used with React to handle complex state logic in larger applications.<br /><br />
                        <strong>Testing:</strong> React applications can be tested using tools like Jest (for unit testing) and React Testing Library (for testing components and interactions).<br /><br />
                        <strong>Event Handling:</strong> in React is done using camelCase syntax and functions, similar to JavaScript but with some differences in implementation.<br /><br />
                        <strong>React Developer Tools:</strong> is a browser extension that provides debugging and inspection capabilities for React components.<br /><br />
                        <strong>React Native:</strong> allows developers to use React to build mobile applications for iOS and Android with the same codebase.<br /><br />
                        <strong>Code Splitting and Lazy Loading:</strong> help improve performance by loading components and assets only when needed.<br /><br />
                        <strong>React’s Unidirectional Data:</strong> flow makes it easier to understand and manage the flow of data throughout the application.<br /><br />
                        <strong>React’s Ecosystem:</strong> includes a vast array of libraries and tools, making it versatile and suitable for various project needs.
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
                            <img src={ReactLogo} alt="React Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Box>
                        <Typography variant="h4" sx={{ mt: 1, ml: 1, textTransform: 'uppercase' }}>REACT</Typography>
                    </Stack>
                    <Stack width={'auto'} direction={'row'}>
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

export default ReactInfo;
