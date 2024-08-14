import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import OracleLogo from '../images/oracleLogo.png';
import DatabasesQuickLinks from '../component/DatabasesQuickLinks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const OracleInfo = () => {
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
                    <Typography>1. Introduction to Oracle Database</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview and Architecture:</strong><br />
                        Basic concepts and components of Oracle Database<br />
                        Understanding the Oracle architecture (instances, databases, schema)<br /><br />
                        
                        <strong>Installation and Configuration:</strong><br />
                        Installing Oracle Database<br />
                        Initial configuration steps
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. SQL Fundamentals</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Basic SQL:</strong><br />
                        Data Definition Language (DDL): CREATE, ALTER, DROP<br />
                        Data Manipulation Language (DML): SELECT, INSERT, UPDATE, DELETE<br /><br />
                        
                        <strong>Advanced SQL Queries:</strong><br />
                        Joins: Inner, Outer, Cross, Self<br />
                        Subqueries and nested queries<br />
                        Set operations: UNION, INTERSECT, MINUS
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. PL/SQL Basics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Introduction to PL/SQL:</strong><br />
                        PL/SQL block structure<br />
                        Declaring variables and constants<br />
                        Control structures: IF, CASE, LOOP<br /><br />

                        <strong>Stored Procedures and Functions:</strong><br />
                        Creating and using stored procedures<br />
                        Defining and calling functions
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Database Design and Modeling</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Schema Design:</strong><br />
                        Creating and managing tables<br />
                        Defining and using constraints: Primary key, Foreign key, Unique, Check<br /><br />

                        <strong>Indexes and Views:</strong><br />
                        Creating and managing indexes<br />
                        Creating and using views
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Transactions and Concurrency</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Transaction Management:</strong><br />
                        Understanding transactions and ACID properties<br />
                        Using COMMIT, ROLLBACK, and SAVEPOINT<br /><br />

                        <strong>Locking Mechanisms:</strong><br />
                        Understanding row-level and table-level locks<br />
                        Managing concurrency with locks
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Performance Tuning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Query Optimization:</strong><br />
                        Analyzing and optimizing SQL queries<br />
                        Using execution plans and SQL hints<br /><br />

                        <strong>Indexing Strategies:</strong><br />
                        Choosing the right type of indexes<br />
                        Implementing and maintaining indexes
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Data Management</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Backup and Recovery:</strong><br />
                        Basics of backup strategies<br />
                        Using RMAN for backups and recovery<br /><br />

                        <strong>Data Import and Export:</strong><br />
                        Using Data Pump for data import/export<br />
                        Understanding and using SQL*Loader
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. Advanced SQL Techniques</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Partitioning:</strong><br />
                        Benefits of partitioning<br />
                        Implementing range, list, and hash partitioning<br /><br />

                        <strong>Advanced Joins and Set Operations:</strong><br />
                        Full outer joins, self-joins<br />
                        Advanced set operations and their use cases
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9. Security</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>User Management:</strong><br />
                        Creating and managing users and roles<br />
                        Implementing privileges and permissions<br /><br />

                        <strong>Data Security:</strong><br />
                        Understanding and implementing data encryption<br />
                        Using Virtual Private Database (VPD) for row-level security
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel10'} onChange={handleAccordionChange('panel10')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>10. Oracle Database Tools</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>SQL Developer:</strong><br />
                        Using Oracle SQL Developer for database development<br />
                        Managing connections and executing SQL/PLSQL scripts<br /><br />

                        <strong>Oracle Enterprise Manager:</strong><br />
                        Basic usage of Oracle Enterprise Manager for database monitoring<br /><br />
                        This curriculum provides a focused and comprehensive guide to the essential Oracle Database
                        topics a backend developer needs to know, ensuring they have the necessary skills to
                        effectively work with Oracle databases in their applications.
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
                        Oracle Database is a relational database management system (RDBMS) that Oracle Corporation created and marketed.<br />
                        It is one of the most popular RDBMSs on the market and is used to store and retrieve data for a wide range of applications.<br />
                        Oracle Database is well-known for its dependability, scalability, and performance, and it is compatible with a wide range of programming languages and development frameworks.<br />
                        It includes data warehousing, online transaction processing, and advanced analytics, as well as high availability, disaster recovery, and security.
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
                            <img src={OracleLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Box>
                        <Typography variant="h4" sx={{ mt: 1, ml: 1, textTransform: 'uppercase' }}>Oracle</Typography>
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
                        <DatabasesQuickLinks />
                    </Box>
                </Box>
            </Stack>
        </Stack>
    );
};

export default OracleInfo;
