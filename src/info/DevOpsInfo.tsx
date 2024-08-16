import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Accordion, AccordionSummary, AccordionDetails, Card, CardContent } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DevOpsLogo from '../images/devopsLogo.png';
import CiCdQuickLinks from '../component/CicdQuickLinks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DevOpsInfo = () => {
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
                    <Typography>1. DevOps Foundations</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Introduction to DevOps:</strong><br />
                        History, culture, and principles of DevOps<br />
                        Understanding the DevOps lifecycle and its significance in modern software development<br />
                        Key concepts: CI/CD, Infrastructure as Code (IaC), automation, monitoring, and collaboration<br /><br />
                        
                        <strong>DevOps Ecosystem:</strong><br />
                        Overview of the DevOps toolchain<br />
                        Key technologies: Git, Docker, Kubernetes, Jenkins, Terraform, Ansible, Prometheus, Grafana, etc.<br />
                        Integrating DevOps practices with Agile and Lean methodologies
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. Version Control and Collaboration</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Advanced Git:</strong><br />
                        Mastering Git commands, branching strategies, and conflict resolution<br />
                        Git workflows: Git Flow, GitHub Flow, GitLab Flow<br />
                        Automating code reviews and pull requests<br /><br />

                        <strong>Collaboration Tools:</strong><br />
                        Integrating Git with CI/CD pipelines<br />
                        Leveraging GitHub, GitLab, and Bitbucket for team collaboration<br />
                        Advanced use of issues, merge requests, and project boards
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. Continuous Integration (CI)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>CI Concepts and Practices:</strong><br />
                        Deep dive into Continuous Integration: principles and benefits<br />
                        Designing CI pipelines for efficiency and reliability<br />
                        Implementing build automation, code quality checks, and test automation<br /><br />

                        <strong>CI Tools:</strong><br />
                        Expert-level configuration of Jenkins, GitLab CI, CircleCI, or Travis CI<br />
                        Advanced pipeline scripting, shared libraries, and reusable templates<br />
                        Integrating static code analysis tools (SonarQube, ESLint, Checkstyle)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Continuous Delivery and Deployment (CD)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>CD Principles:</strong><br />
                        Continuous Delivery vs. Continuous Deployment: when and how to use each<br />
                        Building deployment pipelines: from development to production<br />
                        Deployment strategies: Blue/Green, Canary, Rolling, A/B Testing<br /><br />

                        <strong>Advanced CD Tools:</strong><br />
                        Mastering Jenkins Pipelines, GitLab CD, Spinnaker, or Argo CD<br />
                        Automating deployment to multiple environments (staging, production)<br />
                        Managing release pipelines, rollbacks, and versioning
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Infrastructure as Code (IaC)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>IaC Concepts:</strong><br />
                        Introduction to Infrastructure as Code: benefits and best practices<br />
                        Immutable infrastructure and the importance of idempotency<br />
                        IaC tools overview: Terraform, Ansible, Chef, Puppet<br /><br />

                        <strong>Advanced Terraform:</strong><br />
                        Writing and managing complex Terraform configurations<br />
                        Advanced Terraform modules, workspaces, and state management<br />
                        Integrating Terraform with CI/CD pipelines for automated provisioning<br /><br />

                        <strong>Configuration Management with Ansible:</strong><br />
                        Deep dive into Ansible playbooks, roles, and inventories<br />
                        Managing complex environments and dynamic configurations<br />
                        Integrating Ansible with Jenkins or GitLab for automated configuration management
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Containerization and Orchestration</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Docker Mastery:</strong><br />
                        Advanced Docker concepts: multi-stage builds, networking, storage, and security<br />
                        Building, managing, and deploying Docker images and containers<br />
                        Docker Compose for managing multi-container applications<br /><br />

                        <strong>Kubernetes Deep Dive:</strong><br />
                        Kubernetes architecture, components, and deployment models<br />
                        Advanced Kubernetes features: Helm, Operators, Custom Resource Definitions (CRDs)<br />
                        Managing Kubernetes clusters, namespaces, and deployments at scale<br />
                        Integrating Kubernetes with CI/CD pipelines for automated deployments
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Monitoring, Logging, and Observability</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Monitoring Best Practices:</strong><br />
                        Understanding the pillars of observability: monitoring, logging, and tracing<br />
                        Designing monitoring strategies for microservices and distributed systems<br />
                        Key metrics to monitor: application performance, infrastructure health, and user experience<br /><br />

                        <strong>Advanced Monitoring Tools:</strong><br />
                        Mastering Prometheus for metrics collection and alerting<br />
                        Grafana for building advanced dashboards and visualizations<br />
                        Implementing distributed tracing with Jaeger or Zipkin<br />
                        Centralized logging with ELK Stack (Elasticsearch, Logstash, Kibana) or EFK (Elasticsearch, Fluentd, Kibana)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. Security in DevOps (DevSecOps)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Security Fundamentals:</strong><br />
                        Introduction to DevSecOps: integrating security into the DevOps pipeline<br />
                        Security best practices: shift-left security, automated security testing, and vulnerability management<br />
                        Key tools and technologies: OWASP ZAP, SonarQube, Snyk, Trivy, Clair<br /><br />

                        <strong>Implementing DevSecOps:</strong><br />
                        Automating security scans in CI/CD pipelines<br />
                        Secrets management with HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault<br />
                        Implementing compliance checks and audit trails
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9. Cloud and Hybrid Deployments</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Cloud-Native DevOps:</strong><br />
                        Leveraging cloud services for DevOps: AWS, Azure, GCP<br />
                        Building and deploying cloud-native applications using serverless, containers, and managed services<br />
                        Hybrid cloud deployments: best practices and challenges<br /><br />

                        <strong>Advanced Cloud Automation:</strong><br />
                        Infrastructure as Code with AWS CloudFormation, Azure Resource Manager (ARM), or Google Cloud Deployment Manager<br />
                        Automating multi-cloud deployments with Terraform or Pulumi<br />
                        Managing cloud security and compliance in DevOps pipelines
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel10'} onChange={handleAccordionChange('panel10')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>10. Scaling and High Availability</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Scaling DevOps:</strong><br />
                        Designing for scalability: horizontal vs. vertical scaling<br />
                        High availability (HA) strategies for critical applications<br />
                        Implementing load balancing, auto-scaling, and failover mechanisms<br /><br />

                        <strong>Performance Optimization:</strong><br />
                        Monitoring and optimizing CI/CD pipelines for performance<br />
                        Implementing caching strategies: Docker layer caching, CI pipeline caching<br />
                        Optimizing build times and reducing deployment latency
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel11'} onChange={handleAccordionChange('panel11')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>11. Advanced DevOps Automation and Scripting</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Scripting for Automation:</strong><br />
                        Advanced Bash, Python, or Groovy scripting for automating DevOps tasks<br />
                        Writing reusable scripts and automating repetitive tasks in CI/CD pipelines<br />
                        Integrating scripts with Jenkins, GitLab CI, or other CI/CD tools<br /><br />

                        <strong>Automation Tools:</strong><br />
                        Advanced usage of automation tools like Jenkinsfile, GitLab CI YAML, or Ansible playbooks<br />
                        Creating self-healing systems using automated monitoring and response scripts<br />
                        Automating infrastructure provisioning and management with Terraform, Packer, and cloud provider APIs
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
                        <strong>DevOps</strong> is a set of practices and cultural philosophies that aim to improve collaboration between development and operations teams.<br /><br />
                        <strong>Continuous Integration (CI):</strong> involves frequently integrating code changes into a shared repository, followed by automated testing.<br /><br />
                        <strong>Continuous Delivery (CD):</strong> automates the deployment process, ensuring code changes can be reliably and quickly released to production.<br /><br />
                        <strong>Infrastructure as Code (IaC):</strong> manages and provisions infrastructure through code, using tools like Terraform, Ansible, or AWS CloudFormation.<br /><br />
                        <strong>Configuration Management:</strong> involves automating the configuration of systems and applications, ensuring consistency and reducing manual errors.<br /><br />
                        <strong>Monitoring and Logging:</strong> provide visibility into system performance and application behavior, helping to detect and troubleshoot issues.<br /><br />
                        <strong>Automation:</strong> is central to DevOps, encompassing build, test, deployment, and operations processes to increase efficiency and reduce manual work.<br /><br />
                        <strong>Collaboration:</strong> emphasizes communication and cooperation between development, operations, and other stakeholders.<br /><br />
                        <strong>Version Control:</strong> systems like Git are used to track and manage changes to code and configuration files.<br /><br />
                        <strong>Continuous Testing:</strong> integrates automated testing into the CI/CD pipeline, ensuring that code is thoroughly tested before deployment.<br /><br />
                        <strong>Feature Flags:</strong> allow teams to deploy code with features turned off, enabling incremental releases and controlled experimentation without affecting the entire system.<br /><br />
                        <strong>Containers:</strong> package applications and their dependencies into portable units, using technologies like Docker and Kubernetes for orchestration.<br /><br />
                        <strong>Metrics and KPIs:</strong> are used to measure and evaluate the effectiveness of DevOps practices, including deployment frequency, lead time, change failure rate, and mean time to recovery (MTTR).<br /><br />
                        <strong>Feedback Loops:</strong> enable continuous improvement by incorporating feedback from monitoring, testing, and user experiences.<br /><br />
                        <strong>Security:</strong> practices, often referred to as DevSecOps, integrate security measures into the development and deployment processes.<br /><br />
                        <strong>Release Management:</strong> involves planning, scheduling, and controlling the deployment of software to production environments.<br /><br />
                        <strong>Incident Management:</strong> processes help respond to and resolve issues quickly, minimizing downtime and impact on users.<br /><br />
                        <strong>Change Management:</strong> ensures that changes to systems are made in a controlled and predictable manner.<br /><br />
                        <strong>Performance Optimization:</strong> focuses on improving the efficiency and speed of applications and infrastructure.<br /><br />
                        <strong>Cultural Change:</strong> is a critical aspect of DevOps, fostering a culture of collaboration, experimentation, and continuous learning.
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

    return (<Stack>
            <AppBarComponent></AppBarComponent>
            <Stack>
                <img src={laptopimg} alt=""  height={'450px'}/>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
            <Box height={'auto'} width={'60%'} sx={{ ml: 2 }} >
                <Stack direction={'row'} sx={{mt:3}}>
                    <Box height={'50px'} width={'50px'}><img src={DevOpsLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/></Box>
                    <Typography variant="h4" sx={{mt:1, ml:1, textTransform:'uppercase'}}>devops</Typography>
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
                    <CiCdQuickLinks></CiCdQuickLinks>
                </Box>
            </Box>
            </Stack>
        </Stack>
    )
}

export default DevOpsInfo;
