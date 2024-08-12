import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HibernateLogo from '../images/hibernateLogo.svg';
import BackendQuickLinks from '../component/BackendQuickLinks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HibernateInfo = () => {
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
                    <Typography>1: Introduction to Hibernate</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview and Setup:</strong><br/>
                        What is Hibernate and its key benefits<br/>
                        Adding Hibernate dependencies and configuring with Spring Boot
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2: Core Concepts</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>ORM Basics:</strong><br/>
                        Mapping Java classes to database tables<br/>
                        Key annotations: `@Entity`, `@Table`
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3: Configuration</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Hibernate Configuration File:</strong><br/>
                        `hibernate.cfg.xml` and its properties<br/><br/>
                        
                        <strong>Spring Boot Configuration:</strong><br/>
                        Configuring Hibernate in `application.properties` or `application.yml`
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4: Mapping Associations</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>One-to-One:</strong><br/>
                        Using `@OneToOne`<br/><br/>

                        <strong>One-to-Many:</strong><br/>
                        Using `@OneToMany`, `@ManyToOne`<br/><br/>

                        <strong>Many-to-Many:</strong><br/>
                        Using `@ManyToMany`, `@JoinTable`
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5: Inheritance Mapping</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Inheritance Strategies:</strong><br/>
                        Single Table, Table per Class, Joined Table
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6: Querying</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Hibernate Query Language (HQL):</strong><br/>
                        Basic HQL syntax<br/>
                        Using named queries with `@NamedQuery`<br/><br/>

                        <strong>Criteria API:</strong><br/>
                        Building dynamic, type-safe queries
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7: Caching</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>First-Level Cache:</strong><br/>
                        Session management<br/><br/>

                        <strong>Second-Level Cache:</strong><br/>
                        Configuring and using cache providers<br/><br/>
                        
                        <strong>Query Cache:</strong><br/>
                        Caching query results
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8: Transactions and Concurrency</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Transaction Management:</strong><br/>
                        Configuring transactions<br/><br/>

                        <strong>Locking:</strong><br/>
                        Optimistic (`@Version`) and Pessimistic (`@Lock`)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9: Batch Processing</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Batch Operations:</strong><br/>
                        Batch insert/update configurations<br/>
                        Using HQL for bulk operations
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel10'} onChange={handleAccordionChange('panel10')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>10: Performance Tuning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>N+1 Select Problem:</strong><br/>
                        Identifying and solving it<br/><br/>

                        <strong>Loading Strategies:</strong><br/>
                        Lazy vs Eager loading
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel11'} onChange={handleAccordionChange('panel11')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>11: Testing</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Unit and Integration Testing:</strong><br/>
                        Setting up tests with in-memory databases<br/>
                        Testing repositories and transactions
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel12'} onChange={handleAccordionChange('panel12')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>12: Additional Resources</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Documentation:</strong><br/>
                        Official Hibernate documentation<br/><br/>

                        <strong>Community Support:</strong><br/>
                        Forums, Stack Overflow, GitHub<br/><br/>
                        This concise list covers the essential Hibernate topics for a backend developer, ensuring a solid
                        understanding of its core functionalities and best practices.
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
                       Hibernate is a framework which provides some abstraction layer, meaning that the programmer does not have to worry about the implementations.<br/>
                       Hibernate does the implementations for you internally like Establishing a connection with the database, writing query to perform CRUD operations etc.
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
                    <Box height={'50px'} width={'50px'}><img src={HibernateLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/></Box>
                    <Typography variant="h4" sx={{mt:1, ml:1, textTransform:'uppercase'}}>Hibernate</Typography>
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

export default HibernateInfo;
