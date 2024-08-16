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
                        <strong>Oracle Database</strong> is a powerful relational database management system (RDBMS) known for scalability, security, and robustness.<br /><br />
                        <strong>SQL:</strong> Oracle Database uses SQL (Structured Query Language) as its primary language for managing and querying data.<br /><br />
                        <strong>PL/SQL:</strong> Oracle’s proprietary extension to SQL, allowing procedural programming with features like loops, conditions, and functions.<br /><br />
                        <strong>Oracle Cloud Infrastructure (OCI):</strong> Oracle’s cloud platform offering computing, storage, and networking services along with cloud applications.<br /><br />
                        <strong>Oracle Autonomous Database:</strong> A cloud-based, self-driving database that uses machine learning to automate patching, tuning, and backups.<br /><br />
                        <strong>Oracle E-Business Suite:</strong> A suite of integrated business applications for enterprise resource planning (ERP), customer relationship management (CRM), and supply chain management (SCM).<br /><br />
                        <strong>Oracle Fusion Middleware:</strong> A collection of software products that provides a development and runtime environment for enterprise applications.<br /><br />
                        <strong>Oracle Enterprise Manager:</strong> A comprehensive management tool for monitoring and administering Oracle environments, including databases, middleware, and hardware.<br /><br />
                        <strong>Oracle Real Application Clusters (RAC):</strong> Enables multiple servers to run a single Oracle Database, providing high availability and scalability.<br /><br />
                        <strong>Oracle Data Guard:</strong> Provides disaster recovery and data protection by maintaining standby databases that can take over if the primary database fails.<br /><br />
                        <strong>Oracle GoldenGate:</strong> A tool for real-time data integration and replication, enabling high availability and zero downtime migrations.<br /><br />
                        <strong>Oracle Exadata:</strong> An engineered system optimized for running Oracle Database workloads with high performance and efficiency.<br /><br />
                        <strong>Oracle VM:</strong> Oracle’s virtualization technology that provides a platform for deploying, managing, and running virtualized workloads.<br /><br />
                        <strong>Oracle Financials:</strong> Part of the Oracle E-Business Suite, Oracle Financials is a comprehensive set of financial management applications that automate and streamline financial processes, including general ledger, accounts payable, accounts receivable, and asset management.<br /><br />
                        <strong>Oracle PeopleSoft:</strong> An enterprise software solution for human capital management, financial management, and other business processes.<br /><br />
                        <strong>Oracle Hyperion:</strong> A suite of performance management applications that support enterprise planning, budgeting, and financial management.<br /><br />
                        <strong>Oracle Siebel CRM:</strong> A customer relationship management solution providing sales, service, and marketing automation.<br /><br />
                        <strong>Oracle Licensing:</strong> Oracle’s software licensing can be complex, with options for on-premises, cloud, and hybrid environments, often requiring careful management.<br /><br />
                        <strong>Oracle APEX:</strong> A low-code development platform for building scalable, secure enterprise applications with minimal coding effort, integrated within Oracle Database.<br /><br />
                        <strong>Oracle Cloud Applications:</strong> Oracle offers a suite of SaaS (Software as a Service) applications covering areas like ERP, HCM (Human Capital Management), CRM, and SCM, designed to help businesses manage and automate their core processes in the cloud.
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
                        <DatabasesQuickLinks />
                    </Box>
                </Box>
            </Stack>
        </Stack>
    );
};

export default OracleInfo;
