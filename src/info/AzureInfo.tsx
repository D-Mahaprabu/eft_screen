import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CloudQuickLinks from '../component/CloudQuickLinks';
import AzureLogo from '../images/azureLogo.png';

const AzureInfo = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    const handleAccordionChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const renderCurriculum = () => (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>1. Introduction to Microsoft Azure</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview of Azure:</strong><br />
                        History and evolution of Microsoft Azure<br />
                        Azure global infrastructure (regions, availability zones)<br />
                        Key benefits and features of Azure<br /><br />
                        
                        <strong>Azure Core Services Overview:</strong><br />
                        Introduction to compute, storage, database, and networking services<br />
                        Navigating the Azure Portal and Azure CLI
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. Azure Identity and Access Management (IAM)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Azure Active Directory (AAD):</strong><br />
                        Understanding AAD roles, users, groups, and policies<br />
                        Managing access with AAD<br />
                        Setting up multi-factor authentication (MFA)<br /><br />

                        <strong>Role-Based Access Control (RBAC):</strong><br />
                        Configuring RBAC for resources and subscriptions<br />
                        Implementing least privilege access
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. Compute Services</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Azure Virtual Machines (VMs):</strong><br />
                        Creating and managing Azure VMs<br />
                        VM sizes, pricing models, and best practices<br />
                        Configuring networking, storage, and security for VMs<br /><br />

                        <strong>Azure App Services:</strong><br />
                        Deploying and managing web apps, mobile apps, and API apps<br />
                        Scaling and monitoring app services<br />
                        Implementing continuous integration and deployment (CI/CD) for apps<br /><br />

                        <strong>Azure Functions:</strong><br />
                        Introduction to serverless computing with Azure Functions<br />
                        Creating and managing function apps<br />
                        Integrating with other Azure services
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Storage Services</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Azure Storage:</strong><br />
                        Understanding Blob, Table, Queue, and File storage<br />
                        Configuring storage accounts and access control<br />
                        Implementing storage redundancy and replication<br /><br />

                        <strong>Azure Disk Storage:</strong><br />
                        Managing managed and unmanaged disks<br />
                        Snapshots and backups<br /><br />

                        <strong>Azure Data Lake Storage:</strong><br />
                        Configuring and using Data Lake Storage for big data analytics<br />
                        Integrating with analytics services
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Database Services</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Azure SQL Database:</strong><br />
                        Creating and managing SQL databases<br />
                        Configuring backups, high availability, and disaster recovery<br />
                        Scaling and performance tuning<br /><br />

                        <strong>Azure Cosmos DB:</strong><br />
                        Setting up and managing Cosmos DB<br />
                        Understanding data modeling and partitioning<br />
                        Integrating with other Azure services<br /><br />

                        <strong>Azure Database for MySQL, PostgreSQL, and MariaDB:</strong><br />
                        Creating and managing open-source databases<br />
                        Configuring high availability and backups
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Networking and Content Delivery</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Azure Virtual Network (VNet):</strong><br />
                        Creating and configuring VNets<br />
                        Managing subnets, route tables, and network security groups<br />
                        Implementing VNet peering and VPN connections<br /><br />
                        
                        <strong>Azure Load Balancer and Application Gateway:</strong><br />
                        Configuring load balancing for high availability<br />
                        Implementing Application Gateway for web application firewall (WAF) and SSL termination<br /><br />

                        <strong>Azure CDN:</strong><br />
                        Setting up and managing CDN profiles and endpoints<br />
                        Configuring content delivery and caching
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Security and Compliance</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Azure Security Center:</strong><br />
                        Setting up and using Security Center for threat detection<br />
                        Implementing security policies and compliance controls<br /><br />

                        <strong>Azure Key Vault:</strong><br />
                        Managing secrets, keys, and certificates<br />
                        Integrating Key Vault with other Azure services<br /><br />

                        <strong>Azure Policy and Blueprints:</strong><br />
                        Defining and enforcing organizational policies<br />
                        Using Azure Blueprints for governance and compliance
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. Monitoring and Management</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Azure Monitor:</strong><br />
                        Setting up monitoring and alerts for Azure resources<br />
                        Creating and analyzing metrics, logs, and dashboards<br /><br />

                        <strong>Azure Log Analytics:</strong><br />
                        Configuring and using Log Analytics for centralized log management<br />
                        Querying and analyzing log data<br /><br />

                        <strong>Azure Automation:</strong><br />
                        Creating and managing automation runbooks<br />
                        Using Azure Automation for configuration management and updates
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9. DevOps and Application Lifecycle Management</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Azure DevOps:</strong><br />
                        Introduction to Azure DevOps services (Repos, Pipelines, Boards, Artifacts, Test Plans)<br />
                        Setting up CI/CD pipelines with Azure Pipelines<br />
                        Managing source control with Azure Repos<br /><br />

                        <strong>Infrastructure as Code (IaC):</strong><br />
                        Using Azure Resource Manager (ARM) templates for IaC<br />
                        Implementing IaC with Terraform and Azure DevOps<br /><br />

                        <strong>Azure Kubernetes Service (AKS):</strong><br />
                        Setting up and managing AKS clusters<br />
                        Deploying containerized applications with AKS<br />
                        Implementing CI/CD for AKS
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel10'} onChange={handleAccordionChange('panel10')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>10. Data Analytics and Machine Learning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Azure Data Factory:</strong><br />
                        Configuring and managing Data Factory for ETL processes<br />
                        Integrating Data Factory with other data services<br /><br />

                        <strong>Azure Synapse Analytics:</strong><br />
                        Setting up and using Synapse Analytics for data warehousing<br />
                        Implementing data integration and analytics<br /><br />

                        <strong>Azure Machine Learning:</strong><br />
                        Creating and managing machine learning workspaces<br />
                        Building, training, and deploying ML models
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel11'} onChange={handleAccordionChange('panel11')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>11. Best Practices and Real-World Implementations</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Best Practices:</strong><br />
                        Cost optimization strategies<br />
                        Security best practices and compliance<br />
                        Performance tuning and optimization<br /><br />

                        <strong>Case Studies:</strong><br />
                        Analyzing successful Azure implementations<br />
                        Lessons learned and best practices from industry leaders
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel12'} onChange={handleAccordionChange('panel12')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>12. Hands-On Projects</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Project Planning:</strong><br />
                        Defining project requirements and objectives<br />
                        Designing Azure architecture for real-world scenarios<br /><br />

                        <strong>Development:</strong><br />
                        Implementing Azure solutions for different project types<br />
                        Integrating advanced Azure features and best practices<br /><br />

                        <strong>Review and Presentation:</strong><br />
                        Peer review and feedback on projects<br />
                        Final project presentation<br />
                        Course wrap-up and next steps<br /><br />
                        This curriculum provides a comprehensive and structured approach to mastering Microsoft
                        Azure, covering both foundational and advanced topics, and equipping learners with the skills
                        needed to effectively use Azure for a variety of cloud computing tasks.
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
                        <strong>Azure</strong> is a comprehensive cloud computing platform from Microsoft that provides a wide range of cloud services.<br /><br />
                        <strong>Compute Services:</strong> include Azure Virtual Machines for scalable virtual servers and Azure Functions for serverless computing.<br /><br />
                        <strong>Storage Solutions:</strong> feature Azure Blob Storage for object storage, Azure Disk Storage for virtual machine disks, and Azure Files for managed file shares.<br /><br />
                        <strong>Databases:</strong> include Azure SQL Database for relational data, Azure Cosmos DB for NoSQL data, and Azure Database for PostgreSQL/MySQL/MariaDB.<br /><br />
                        <strong>Networking:</strong> services include Azure Virtual Network for isolated networks, Azure Load Balancer for distributing traffic, and Azure Traffic Manager for global traffic routing.<br /><br />
                        <strong>Content Delivery:</strong> is managed by Azure Content Delivery Network (CDN), which caches content at edge locations for fast delivery.<br /><br />
                        <strong>Security and Identity:</strong> features include Azure Active Directory (AD) for identity management, and Azure Key Vault for managing secrets and encryption keys.<br /><br />
                        <strong>Monitoring and Management:</strong> tools include Azure Monitor for logging and metrics, and Azure Security Center for threat protection and compliance.<br /><br />
                        <strong>Development and Deployment:</strong> services feature Azure DevOps for CI/CD, Azure Pipelines for automated workflows, and Azure Repos for source control.<br /><br />
                        <strong>Edge Computing:</strong> services such as Azure IoT Edge and Azure Stack Edge extend cloud capabilities to edge locations, enabling real-time data processing and analytics closer to where data is generated.<br /><br />
                        <strong>Containers:</strong> services include Azure Kubernetes Service (AKS) and Azure Container Instances for managing containerized applications.<br /><br />
                        <strong>Serverless:</strong> options include Azure Functions for running code in response to events and Azure Logic Apps for automating workflows.<br /><br />
                        <strong>Analytics:</strong> tools include Azure Synapse Analytics for data warehousing, Azure Data Lake for big data storage, and Azure Data Factory for data integration and ETL.<br /><br />
                        <strong>Migration Services:</strong> help move applications and data to Azure, including Azure Migrate for assessment and migration.<br /><br />
                        <strong>Blockchain Services:</strong> include Azure Blockchain Service and Azure Blockchain Workbench, which provide tools for building, deploying, and managing blockchain networks and applications.<br /><br />
                        <strong>Internet of Things (IoT):</strong> services include Azure IoT Hub for managing IoT devices and Azure Digital Twins for modeling digital representations of physical environments.<br /><br />
                        <strong>Application Integration:</strong> tools include Azure Service Bus for messaging and Azure Event Grid for event-driven architectures.<br /><br />
                        <strong>Cost Management:</strong> tools help monitor and optimize cloud spending, including Azure Cost Management and Azure Pricing Calculator.<br /><br />
                        <strong>Global Infrastructure:</strong> includes a network of data centers organized into regions and availability zones for high availability and disaster recovery.<br /><br />
                        <strong>Hybrid Cloud Solutions:</strong> such as Azure Arc and Azure Stack enable integration between on-premises environments and Azure cloud services.<br /><br />
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
                    <Box height={'50px'} width={'50px'}><img src={AzureLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/></Box>
                    <Typography variant="h4" sx={{mt:1, ml:1, textTransform:'uppercase'}}>Azure</Typography>
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
                    <CloudQuickLinks />
                </Box>
            </Box>
            </Stack>
        </Stack>
    )
}

export default AzureInfo;
