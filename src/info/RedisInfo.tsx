import React, { useState } from 'react';
import  {Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RedisLogo from '../images/redisLogo.png';
import BackendQuickLinks from '../component/BackendQuickLinks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const RedisInfo = () => {
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
                    <Typography>1: Introduction to Redis</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview and Features:</strong><br/>
                        What is Redis?<br/>
                        Key features: In-memory data store, persistence, high performance<br/>
                        Use cases and common applications<br/><br/>

                        <strong>Installation and Setup:</strong><br/>
                        Installing Redis<br/>
                        Basic configuration<br/>
                        Starting and stopping Redis
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2: Core Data Types</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Strings:</strong><br/>
                        Basic operations: `SET`, `GET`, `DEL`<br/>
                        String manipulation: `APPEND`, `INCR`, `DECR`<br/><br/>

                        <strong>Lists:</strong><br/>
                        Basic operations: `LPUSH`, `RPUSH`, `LPOP`, `RPOP`<br/>
                        List manipulation: `LRANGE`, `LINSERT`<br/><br/>

                        <strong>Sets:</strong><br/>
                        Basic operations: `SADD`, `SREM`, `SMEMBERS`<br/>
                        Set operations: `SUNION`, `SINTER`, `SDIFF`<br/><br/>

                        <strong>Sorted Sets:</strong><br/>
                        Basic operations: `ZADD`, `ZREM`, `ZRANGE`<br/>
                        Sorted set operations: `ZINTERSTORE`, `ZUNIONSTORE`<br/><br/>

                        <strong>Hashes:</strong><br/>
                        Basic operations: `HSET`, `HGET`, `HDEL`<br/>
                        Hash manipulation: `HGETALL`, `HINCRBY`<br/><br/>

                        <strong>Streams:</strong><br/>
                        Basic operations: `XADD`, `XREAD`, `XDEL`<br/>
                        Stream management: `XTRIM`, `XRANGE`
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3: Redis Persistence</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Persistence Mechanisms:</strong><br/>
                        RDB (Redis Database Backup)<br/>
                        AOF (Append-Only File)<br/><br/>

                        <strong>Configuring Persistence:</strong><br/>
                        Setting up RDB and AOF<br/>
                        Understanding and managing persistence options
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4: Pub/Sub Messaging</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Pub/Sub Basics:</strong><br/>
                        Publishing messages: `PUBLISH`<br/>
                        Subscribing to channels: `SUBSCRIBE`, `PSUBSCRIBE`<br/><br/>

                        <strong>Handling Messages:</strong><br/>
                        Message patterns: `UNSUBSCRIBE`, `PUNSUBSCRIBE`
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5: Transactions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Redis Transactions:</strong><br/>
                        Understanding MULTI, EXEC, DISCARD<br/>
                        Using WATCH for optimistic locking
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6: Redis Security</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Authentication:</strong><br/>
                        Configuring Redis password authentication<br/>
                        Using ACLs for access control<br/><br/>

                        <strong>Security Best Practices:</strong><br/>
                        Securing Redis instance from unauthorized access<br/>
                        Configuration best practices for security
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7: Performance Tuning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Optimizing Redis Performance:</strong><br/>
                        Understanding Redis memory management<br/>
                        Configuring max memory policies<br/><br/>

                        <strong>Monitoring and Diagnostics:</strong><br/>
                        Using Redis commands for monitoring: `INFO`, `MONITOR`<br/>
                        Analyzing and interpreting Redis logs
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8: Advanced Features</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Redis Modules:</strong><br/>
                        Introduction to Redis modules<br/>
                        Using popular modules (e.g., RedisGraph, RedisSearch)<br/><br/>

                        <strong>Redis Cluster:</strong><br/>
                        Configuring and managing Redis clusters<br/>
                        Understanding data sharding and replication
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9: Integration and Best Practices</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Integrating Redis with Applications:</strong><br/>
                        Common client libraries for Redis<br/>
                        Best practices for using Redis in application design<br/><br/>

                        <strong>Backup and Recovery:</strong><br/>
                        Creating backups of Redis data<br/>
                        Restoring Redis data from backups<br/><br/>
                        This curriculum provides a focused guide to the essential Redis topics a backend developer
                        needs to know, equipping them with the skills to effectively use Redis in various applications.
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
                        <strong>Redis</strong> is an open-source, in-memory data structure store used as a database, cache, and message broker.<br /><br />
                        <strong>In-Memory Storage</strong>: Redis stores data in memory for fast access and high performance, with optional persistence to disk.<br /><br />
                        <strong>Data Structures</strong>: Redis supports a variety of data structures, including strings, lists, sets, hashes, sorted sets, and bitmaps.<br /><br />
                        <strong>Persistence</strong>: Redis provides options for data persistence with RDB snapshots and AOF (Append-Only File) logs to ensure data durability.<br /><br />
                        <strong>Replication</strong>: Redis supports master-slave replication, allowing data to be copied from a master node to one or more slave nodes.<br /><br />
                        <strong>High Availability</strong>: Redis Sentinel provides high availability and monitoring, enabling automatic failover and monitoring of Redis instances.<br /><br />
                        <strong>Cluster Mode</strong>: Redis Cluster enables horizontal scaling by distributing data across multiple Redis nodes in a cluster.<br /><br />
                        <strong>Pub/Sub</strong>: Redis includes a publish/subscribe messaging paradigm for real-time messaging and event distribution.<br /><br />
                        <strong>Atomic Operations</strong>: Redis supports atomic operations on data structures, allowing for complex operations to be performed safely.<br /><br />
                        <strong>Transactions</strong>: Redis transactions allow grouping multiple commands into a single atomic operation with the MULTI, EXEC, and WATCH commands.<br /><br />
                        <strong>Lua Scripting</strong>: Redis supports Lua scripting, enabling custom scripts to be executed atomically on the server side.<br /><br />
                        <strong>TTL (Time-To-Live)</strong>: Redis allows setting expiration times on keys, enabling automatic deletion of data after a specified period.<br /><br />
                        <strong>Memory Management</strong>: Redis provides various memory management options, including eviction policies to handle scenarios where memory is full.<br /><br />
                        <strong>Backup and Restore</strong>: Supports creating backups and restoring data using RDB snapshots and AOF logs.<br /><br />
                        <strong>Security</strong>: Redis includes security features such as authentication, authorization, and TLS encryption to secure data and communication.<br /><br />
                        <strong>Client Libraries</strong>: Redis has a wide range of client libraries available for various programming languages, facilitating integration with applications.<br /><br />
                        <strong>Performance</strong>: Redis is known for its high performance and low latency, making it suitable for real-time applications and caching.<br /><br />
                        <strong>Community and Ecosystem</strong>: Redis has an active community and a broad ecosystem, with extensive documentation and third-party tools and integrations.<br /><br />
                        <strong>Data Modeling</strong>: Redis supports flexible data modeling, enabling efficient storage and retrieval of complex data types.<br /><br />
                        <strong>Use Cases</strong>: Common use cases for Redis include caching, session management, real-time analytics, and message queuing.
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
                    <Box height={'50px'} width={'50px'}><img src={RedisLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/></Box>
                    <Typography variant="h4" sx={{mt:1, ml:1, textTransform:'uppercase'}}>Redis</Typography>
                </Stack>
                <Stack width={'auto'} direction={'row'}>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, position: 'relative', overflow: 'hidden' }}>
                        <MenuBookIcon />
                    </Box>
                    <Typography sx={{ mt: 2.5, ml:1 }}>15 Modules</Typography>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, ml: 3, position: 'relative', overflow: 'hidden' }}>
                        <MenuBookIcon />
                    </Box>
                    <Typography sx={{ mt: 2.5, ml:1 }}>72 Hours</Typography>
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

export default RedisInfo;
