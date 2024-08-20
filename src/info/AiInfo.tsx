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
                        AI course empowers you to develop advanced machine learning models, solve complex problems with data-driven insights, implement AI solutions in diverse applications, enhance decision-making capabilities, and stay at the forefront of technological innovation.
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
                        <Typography sx={{ mt: 2.5, ml: 1 }}>9 Modules</Typography>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: '#D82C25', color: 'white', mt: 2, ml: 3, position: 'relative', overflow: 'hidden' }}>
                            <MenuBookIcon />
                        </Box>
                        <Typography sx={{ mt: 2.5, ml: 1 }}>23 Hours</Typography>
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
