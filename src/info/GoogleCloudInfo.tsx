import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CloudQuickLinks from '../component/CloudQuickLinks';
import GoogleCloudLogo from '../images/googleCloudLogo.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const GoogleCloudInfo = () => {
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
                    <Typography>1. Introduction to Google Cloud Platform</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview of GCP:</strong><br />
                        History and evolution of Google Cloud<br />
                        GCP global infrastructure (regions, zones, and network)<br />
                        Key benefits and features of GCP<br /><br />
                        
                        <strong>GCP Core Services Overview:</strong><br />
                        Introduction to compute, storage, database, and networking services<br />
                        Navigating the Google Cloud Console and Cloud SDK
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. Identity and Access Management (IAM)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Understanding IAM:</strong><br />
                        Overview of IAM roles, users, groups, and policies<br />
                        Managing access with IAM and Cloud Identity<br />
                        Setting up multi-factor authentication (MFA)<br /><br />

                        <strong>Best Practices for IAM:</strong><br />
                        Implementing the principle of least privilege<br />
                        Organizing projects and folders for resource management
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. Compute Services</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Google Compute Engine (GCE):</strong><br />
                        Creating and managing VM instances<br />
                        Understanding VM types, pricing, and configuration<br />
                        Configuring firewalls and access control<br /><br />

                        <strong>Google Kubernetes Engine (GKE):</strong><br />
                        Setting up and managing Kubernetes clusters<br />
                        Deploying containerized applications with GKE<br />
                        Implementing CI/CD pipelines with GKE<br /><br />

                        <strong>Google App Engine:</strong><br />
                        Overview of serverless applications with App Engine<br />
                        Deploying applications and managing versions<br />
                        Scaling and monitoring App Engine applications<br /><br />

                        <strong>Cloud Functions:</strong><br />
                        Introduction to serverless computing with Cloud Functions<br />
                        Creating and managing function triggers<br />
                        Integrating with other GCP services
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Storage Services</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Google Cloud Storage:</strong><br />
                        Understanding storage classes and lifecycle management<br />
                        Configuring access control and permissions<br />
                        Implementing versioning and object lifecycle rules<br /><br />

                        <strong>Google Persistent Disk and Filestore:</strong><br />
                        Creating and managing persistent disks<br />
                        Overview of Cloud Filestore for managed file storage<br /><br />

                        <strong>Google Cloud Bigtable and Spanner:</strong><br />
                        Overview of NoSQL and relational databases in GCP<br />
                        Setting up and managing Bigtable for large analytical workloads<br />
                        Using Cloud Spanner for scalable and transactional databases
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Database Services</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Cloud SQL:</strong><br />
                        Setting up and managing Cloud SQL for MySQL and PostgreSQL<br />
                        Configuring backups, replication, and failover<br />
                        Performance tuning and scaling Cloud SQL instances<br /><br />

                        <strong>Cloud Firestore and Datastore:</strong><br />
                        Overview of Firestore and Datastore<br />
                        Managing NoSQL data structures and queries<br />
                        Integrating Firestore with Firebase and web/mobile applications
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Networking</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Google Virtual Private Cloud (VPC):</strong><br />
                        Creating and configuring VPC networks<br />
                        Managing subnets, routes, and firewalls<br />
                        Implementing VPC peering and VPN connections<br /><br />

                        <strong>Load Balancing and Cloud CDN:</strong><br />
                        Setting up global and regional load balancers<br />
                        Configuring Cloud CDN for caching and content delivery<br />
                        Monitoring and analyzing load balancing performance<br /><br />

                        <strong>Cloud Interconnect and VPN:</strong><br />
                        Establishing hybrid cloud connectivity with Cloud Interconnect<br />
                        Configuring VPNs for secure communication between on-premises and GCP
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Security and Compliance</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Google Cloud Security:</strong><br />
                        Understanding GCP’s security model<br />
                        Using Security Command Center for threat detection<br />
                        Best practices for securing GCP resources<br /><br />

                        <strong>Cloud Key Management:</strong><br />
                        Managing encryption keys with Cloud Key Management Service (KMS)<br />
                        Integrating KMS with other GCP services for data protection<br /><br />

                        <strong>Compliance and Auditing:</strong><br />
                        Implementing compliance checks and audits using Cloud Audit Logs<br />
                        Understanding GCP’s compliance certifications and requirements
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. Monitoring and Management</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Google Cloud Operations Suite:</strong><br />
                        Setting up monitoring and logging with Stackdriver<br />
                        Creating alerts and dashboards for resource management<br />
                        Analyzing logs for troubleshooting and performance optimization<br /><br />

                        <strong>Resource Management:</strong><br />
                        Using Cloud Resource Manager for organization and project management<br />
                        Implementing tagging and labeling strategies for resource tracking
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9. DevOps and Application Lifecycle Management</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Google Cloud Build:</strong><br />
                        Setting up CI/CD pipelines with Cloud Build<br />
                        Integrating Cloud Build with GitHub and GitLab<br />
                        Managing build triggers and notifications<br /><br />

                        <strong>Terraform on GCP:</strong><br />
                        Infrastructure as Code (IaC) with Terraform<br />
                        Writing and deploying Terraform configurations on GCP<br />
                        Managing GCP resources with Terraform modules<br /><br />

                        <strong>Anthos:</strong><br />
                        Overview of Anthos for hybrid and multi-cloud management<br />
                        Deploying applications across on-premises and GCP environments
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel10'} onChange={handleAccordionChange('panel10')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>10. Data Analytics and Machine Learning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>BigQuery:</strong><br />
                        Introduction to BigQuery for data warehousing and analytics<br />
                        Writing and optimizing SQL queries<br />
                        Integrating BigQuery with other GCP services<br /><br />

                        <strong>Cloud Dataflow:</strong><br />
                        Overview of data processing with Cloud Dataflow<br />
                        Building and managing data pipelines<br />
                        Implementing batch and streaming data processing<br /><br />

                        <strong>Cloud Machine Learning Engine:</strong><br />
                        Building and training machine learning models with AI Platform<br />
                        Using pre-trained models and AutoML for rapid development<br />
                        Deploying and managing ML models in production
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
                        Cost optimization strategies for GCP resources<br />
                        Security best practices and compliance measures<br />
                        Performance tuning and optimization techniques<br /><br />

                        <strong>Case Studies:</strong><br />
                        Analyzing successful GCP implementations<br />
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
                        Designing GCP architecture for real-world scenarios<br /><br />

                        <strong>Development:</strong><br />
                        Implementing GCP solutions for different project types<br />
                        Integrating advanced GCP features and best practices<br /><br />

                        <strong>Review and Presentation:</strong><br />
                        Peer review and feedback on projects<br />
                        Final project presentation<br />
                        Course wrap-up and next steps<br /><br />
                        This curriculum provides a comprehensive and structured approach to mastering Google Cloud
                        Platform (GCP), covering both foundational and advanced topics, and equipping learners with
                        the skills needed to effectively use GCP for a variety of cloud computing tasks.
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
                        Learning Advanced GCP skills enable you to integrate with Google's ecosystem and cutting-edge technologies, such as AI and big data solutions, enhancing your ability to build and deploy innovative cloud-based applications.
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
                <Box height={'auto'} width={'60%'} sx={{ ml: 2 }}>
                    <Stack direction={'row'} sx={{mt:3}}>
                        <Box height={'50px'} width={'50px'}>
                            <img src={GoogleCloudLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
                        </Box>
                        <Typography variant="h4" sx={{mt:1, ml:1, textTransform:'uppercase'}}>Google Cloud Platform</Typography>
                    </Stack>
                    <Stack width={'auto'} direction={'row'}>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, position: 'relative', overflow: 'hidden' }}>
                            <MenuBookIcon />
                        </Box>
                        <Typography sx={{ mt: 2.5, ml:1 }}>12 Modules</Typography>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, ml: 3, position: 'relative', overflow: 'hidden' }}>
                            <MenuBookIcon />
                        </Box>
                        <Typography sx={{ mt: 2.5, ml:1 }}>28 Hours</Typography>
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
                <Box width={'35%'} height={'auto'}>
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
    );
};

export default GoogleCloudInfo;
