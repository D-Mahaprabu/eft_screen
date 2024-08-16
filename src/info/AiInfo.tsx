import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AiLogo from '../images/aiLogos.png';
import ExclusiveCoursesQuickLinks from '../component/ExclusiveCoursesQuickLinks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AiInfo = () => {
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
                    <Typography>1. Introduction to Artificial Intelligence</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview of AI:</strong><br />
                        Definition and scope of AI<br />
                        History and evolution of AI<br />
                        AI vs. Machine Learning vs. Deep Learning<br /><br />
                        
                        <strong>Applications of AI:</strong><br />
                        Real-world applications and use cases<br />
                        Future trends in AI
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. Fundamental Concepts</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Core AI Concepts:</strong><br />
                        Intelligence and rationality<br />
                        Agents and environments<br />
                        Problem-solving and search algorithms
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. Basic Machine Learning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Supervised Learning:</strong><br />
                        Introduction to supervised learning<br />
                        Common algorithms: Linear Regression, Decision Trees, K-Nearest Neighbors<br />
                        Model evaluation: accuracy, precision, recall, F1 score<br /><br />
                        
                        <strong>Unsupervised Learning:</strong><br />
                        Introduction to unsupervised learning<br />
                        Common algorithms: K-Means Clustering, Principal Component Analysis (PCA)<br />
                        Use cases and applications
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Data Preparation and Preprocessing</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Data Collection:</strong><br />
                        Sources of data<br />
                        Data cleaning and preprocessing techniques<br /><br />
                        
                        <strong>Feature Engineering:</strong><br />
                        Feature extraction and selection<br />
                        Normalization and standardization
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Basic Programming for AI</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Python for AI:</strong><br />
                        Introduction to Python<br />
                        Essential libraries: NumPy, Pandas, Scikit-Learn
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Neural Networks and Deep Learning (Introduction)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Basic Concepts:</strong><br />
                        Neurons and activation functions<br />
                        Introduction to neural networks<br /><br />
                        
                        <strong>Deep Learning Frameworks:</strong><br />
                        Overview of TensorFlow and Keras<br />
                        Setting up and running basic neural network models
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Natural Language Processing (NLP) Basics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Introduction to NLP:</strong><br />
                        Text preprocessing techniques<br />
                        Basic NLP tasks: tokenization, stemming, lemmatization
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. AI Tools and Platforms</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Popular AI Tools:</strong><br />
                        Jupyter Notebooks<br />
                        Google Colab<br /><br />
                        
                        <strong>Cloud AI Services:</strong><br />
                        Overview of AI services from AWS, Google Cloud, and Azure
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9. Practical Exercises</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Hands-on Labs:</strong><br />
                        Implementing basic machine learning models<br />
                        Working with neural networks in TensorFlow/Keras<br /><br />
                        This basic AI curriculum is designed to provide a strong foundation in AI concepts, enabling
                        developers to comfortably progress to more advanced topics.
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
                        <strong>Artificial Intelligence (AI)</strong> refers to the simulation of human intelligence in machines designed to perform tasks that typically require human cognition.<br /><br />
                        <strong>Machine Learning</strong>: A subset of AI where algorithms are trained on data to make predictions or decisions without being explicitly programmed.<br /><br />
                        <strong>Deep Learning</strong>: A specialized form of machine learning using neural networks with many layers to model complex patterns in large datasets.<br /><br />
                        <strong>Natural Language Processing (NLP)</strong>: Enables machines to understand, interpret, and generate human language, facilitating tasks like translation and sentiment analysis.<br /><br />
                        <strong>Computer Vision</strong>: Allows machines to interpret and process visual information from the world, such as images and videos, for tasks like object recognition.<br /><br />
                        <strong>Robotics</strong>: Combines AI with robotics to create machines capable of performing tasks autonomously or semi-autonomously in the physical world.<br /><br />
                        <strong>Reinforcement Learning</strong>: An AI approach where agents learn to make decisions by receiving rewards or penalties based on their actions in an environment.<br /><br />
                        <strong>AI Algorithms</strong>: Utilizes various algorithms such as decision trees, support vector machines, and clustering to solve different types of problems.<br /><br />
                        <strong>Data Collection</strong>: AI systems rely on large amounts of data for training and improving their models, making data collection and quality crucial.<br /><br />
                        <strong>Training and Testing</strong>: Involves training AI models on datasets and testing them to evaluate their performance and accuracy before deployment.<br /><br />
                        <strong>Ethics and Bias</strong>: Addresses ethical concerns and potential biases in AI systems to ensure fair and responsible use of technology.<br /><br />
                        <strong>AI Applications</strong>: Includes a wide range of applications such as virtual assistants, recommendation systems, autonomous vehicles, and healthcare diagnostics.<br /><br />
                        <strong>Automation</strong>: AI drives automation by enabling machines to perform repetitive or complex tasks with minimal human intervention.<br /><br />
                        <strong>Predictive Analytics</strong>: Uses AI to analyze historical data and predict future trends or behaviors, aiding in decision-making across various industries.<br /><br />
                        <strong>Personalization</strong>: AI enables personalized experiences by analyzing user data to tailor content, products, or services to individual preferences.<br /><br />
                        <strong>AI Tools and Frameworks</strong>: Utilizes tools and frameworks such as TensorFlow, PyTorch, and scikit-learn for building and deploying AI models.<br /><br />
                        <strong>AI in Cloud Computing</strong>: Leverages cloud platforms to provide scalable and accessible AI services, enabling organizations to utilize AI without extensive infrastructure.<br /><br />
                        <strong>Human-AI Collaboration</strong>: Focuses on creating systems where humans and AI work together to enhance productivity and decision-making.<br /><br />
                        <strong>Continuous Learning</strong>: Involves ongoing improvement of AI models through techniques like transfer learning and online learning to adapt to new data.<br /><br />
                        <strong>Future Trends</strong>: Encompasses emerging trends such as explainable AI, quantum computing, and advanced neural networks, shaping the future of AI technology.
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
                <img src={laptopimg} alt="" height="450px" />
            </Stack>
            <Stack direction="row" justifyContent="space-between">
                <Box height="auto" width="60%" sx={{ ml: 2 }}>
                    <Stack direction="row" sx={{ mt: 3 }}>
                        <Box height="50px" width="50px">
                            <img src={AiLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Box>
                        <Typography variant="h4" sx={{ mt: 1, ml: 1, textTransform: 'uppercase' }}>AI</Typography>
                    </Stack>
                    <Stack width="auto" direction="row">
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
                <Box width="35%" height="auto">
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
                        <ExclusiveCoursesQuickLinks />
                    </Box>
                </Box>
            </Stack>
        </Stack>
    );
};

export default AiInfo;
