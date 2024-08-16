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
                        <strong>Machine Learning (ML)</strong> is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.<br /><br />
                        <strong>Supervised Learning</strong>: Involves training models on labeled data where the correct output is provided, such as classification and regression tasks.<br /><br />
                        <strong>Unsupervised Learning</strong>: Uses unlabeled data to identify patterns and relationships, including clustering and dimensionality reduction.<br /><br />
                        <strong>Reinforcement Learning</strong>: An ML approach where an agent learns to make decisions by receiving rewards or penalties based on its actions in an environment.<br /><br />
                        <strong>Algorithms</strong>: Utilizes various algorithms like linear regression, decision trees, support vector machines, and neural networks to solve different problems.<br /><br />
                        <strong>Feature Engineering</strong>: The process of selecting, transforming, and creating features from raw data to improve model performance.<br /><br />
                        <strong>Model Training</strong>: Involves using training data to adjust the model's parameters and improve its ability to make accurate predictions.<br /><br />
                        <strong>Overfitting and Underfitting</strong>: Challenges where a model may either memorize the training data too closely (overfitting) or fail to capture important patterns (underfitting).<br /><br />
                        <strong>Cross-Validation</strong>: A technique for evaluating model performance by splitting the data into training and validation sets to ensure generalization.<br /><br />
                        <strong>Hyperparameter Tuning</strong>: The process of adjusting model parameters to optimize performance and achieve the best results on the validation data.<br /><br />
                        <strong>Evaluation Metrics</strong>: Measures such as accuracy, precision, recall, and F1 score used to assess the performance of machine learning models.<br /><br />
                        <strong>Data Preprocessing</strong>: Involves cleaning, normalizing, and transforming data to prepare it for training and improve model accuracy.<br /><br />
                        <strong>Ensemble Methods</strong>: Techniques that combine multiple models, such as bagging and boosting, to enhance predictive performance and robustness.<br /><br />
                        <strong>Deep Learning</strong>: A subset of ML involving neural networks with multiple layers (deep neural networks) to model complex patterns and features.<br /><br />
                        <strong>Model Deployment</strong>: The process of integrating a trained machine learning model into production systems for real-world applications and use.<br /><br />
                        <strong>Scalability</strong>: Ensures that machine learning models and infrastructure can handle large volumes of data and computational demands.<br /><br />
                        <strong>Ethics and Bias</strong>: Addresses concerns related to fairness, transparency, and potential biases in machine learning models and their impact on decision-making.<br /><br />
                        <strong>Continuous Learning</strong>: Involves updating models with new data and retraining to adapt to changing environments and improve performance over time.<br /><br />
                        <strong>Toolkits and Libraries</strong>: Utilizes tools and libraries such as TensorFlow, PyTorch, and scikit-learn for developing and implementing machine learning models.<br /><br />
                        <strong>Applications</strong>: Machine learning is applied in various domains including healthcare, finance, marketing, and autonomous systems to solve complex problems and drive innovation.
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
                        <ExclusiveCoursesQuickLinks />
                    </Box>
                </Box>
            </Stack>
        </Stack>
    );
};

export default MachineLearningInfo;
