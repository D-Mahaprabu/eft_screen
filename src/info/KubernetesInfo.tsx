import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import KubernetesLogo from '../images/kubernetsLogo.svg';
import DeploymentQuickLinks from '../component/DeploymentQuickLinks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const KubernetesInfo = () => {
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
                    <Typography>1. Introduction to Kubernetes</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview of Kubernetes:</strong><br />
                        History and evolution of Kubernetes<br />
                        Benefits and features of container orchestration<br />
                        Key Kubernetes concepts: clusters, nodes, pods, deployments, and services<br /><br />
                        
                        <strong>Getting Started with Kubernetes:</strong><br />
                        Installing Minikube and kubectl<br />
                        Overview of Kubernetes architecture (master nodes, worker nodes, etc.)<br />
                        Navigating Kubernetes documentation and community resources
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. Kubernetes Core Concepts</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Pods:</strong><br />
                        Understanding pods and pod lifecycles<br />
                        Creating and managing pods<br />
                        Multi-container pod design patterns (sidecar, adapter, ambassador)<br /><br />

                        <strong>Controllers:</strong><br />
                        Overview of controllers: ReplicaSets, Deployments, StatefulSets, DaemonSets<br />
                        Managing and scaling applications with controllers<br />
                        Understanding and using Job and CronJob resources<br /><br />

                        <strong>Services:</strong><br />
                        Introduction to Kubernetes services<br />
                        Types of services: ClusterIP, NodePort, LoadBalancer, ExternalName<br />
                        Service discovery and networking
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. Kubernetes Networking</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Networking Basics:</strong><br />
                        Understanding Kubernetes networking model<br />
                        Configuring DNS in Kubernetes<br />
                        Managing Ingress resources and controllers<br /><br />

                        <strong>Advanced Networking:</strong><br />
                        Setting up and using network policies<br />
                        Overview of service meshes (e.g., Istio, Linkerd)<br />
                        Using CNI plugins for custom networking solutions
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Kubernetes Storage</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Storage Basics:</strong><br />
                        Understanding Kubernetes storage concepts: Volumes, Persistent Volumes (PV), Persistent Volume Claims (PVC)<br />
                        Configuring storage classes and dynamic provisioning<br /><br />

                        <strong>Advanced Storage:</strong><br />
                        Implementing stateful applications with StatefulSets<br />
                        Using ConfigMaps and Secrets for configuration management<br />
                        Backup and restore strategies for Kubernetes data
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Kubernetes Security</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Security Fundamentals:</strong><br />
                        Best practices for securing Kubernetes clusters<br />
                        Understanding Kubernetes RBAC (Role-Based Access Control)<br /><br />

                        <strong>Advanced Security:</strong><br />
                        Configuring network policies for security<br />
                        Managing secrets and sensitive data<br />
                        Implementing Pod Security Policies (PSP) and Pod Security Standards (PSS)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Monitoring and Logging</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Monitoring Basics:</strong><br />
                        Setting up monitoring with Prometheus and Grafana<br />
                        Using Kubernetes metrics server<br /><br />

                        <strong>Logging:</strong><br />
                        Configuring logging with Fluentd, Elasticsearch, and Kibana (EFK stack)<br />
                        Best practices for log management and analysis
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Kubernetes Configuration Management</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Helm:</strong><br />
                        Introduction to Helm and Helm charts<br />
                        Managing applications with Helm<br />
                        Creating custom Helm charts<br /><br />

                        <strong>Kustomize:</strong><br />
                        Introduction to Kustomize for configuration management<br />
                        Creating and managing overlays with Kustomize
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. Kubernetes for CI/CD</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Integrating Kubernetes with CI/CD Pipelines:</strong><br />
                        Overview of CI/CD concepts and Kubernetes' role in pipelines<br />
                        Using Jenkins, GitLab CI, and GitHub Actions with Kubernetes<br /><br />

                        <strong>Automating Deployments:</strong><br />
                        Setting up automated deployments with ArgoCD<br />
                        Implementing GitOps practices with Flux and ArgoCD
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9. Kubernetes on Cloud Providers</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Managed Kubernetes Services:</strong><br />
                        Overview of managed Kubernetes services (GKE, EKS, AKS)<br />
                        Setting up and managing clusters on cloud providers<br /><br />

                        <strong>Hybrid and Multi-Cloud Kubernetes:</strong><br />
                        Implementing hybrid cloud solutions with Kubernetes<br />
                        Managing multi-cloud Kubernetes environments
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel10'} onChange={handleAccordionChange('panel10')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>10. Kubernetes Performance and Scaling</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Performance Tuning:</strong><br />
                        Best practices for optimizing Kubernetes performance<br />
                        Using Vertical Pod Autoscaler and Horizontal Pod Autoscaler<br />
                        Cluster autoscaling and resource management<br /><br />

                        <strong>Scaling Applications:</strong><br />
                        Implementing scaling strategies for different workloads<br />
                        Managing and monitoring scaled applications
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
                        Cost optimization strategies for Kubernetes<br />
                        Security best practices and compliance measures<br />
                        Performance tuning and optimization techniques<br /><br />

                        <strong>Case Studies:</strong><br />
                        Analyzing successful Kubernetes implementations in various industries<br />
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
                        Designing Kubernetes architecture for real-world scenarios<br /><br />

                        <strong>Development:</strong><br />
                        Implementing Kubernetes solutions for different project types<br />
                        Integrating advanced Kubernetes features and best practices<br /><br />

                        <strong>Review and Presentation:</strong><br />
                        Peer review and feedback on projects<br />
                        Final project presentation<br />
                        Course wrap-up and next steps<br /><br />
                        This curriculum provides a comprehensive and structured approach to mastering Kubernetes,
                        covering both foundational and advanced topics, and equipping learners with the skills needed
                        to effectively use Kubernetes for a variety of container orchestration and DevOps tasks.
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
                        Kubernetes is an open-source Container Management tool that automates container deployment, container scaling, descaling, and container load balancing (also called a container orchestration tool).<br />
                        It is written in Golang and has a vast community because it was first developed by Google and later donated to CNCF (Cloud Native Computing Foundation).<br />
                        Kubernetes can group ‘n’ number of containers into one logical unit for managing and deploying them easily.<br />
                        It works brilliantly with all cloud vendors i.e. public, hybrid, and on-premises.
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
                            <img src={KubernetesLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Box>
                        <Typography variant="h4" sx={{ mt: 1, ml: 1, textTransform: 'uppercase' }}>Kubernetes</Typography>
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
                        <DeploymentQuickLinks />
                    </Box>
                </Box>
            </Stack>
        </Stack>
    );
};

export default KubernetesInfo;
