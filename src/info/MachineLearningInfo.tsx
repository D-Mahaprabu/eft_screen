import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MachineLearningLogo from '../images/machineLearning.png';
import ExclusiveCoursesQuickLinks from '../component/ExclusiveCoursesQuickLinks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MachineLearningInfo = () => {
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
                    <Typography>1. Introduction to Machine Learning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Overview of Machine Learning:</strong><br />
                        Definition and scope of machine learning<br />
                        History and evolution of machine learning<br />
                        Differences between AI, machine learning, and deep learning<br /><br />

                        <strong>Applications of Machine Learning:</strong><br />
                        Real-world applications: recommendation systems, image recognition, NLP, etc.<br />
                        Future trends in machine learning
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2. Fundamental Concepts</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Core Machine Learning Concepts:</strong><br />
                        Supervised vs. unsupervised learning<br />
                        Basic terminology: features, labels, models, training, testing<br />
                        Overfitting vs. underfitting<br /><br />

                        <strong>Types of Machine Learning Algorithms:</strong><br />
                        Classification vs. regression<br />
                        Clustering and dimensionality reduction
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3. Data Preparation and Preprocessing</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Data Collection:</strong><br />
                        Sources of data<br />
                        Data cleaning: handling missing values, outliers, and noise<br /><br />

                        <strong>Feature Engineering:</strong><br />
                        Feature extraction and selection<br />
                        Normalization and standardization<br /><br />

                        <strong>Splitting Data:</strong><br />
                        Training, validation, and test sets<br />
                        Cross-validation techniques
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4. Basic Machine Learning Algorithms</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Supervised Learning Algorithms:</strong><br />
                        Linear Regression<br />
                        Logistic Regression<br />
                        Decision Trees<br />
                        K-Nearest Neighbors (KNN)<br />
                        Support Vector Machines (SVM)<br /><br />

                        <strong>Unsupervised Learning Algorithms:</strong><br />
                        K-Means Clustering<br />
                        Principal Component Analysis (PCA)<br />
                        Association rules (e.g., Apriori algorithm)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5. Model Evaluation and Metrics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Evaluation Metrics for Classification:</strong><br />
                        Accuracy, precision, recall, F1 score<br />
                        Confusion matrix<br /><br />

                        <strong>Evaluation Metrics for Regression:</strong><br />
                        Mean Absolute Error (MAE)<br />
                        Mean Squared Error (MSE)<br />
                        R-squared<br /><br />

                        <strong>Cross-Validation:</strong><br />
                        k-Fold cross-validation<br />
                        Leave-one-out cross-validation (LOOCV)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6. Basic Programming for Machine Learning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Python for Machine Learning:</strong><br />
                        Introduction to Python programming<br />
                        Essential libraries: NumPy, Pandas, Matplotlib, Scikit-Learn<br /><br />

                        <strong>Data Visualization:</strong><br />
                        Basic plotting with Matplotlib and Seaborn<br />
                        Visualizing data distributions and relationships
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7. Introduction to Neural Networks and Deep Learning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Basic Concepts:</strong><br />
                        Neurons and activation functions<br />
                        Introduction to neural networks and deep learning<br /><br />

                        <strong>Deep Learning Frameworks:</strong><br />
                        Overview of TensorFlow and Keras<br />
                        Building simple neural network models
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8. Practical Machine Learning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Hands-on Projects:</strong><br />
                        Building and evaluating machine learning models<br />
                        Implementing algorithms from scratch and using Scikit-Learn<br /><br />

                        <strong>Mini-Projects:</strong><br />
                        Predicting house prices with linear regression<br />
                        Classifying images with decision trees or KNN<br /><br />

                        <strong>Practical Exercises:</strong><br />
                        Implementing basic algorithms using Scikit-Learn<br />
                        Data preprocessing and feature engineering exercises<br /><br />
                        This basic machine learning curriculum provides a strong foundation in core concepts and
                        practical skills, enabling developers to progress to more advanced topics and projects.
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
                       Machine learning (ML) is a type of Artificial Intelligence (AI) that allows computers to learn without being explicitly programmed.<br/>
                       It involves feeding data into algorithms that can then identify patterns and make predictions on new data.<br/> 
                       Machine learning is used in a wide variety of applications, including image and speech recognition, natural language processing, and recommender systems.
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
                            <img src={MachineLearningLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Box>
                        <Typography variant="h4" sx={{ mt: 1, ml: 1, textTransform: 'uppercase' }}>Machine Learning</Typography>
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
                        <ExclusiveCoursesQuickLinks />
                    </Box>
                </Box>
            </Stack>
        </Stack>
    );
};

export default MachineLearningInfo;
