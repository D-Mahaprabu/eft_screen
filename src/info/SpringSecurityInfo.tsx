import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SpringSecurityLogo from '../images/springSecurityLogo.png';
import BackendQuickLinks from '../component/BackendQuickLinks';

const SpringSecurityInfo = () => {
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
                    <Typography>1. Introduction to Spring Security</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview of Spring Security:</strong><br />
                        What is Spring Security and why use it?<br />
                        Key features and benefits<br /><br />

                        <strong>Setting Up Spring Security:</strong><br />
                        Adding Spring Security dependency<br />
                        Basic configuration for a Spring Boot application
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. Authentication</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Basic Authentication:</strong><br />
                        Configuring basic HTTP authentication<br />
                        Customizing login forms<br /><br />

                        <strong>Form-Based Authentication:</strong><br />
                        Setting up a login page<br />
                        Handling login and logout<br />
                        Using `UsernamePasswordAuthenticationFilter`<br /><br />

                        <strong>OAuth2 and OpenID Connect:</strong><br />
                        Integrating with OAuth2 providers (e.g., Google, Facebook)<br />
                        Using Spring Security OAuth2 Client<br />
                        Configuring single sign-on (SSO)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. Authorization</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Role-Based Access Control (RBAC):</strong><br />
                        Defining roles and authorities<br />
                        Using `@PreAuthorize` and `@Secured` annotations<br /><br />

                        <strong>Method-Level Security:</strong><br />
                        Enabling method-level security<br />
                        Securing methods with `@PreAuthorize`, `@PostAuthorize`, `@Secured`, and `@RolesAllowed`<br /><br />

                        <strong>URL-Based Security:</strong><br />
                        Configuring URL patterns in `WebSecurityConfigurerAdapter`<br />
                        Using `HttpSecurity` to define access rules
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Password Management</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Password Encoding:</strong><br />
                        Using `PasswordEncoder` for secure password storage<br />
                        Configuring password encoding strategies<br /><br />

                        <strong>Password Reset and Recovery:</strong><br />
                        Implementing password reset functionality<br />
                        Sending password reset emails
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Customizing Authentication and Authorization</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Custom User Details Service:</strong><br />
                        Implementing `UserDetailsService`<br />
                        Loading user-specific data<br /><br />

                        <strong>Custom Authentication Provider:</strong><br />
                        Implementing `AuthenticationProvider`<br />
                        Integrating custom authentication logic<br /><br />

                        <strong>Custom Security Expressions:</strong><br />
                        Creating custom security expressions<br />
                        Using `@PreAuthorize` with custom expressions
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. JWT (JSON Web Token) Authentication</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>JWT Basics:</strong><br />
                        Introduction to JWT and its structure<br />
                        Benefits of using JWT for authentication<br /><br />

                        <strong>Integrating JWT with Spring Security:</strong><br />
                        Creating and validating JWT tokens<br />
                        Configuring JWT filters and security context
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Security Context and Session Management</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Understanding Security Context:</strong><br />
                        Managing the security context<br />
                        Accessing authentication information<br /><br />

                        <strong>Session Management:</strong><br />
                        Configuring session management<br />
                        Preventing session fixation attacks<br />
                        Handling concurrent sessions
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. CSRF Protection</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Cross-Site Request Forgery (CSRF):</strong><br />
                        Understanding CSRF attacks<br />
                        Enabling and customizing CSRF protection
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9. Exception Handling</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Handling Security Exceptions:</strong><br />
                        Configuring exception handling<br />
                        Customizing access denied and authentication entry points
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel10'} onChange={handleAccordionChange('panel10')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>10. Security Testing</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Unit Testing Security Configurations:</strong><br />
                        Testing security configurations with Spring Security Test<br />
                        Writing unit tests for secured methods<br /><br />

                        <strong>Integration Testing:</strong><br />
                        Using `@WithMockUser` for integration tests<br />
                        Testing authentication and authorization flows
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel11'} onChange={handleAccordionChange('panel11')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>11. Advanced Security Features</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Security Headers:</strong><br />
                        Configuring security headers (e.g., HSTS, X-Content-Type-Options)<br />
                        Preventing clickjacking with X-Frame-Options<br /><br />

                        <strong>CORS (Cross-Origin Resource Sharing):</strong><br />
                        Configuring CORS in Spring Security<br />
                        Enabling CORS for specific endpoints<br /><br />

                        <strong>Reactive Security with Spring WebFlux:</strong><br />
                        Introduction to reactive security<br />
                        Securing reactive applications with Spring Security<br /><br />
                        These topics provide a solid foundation for mastering Spring Security as a backend developer,
                        enabling you to secure applications effectively and implement robust authentication and
                        authorization mechanisms.
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
                       Spring Security is one of the projects by the Spring team that is built using the Spring framework in Java.<br/>
                       It contains code that can be customized or used as-is, depending on the use case.<br/>
                       This project aims to make it easy for developers to secure web applications against common exploits such as Cross-Site Request Forgery (CSRF) attacks.<br/> 
                       Its major function is to manage authentication and authorization at both the Web request and method invocation levels.
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
                    <Box height={'50px'} width={'50px'}><img src={SpringSecurityLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/></Box>
                    <Typography variant="h4" sx={{mt:1, ml:1, textTransform:'uppercase'}}>SpringSecurity</Typography>
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
                    <BackendQuickLinks />
                </Box>
            </Box>
            </Stack>
        </Stack>
    )
}

export default SpringSecurityInfo;
