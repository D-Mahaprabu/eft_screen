import React, { useState } from 'react';
import { Stack, Box, Typography, Paper, Tabs, Tab } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuickLinks from './Quicklinks';
import Discover from './Discover'; 

const FullStackCource = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 0:
                return (
                    <Typography variant="body1">
                        Full Stack Engineering involves developing both the front-end (client-side) and back-end (server-side) of web applications.<br /><br />
                        <strong>Front-End Development:</strong> Involves creating the user interface and user experience of a website.<br /><br />
                        <strong>Technologies:</strong> HTML, CSS, JavaScript, and front-end frameworks/libraries like React, Angular, or Vue.js.<br /><br />
                        <strong>Responsive Design:</strong> Ensures the application works across various devices (e.g., mobile, tablet, desktop).<br /><br />
                        <strong>Back-End Development:</strong> Handles server-side logic, database interactions, and application architecture.<br /><br />
                        <strong>Languages:</strong> Commonly used back-end languages include Python, Node.js (JavaScript), Ruby, Java, and PHP.<br /><br />
                        <strong>Databases:</strong> Manages data storage, retrieval, and updates. Can be SQL (e.g., MySQL, PostgreSQL) or NoSQL (e.g., MongoDB).<br /><br />
                        <strong>APIs:</strong> Develops and integrates RESTful APIs for communication between front-end and back-end.<br /><br />
                        <strong>Authentication:</strong> Manages user login, roles, and permissions securely.<br /><br />
                        <strong>Server Management:</strong> Involves deploying and maintaining servers, often using cloud platforms like AWS, Azure, or Google Cloud.<br /><br />
                        <strong>Version Control:</strong> Uses systems like Git to track changes and collaborate on code.<br /><br />
                        <strong>CI/CD:</strong> Continuous Integration and Continuous Deployment ensure that code is automatically tested and deployed.<br /><br />
                        <strong>Security:</strong> Implements measures to protect the application from threats like SQL injection, XSS, and data breaches.<br /><br />
                        <strong>Testing:</strong> Includes unit, integration, and end-to-end testing to ensure the application functions as expected.<br /><br />
                        <strong>DevOps:</strong> Involves automating and managing the software development lifecycle (SDLC).<br /><br />
                        <strong>Containers:</strong> Uses Docker or Kubernetes to package applications for consistent deployment across environments.<br /><br />
                        <strong>Scalability:</strong> Designs the application to handle increased load by scaling vertically or horizontally.<br /><br />
                        <strong>Performance Optimization:</strong> Improves the speed and efficiency of the application.<br /><br />
                        <strong>Code Structure:</strong> Follows best practices for writing clean, maintainable, and modular code.<br /><br />
                        <strong>Collaboration:</strong> Works with cross-functional teams, including designers, product managers, and QA engineers, to deliver a cohesive product.<br /><br />
                    </Typography>
                );
        }
    };

    return (
        <Stack direction={'row'} width={'100%'} height={700} justifyContent={'space-between'} bgcolor={'white'} sx={{mt:10}}>
            <Box height={'auto'} width={'60%'} sx={{ ml: 2 }}>
                <Stack>
                    <Typography variant="h4">FULLSTACK ENGINEERING</Typography>
                </Stack>
                <Stack width={'auto'} direction={'row'}>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, position: 'relative', overflow: 'hidden' }}>
                        <MenuBookIcon />
                    </Box>
                    <Typography sx={{ mt: 2.5, ml:1 }}>15 Modules</Typography>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, ml: 3, position: 'relative', overflow: 'hidden' }}>
                        <MenuBookIcon />
                    </Box>
                    <Typography sx={{ mt: 2.5, ml:1 }}>8 Months</Typography>
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
                        </Tabs>
                    </Paper>
                    <Box sx={{ p: 3 }}>
                        {renderContent()}
                    </Box>
                </Box>
            </Box>
            <Box height={'auto'} width={'38%'} sx={{ fontWeight: 'bold' }}>
                <Stack height={130} width={'auto'} direction={'row'}>
                    {/* <Box height={130} width={'50%'} >
                        <Typography variant='h4' sx={{ ml: 1 }}>FullStack Engineering</Typography>
                        <Button variant='contained' sx={{ borderRadius: 10, ml: 1 }}>20% offer</Button>
                    </Box>
                    <Box width={'50%'}>
                        <Stack direction={'row'} alignItems={'center'} display={'flex'} justifyContent={'center'}>
                            <Typography sx={{ textDecoration: 'line-through', mt: 6 }}>$32k</Typography>
                            <Typography variant='h4' color={'red'} sx={{ mt: 6 }}>24k</Typography>
                        </Stack>
                    </Box>
                </Stack>
                <Stack direction={'row'} >
                    <Button variant='contained' sx={{ backgroundColor: '#FDA800', color: 'black', width: '200px' }}>Add to cart</Button>
                    <Button variant='contained' sx={{ backgroundColor: '#0C5FF3', color: 'white', width: '200px', ml:2 }}>
                        Buy Now
                    </Button> */}
                </Stack>
                <Box sx={{ mt: 2 }}>
                    <QuickLinks />
                    <Discover />
                </Box>
            </Box>
        </Stack>
    );
};

export default FullStackCource;
