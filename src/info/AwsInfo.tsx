import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CloudQuickLinks from '../component/CloudQuickLinks';
import AwsLogo from '../images/awsLogo.png';

const AwsInfo = () => {
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
                    <Typography>1. Introduction to AWS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview of AWS:</strong><br />
                        History and evolution of AWS<br />
                        AWS global infrastructure (regions and availability zones)<br />
                        Key benefits and features of using AWS<br /><br />
                        <strong>AWS Core Services Overview:</strong><br />
                        Introduction to compute, storage, database, and networking services<br />
                        Overview of the AWS Management Console and AWS CLI
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. AWS Identity and Access Management (IAM)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>IAM Basics:</strong><br />
                        Understanding IAM roles, users, groups, and policies<br />
                        Managing access with IAM<br /><br />

                        <strong>Advanced IAM Features:</strong><br />
                        Setting up multi-factor authentication (MFA)<br />
                        Cross-account access and federation<br />
                        Best practices for securing IAM
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. Compute Services</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Amazon EC2:</strong><br />
                        Launching and managing EC2 instances<br />
                        EC2 instance types and pricing models<br />
                        Configuring security groups and key pairs<br /><br />

                        <strong>Auto Scaling and Load Balancing:</strong><br />
                        Setting up Auto Scaling groups<br />
                        Configuring Elastic Load Balancers (ELB)<br />
                        Implementing high availability and fault tolerance<br /><br />

                        <strong>AWS Lambda:</strong><br />
                        Introduction to serverless computing with AWS Lambda<br />
                        Creating and managing Lambda functions<br />
                        Integrating Lambda with other AWS services
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Storage Services</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Amazon S3:</strong><br />
                        Understanding S3 buckets and objects<br />
                        Configuring bucket policies and access control lists (ACLs)<br />
                        Implementing versioning, lifecycle policies, and replication<br /><br />

                        <strong>Amazon EBS and EFS:</strong><br />
                        Creating and managing EBS volumes<br />
                        Snapshotting and backing up EBS volumes<br />
                        Using EFS for scalable file storage<br /><br />

                        <strong>Amazon Glacier and S3 Glacier Deep Archive:</strong><br />
                        Configuring long-term archival storage<br />
                        Managing retrieval policies and access
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Database Services</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Amazon RDS:</strong><br />
                        Setting up and managing RDS instances<br />
                        Configuring backups, snapshots, and replication<br />
                        Multi-AZ deployments and read replicas<br /><br />
                        
                        <strong>Amazon DynamoDB:</strong><br />
                        Creating and managing DynamoDB tables<br />
                        Understanding DynamoDB data modeling<br />
                        Configuring DynamoDB Streams and Global Tables<br /><br />

                        <strong>Amazon Redshift:</strong><br />
                        Setting up and managing Redshift clusters<br />
                        Performing data warehousing tasks<br />
                        Optimizing performance and cost
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Networking and Content Delivery</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Amazon VPC:</strong><br />
                        Creating and configuring VPCs<br />
                        Managing subnets, route tables, and gateways<br />
                        Implementing VPC Peering and VPN connections<br /><br />

                        <strong>Elastic Load Balancing (ELB) and Amazon Route 53:</strong><br />
                        Configuring load balancers for high availability<br />
                        Setting up Route 53 for DNS management<br />
                        Implementing health checks and failover<br /><br />

                        <strong>Amazon CloudFront:</strong><br />
                        Setting up and managing CloudFront distributions<br />
                        Configuring content delivery and caching<br />
                        Implementing security features (HTTPS, WAF)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Security, Monitoring, and Management</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>AWS CloudWatch:</strong><br />
                        Setting up CloudWatch monitoring and alerts<br />
                        Creating custom metrics and dashboards<br />
                        Configuring log management and analysis<br /><br />

                        <strong>AWS CloudTrail:</strong><br />
                        Enabling CloudTrail for auditing and compliance<br />
                        Analyzing CloudTrail logs<br />
                        Best practices for log retention and security<br /><br />

                        <strong>AWS Config and Trusted Advisor:</strong><br />
                        Setting up AWS Config for resource configuration tracking<br />
                        Using Trusted Advisor for best practices and recommendations
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. Application Services and DevOps</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>AWS Elastic Beanstalk:</strong><br />
                        Deploying applications with Elastic Beanstalk<br />
                        Managing application environments and configurations<br />
                        Integrating with other AWS services<br /><br />

                        <strong>AWS CodePipeline and CodeBuild:</strong><br />
                        Setting up CI/CD pipelines with CodePipeline<br />
                        Building and testing code with CodeBuild<br />
                        Integrating with third-party tools (GitHub, Jenkins)<br /><br />

                        <strong>AWS CloudFormation:</strong><br />
                        Creating and managing infrastructure as code with CloudFormation<br />
                        Writing and deploying CloudFormation templates<br />
                        Using AWS CloudFormation Designer
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9. Machine Learning and Analytics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Amazon SageMaker:</strong><br />
                        Setting up and using SageMaker for machine learning<br />
                        Building, training, and deploying ML models<br />
                        Integrating SageMaker with other AWS services<br /><br />

                        <strong>AWS Glue and Amazon Athena:</strong><br />
                        Configuring AWS Glue for ETL processes<br />
                        Querying data with Amazon Athena<br />
                        Using Glue Data Catalog for data management<br /><br />

                        <strong>Amazon Kinesis:</strong><br />
                        Setting up Kinesis Data Streams and Firehose<br />
                        Processing real-time data with Kinesis Analytics<br />
                        Integrating with other AWS services
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel10'} onChange={handleAccordionChange('panel10')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>10. Real-World Implementations and Best Practices</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Case Studies:</strong><br />
                        Analyzing successful AWS implementations<br />
                        Lessons learned and best practices from industry leaders<br /><br />

                        <strong>Best Practices:</strong><br />
                        Cost optimization strategies<br />
                        Security best practices and compliance<br />
                        Performance tuning and optimization
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel11'} onChange={handleAccordionChange('panel11')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>11. Hands-On Projects</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Project Planning:</strong><br />
                        Defining project requirements and objectives<br />
                        Designing AWS architecture for real-world scenarios<br /><br />

                        <strong>Development:</strong><br />
                        Implementing AWS solutions for different project types<br />
                        Integrating advanced AWS features and best practices<br /><br />

                        <strong>Review and Presentation:</strong><br />
                        Peer review and feedback on projects<br />
                        Final project presentation<br />
                        Course wrap-up and next steps<br /><br />
                        This curriculum provides a comprehensive and structured approach to mastering AWS, covering
                        both foundational and advanced topics, and equipping learners with the skills needed to
                        effectively use AWS for a variety of cloud computing tasks.
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
                       Amazon Web Services (AWS) is a cloud computing platform offered by Amazon.<br /> 
                       It provides a wide range of on-demand services like computing power, storage, and databases, allowing businesses to scale and manage their IT resources efficiently.<br />
                       AWS offers services such as EC2 for virtual servers, S3 for scalable storage, RDS for managed databases, and Lambda for serverless computing.<br />
                       By using AWS, companies can reduce infrastructure costs, improve flexibility, and deploy applications globally with ease.
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
                    <Box height={'50px'} width={'50px'}><img src={AwsLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/></Box>
                    <Typography variant="h4" sx={{mt:1, ml:1, textTransform:'uppercase'}}>AWS</Typography>
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
                    <CloudQuickLinks />
                </Box>
            </Box>
            </Stack>
        </Stack>
    )
}

export default AwsInfo;
