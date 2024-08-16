import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MongoDbLogo from '../images/mongoDbLogo.png';
import DatabasesQuickLinks from '../component/DatabasesQuickLinks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MongoDbInfo = () => {
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
                    <Typography>1. Introduction to MongoDB</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview and Features:</strong><br />
                        What is MongoDB?<br />
                        Key features and benefits of MongoDB<br />
                        Comparison with relational databases<br /><br />
                        
                        <strong>Installation and Setup:</strong><br />
                        Installing MongoDB<br />
                        Basic configuration<br />
                        Starting and stopping MongoDB
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. MongoDB Basics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Core Concepts:</strong><br />
                        Understanding databases, collections, and documents<br />
                        BSON format<br /><br />

                        <strong>CRUD Operations:</strong><br />
                        Creating documents<br />
                        Reading documents (basic queries)<br />
                        Updating documents<br />
                        Deleting documents
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. Data Modeling</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Schema Design:</strong><br />
                        Understanding schema design in MongoDB<br />
                        Designing efficient schemas<br /><br />

                        <strong>Relationships:</strong><br />
                        Modeling one-to-one, one-to-many, and many-to-many relationships<br />
                        Embedding vs. referencing
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Indexing</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Introduction to Indexes:</strong><br />
                        Types of indexes (single field, compound, multikey)<br />
                        Creating and managing indexes<br /><br />

                        <strong>Indexing Strategies:</strong><br />
                        Choosing appropriate indexes for queries<br />
                        Impact of indexes on performance
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Aggregation Framework</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Basics of Aggregation:</strong><br />
                        Introduction to the aggregation framework<br />
                        Basic aggregation operations (`$match`, `$group`, `$project`)<br /><br />

                        <strong>Advanced Aggregation:</strong><br />
                        Using pipelines for complex data transformations<br />
                        Common aggregation stages (`$unwind`, `$lookup`, `$sort`, `$limit`)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Performance Optimization</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Query Optimization:</strong><br />
                        Analyzing query performance with `explain()`<br />
                        Optimizing query performance<br /><br />

                        <strong>Sharding:</strong><br />
                        Understanding sharding concepts<br />
                        Implementing sharding for large-scale applications
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Transactions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>ACID Transactions:</strong><br />
                        Introduction to MongoDB transactions<br />
                        Implementing multi-document transactions
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. Security</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>User Authentication:</strong><br />
                        Creating and managing users<br />
                        Authentication mechanisms<br /><br />

                        <strong>Data Encryption:</strong><br />
                        Encryption at rest and in transit<br />
                        Role-based access control (RBAC)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9. Backup and Recovery</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Backup Strategies:</strong><br />
                        Using `mongodump` and `mongorestore`<br />
                        Implementing backup and recovery plans<br /><br />

                        <strong>Replica Sets:</strong><br />
                        Configuring replica sets for high availability<br />
                        Handling failover scenarios
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel10'} onChange={handleAccordionChange('panel10')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>10. MongoDB in Production</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Deployment Strategies:</strong><br />
                        Best practices for deploying MongoDB<br />
                        Monitoring and maintenance<br /><br />

                        <strong>Monitoring and Diagnostics:</strong><br />
                        Using tools like MongoDB Atlas, Ops Manager<br />
                        Monitoring performance and diagnosing issues<br /><br />
                        This curriculum provides a focused and comprehensive guide to the essential MongoDB topics
                        a backend developer needs to know, ensuring they have the necessary skills to effectively work
                        with MongoDB in their applications.
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
                        <strong>MongoDB</strong> is a NoSQL, open-source, document-oriented database designed for high performance, scalability, and flexibility.<br /><br />
                        <strong>Document Model:</strong> MongoDB stores data in flexible, JSON-like documents, allowing varied and dynamic data structures.<br /><br />
                        <strong>Collections:</strong> Documents are grouped into collections, which are analogous to tables in relational databases but without a fixed schema.<br /><br />
                        <strong>BSON:</strong> MongoDB stores documents in BSON (Binary JSON) format, which extends JSON with additional data types like dates and binary data.<br /><br />
                        <strong>Schema Flexibility:</strong> MongoDB does not require a predefined schema, allowing developers to modify the structure of documents as needs evolve.<br /><br />
                        <strong>Horizontal Scaling:</strong> MongoDB supports sharding, which allows data to be distributed across multiple servers for horizontal scaling.<br /><br />
                        <strong>Replication:</strong> MongoDB provides replica sets, which maintain copies of data across multiple servers for redundancy and high availability.<br /><br />
                        <strong>Indexing:</strong> MongoDB supports a variety of indexes, including single field, compound, geospatial, and text indexes, to optimize query performance.<br /><br />
                        <strong>Aggregation Framework:</strong> MongoDB’s aggregation framework allows for powerful data processing and transformation, similar to SQL’s GROUP BY and JOIN operations.<br /><br />
                        <strong>MongoDB Query Language (MQL):</strong> MongoDB uses its own query language, MQL, which allows for complex queries using JSON-like syntax.<br /><br />
                        <strong>GridFS:</strong> MongoDB includes GridFS, a specification for storing and retrieving large files, such as images and videos, in the database.<br /><br />
                        <strong>Atlas:</strong> MongoDB Atlas is a fully managed cloud database service that automates deployment, scaling, and maintenance tasks.<br /><br />
                        <strong>Transactions:</strong> MongoDB supports multi-document ACID transactions, allowing for complex operations to be executed with full data integrity.<br /><br />
                        <strong>Change Streams:</strong> MongoDB provides change streams, enabling real-time data processing by monitoring changes to documents in a collection.<br /><br />
                        <strong>Drivers:</strong> MongoDB offers official drivers for various programming languages, including JavaScript, Python, Java, and C#, facilitating integration with diverse applications.<br /><br />
                        <strong>Security:</strong> MongoDB includes robust security features such as role-based access control (RBAC), encryption at rest, and SSL/TLS for data in transit.<br /><br />
                        <strong>Atlas Data Lake:</strong> A service that allows users to query and analyze data stored in various formats and locations, integrating seamlessly with MongoDB.<br /><br />
                        <strong>Backup and Recovery:</strong> MongoDB offers tools and services for automated backups, point-in-time recovery, and disaster recovery strategies.<br /><br />
                        <strong>Time Series Data:</strong> MongoDB has built-in support for time series data, optimized for storing and querying time-stamped data efficiently, making it suitable for IoT, financial applications, and more.<br /><br />
                        <strong>Aggregation Pipelines:</strong> MongoDB’s aggregation pipelines allow for complex data processing operations, enabling stages like filtering, sorting, grouping, and projecting, which can be chained together to transform and analyze data in a powerful and flexible manner. 
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
                            <img src={MongoDbLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Box>
                        <Typography variant="h4" sx={{ mt: 1, ml: 1, textTransform: 'uppercase' }}>MongoDB</Typography>
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

export default MongoDbInfo;
