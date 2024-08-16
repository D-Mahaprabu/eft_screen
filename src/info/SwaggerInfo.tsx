import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SwaggerLogo from '../images/swaggerLogo.png';
import BackendQuickLinks from '../component/BackendQuickLinks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SwaggerInfo = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    const handleAccordionChange = (panel: string) => (
        event: React.SyntheticEvent,
        isExpanded: boolean
    ) => {
        setExpanded(isExpanded ? panel : false);
    };

    const renderCurriculum = () => (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>1. Introduction to Swagger</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview and Features:</strong><br />
                        What is Swagger?<br />
                        Key features and benefits of using Swagger<br />
                        Overview of the Swagger ecosystem (Swagger UI, Swagger Editor, Swagger Codegen)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. Getting Started with Swagger</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Basic Concepts:</strong><br />
                        Understanding OpenAPI Specification (OAS)<br />
                        YAML vs. JSON for Swagger definitions<br /><br />

                        <strong>Installation and Setup:</strong><br />
                        Setting up Swagger UI and Swagger Editor<br />
                        Integrating Swagger with a backend project
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. Writing API Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Basic Structure:</strong><br />
                        Paths, methods (GET, POST, PUT, DELETE), and responses<br />
                        Defining request and response bodies<br /><br />

                        <strong>Parameters:</strong><br />
                        Path parameters, query parameters, header parameters<br />
                        Defining parameters in Swagger
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Advanced Documentation Features</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Components:</strong><br />
                        Schemas, responses, parameters, examples<br />
                        Reusing components across different endpoints<br /><br />

                        <strong>Security Definitions:</strong><br />
                        Adding security schemes (Basic Auth, API Keys, OAuth2)<br />
                        Applying security schemes to endpoints
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Using Swagger with Spring Boot</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Springfox Integration:</strong><br />
                        Adding Springfox dependencies<br />
                        Configuring Springfox for automatic API documentation generation<br /><br />

                        <strong>Annotations:</strong><br />
                        Using Swagger annotations (`@Api`, `@ApiOperation`, `@ApiParam`)<br />
                        Customizing API documentation with annotations
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Generating Code with Swagger</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Swagger Codegen:</strong><br />
                        Generating client and server code from Swagger definitions<br />
                        Customizing generated code
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Testing and Mocking APIs</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Swagger Tools:</strong><br />
                        Using Swagger UI for testing endpoints<br />
                        Mocking APIs with Swagger for testing purposes
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. Best Practices</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Maintaining API Documentation:</strong><br />
                        Keeping API documentation up-to-date<br />
                        Best practices for writing clear and concise documentation<br /><br />

                        <strong>Versioning APIs:</strong><br />
                        Strategies for versioning APIs with Swagger<br /><br />

                        <strong>Practical Exercises:</strong><br />
                        <strong>Hands-on Labs:</strong><br />
                        Documenting a sample API using Swagger<br />
                        Setting up Swagger UI and testing endpoints<br /><br />
                        This concise curriculum focuses on the essential Swagger topics a backend developer needs to
                        know, providing a solid foundation for documenting and managing APIs effectively.
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
                        <strong>Swagger</strong> is a set of open-source tools for designing, building, and documenting RESTful APIs.<br /><br />
                        <strong>OpenAPI Specification</strong>: Swagger implements the OpenAPI Specification (OAS), which defines a standard format for describing RESTful APIs.<br /><br />
                        <strong>API Documentation</strong>: Swagger generates interactive API documentation that allows developers to explore and test API endpoints directly from the browser.<br /><br />
                        <strong>Swagger UI</strong>: A web-based interface that displays API documentation and provides an interactive environment for making API calls and viewing responses.<br /><br />
                        <strong>Swagger Editor</strong>: An online editor or downloadable tool used for designing and editing API definitions in the OpenAPI format.<br /><br />
                        <strong>Swagger Codegen</strong>: A tool for generating client libraries, server stubs, and API documentation from an OpenAPI Specification.<br /><br />
                        <strong>API Definition</strong>: Swagger uses a JSON or YAML file to describe API endpoints, request/response formats, authentication methods, and more.<br /><br />
                        <strong>Interactive API Testing</strong>: Provides an interactive way to test API endpoints by inputting parameters and viewing the response directly in the Swagger UI.<br /><br />
                        <strong>Versioning</strong>: Supports versioning of APIs to manage changes and updates while maintaining backward compatibility.<br /><br />
                        <strong>Security Definitions</strong>: Allows for defining security schemes such as API keys, OAuth2, and JWT tokens for API authentication and authorization.<br /><br />
                        <strong>Parameter Types</strong>: Supports various parameter types, including query parameters, path parameters, header parameters, and request bodies.<br /><br />
                        <strong>Response Definitions</strong>: Describes the possible responses for each API endpoint, including status codes, response schemas, and error messages.<br /><br />
                        <strong>SwaggerHub</strong>: A collaborative platform for designing, documenting, and sharing APIs, offering version control and team collaboration features.<br /><br />
                        <strong>Code Generation</strong>: Automatically generates client SDKs and server implementations in various programming languages to speed up development.<br /><br />
                        <strong>API Mocking</strong>: Allows for mocking API responses to simulate and test API behavior before the actual implementation is complete.<br /><br />
                        <strong>Integration</strong>: Can be integrated into CI/CD pipelines to automate the generation of API documentation and client libraries.<br /><br />
                        <strong>Compatibility</strong>: Swagger tools support a wide range of programming languages and frameworks, making it versatile for different tech stacks.<br /><br />
                        <strong>Customizable UI</strong>: The Swagger UI can be customized with themes and styles to match the branding and requirements of the organization.<br /><br />
                        <strong>Testing and Debugging</strong>: Provides a built-in mechanism for testing and debugging APIs, helping to identify and resolve issues early in the development process.<br /><br />
                        <strong>Community and Support</strong>: Swagger has a strong community and extensive documentation, with support available through forums, GitHub, and commercial options.
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
                            <img src={SwaggerLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Box>
                        <Typography variant="h4" sx={{ mt: 1, ml: 1, textTransform: 'uppercase' }}>Swagger</Typography>
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
                        <BackendQuickLinks />
                    </Box>
                </Box>
            </Stack>
        </Stack>
    );
}

export default SwaggerInfo;
