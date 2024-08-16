import React, { useState } from 'react';
import { Stack, Typography, Box, Paper, Tab, Tabs, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AppBarComponent from '../component/Appbarcomponent';
import laptopimg from '../images/laptop.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import JavaLogo from '../images/javaLogo.png';
import BackendQuickLinks from '../component/BackendQuickLinks';

const JavaInfo = () => {
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
                    <Typography>1: Introduction to Java</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Java Overview:</strong><br/>
                        History and evolution of Java<br/>
                        Key features and benefits of Java<br/>
                        Java Development Kit (JDK), Java Runtime Environment (JRE), and Java Virtual Machine (JVM)<br/><br/>

                        <strong>Getting Started with Java:</strong><br/>
                        Setting up the Java development environment<br/>
                        Overview of Integrated Development Environments (IDEs) like IntelliJ IDEA, Eclipse, and NetBeans<br/>
                        Writing, compiling, and running Java programs
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>2: Java Basics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Basic Syntax:</strong><br/>
                        Java syntax and structure<br/>
                        Data types, variables, and operators<br/>
                        Control flow statements (if-else, switch, loops)<br/><br/>

                        <strong>Object-Oriented Programming (OOP) Concepts:</strong><br/>
                        Classes and objects<br/>
                        Methods and constructors<br/>
                        Inheritance, polymorphism, encapsulation, and abstraction
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>3: Advanced Java Concepts</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Collections Framework:</strong><br/>
                        Overview of Java Collections Framework<br/>
                        List, Set, Map, and Queue interfaces and their implementations<br/>
                        Iterators and stream API<br/><br/>

                        <strong>Generics:</strong><br/>
                        Introduction to generics in Java<br/>
                        Creating generic classes and methods<br/>
                        Bounded type parameters and wildcards
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>4: Exception Handling</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Basics of Exception Handling:</strong><br/>
                        Types of exceptions: checked and unchecked<br/>
                        try-catch block, finally block, and throws keyword<br/><br/>

                        <strong>Advanced Exception Handling:</strong><br/>
                        Creating custom exceptions<br/>
                        Exception chaining<br/>
                        Best practices for exception handling
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>5: Java I/O</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Java I/O Basics:</strong><br/>
                        Streams and readers/writers<br/>
                        File I/O operations<br/><br/>

                        <strong>Advanced I/O:</strong><br/>
                        Serialization and deserialization<br/>
                        Buffered streams and memory-mapped files<br/>
                        Working with NIO (New Input/Output) package
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>6: Multithreading and Concurrency</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Basics of Multithreading:</strong><br/>
                        Creating and managing threads<br/>
                        Synchronization and inter-thread communication<br/><br/>

                        <strong>Advanced Concurrency:</strong><br/>
                        Java Concurrency API (java.util.concurrent package)<br/>
                        Executor framework, Callable, and Future<br/>
                        Locks, Semaphores, and ThreadLocal
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleAccordionChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>7: Java Networking</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Networking Basics:</strong><br/>
                        Introduction to Java networking<br/>
                        Working with sockets (TCP and UDP)<br/><br/>

                        <strong>Advanced Networking:</strong><br/>
                        Building client-server applications<br/>
                        Java NIO for non-blocking I/O operations
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleAccordionChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>8: Java Database Connectivity (JDBC)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Introduction to JDBC:</strong><br/>
                        Overview of JDBC architecture<br/>
                        Connecting to a database<br/><br/>

                        <strong>Advanced JDBC:</strong><br/>
                        Executing SQL queries and updates<br/>
                        Transaction management<br/>
                        Using connection pooling
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleAccordionChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>9: Java GUI Development</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>JavaFX Basics:</strong><br/>
                        Introduction to JavaFX<br/>
                        Building user interfaces with JavaFX<br/><br/>

                        <strong>Advanced JavaFX:</strong><br/>
                        Event handling and property binding<br/>
                        Using FXML and Scene Builder<br/>
                        JavaFX CSS for styling
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel10'} onChange={handleAccordionChange('panel10')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>10: Java Web Development</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Servlets and JSP:</strong><br/>
                        Introduction to Servlets and JavaServer Pages (JSP)<br/>
                        Building and deploying web applications with Servlets and JSP<br/><br/>

                        <strong>Spring Framework:</strong><br/>
                        Overview of the Spring framework<br/>
                        Dependency injection and aspect-oriented programming (AOP)<br/>
                        Building RESTful web services with Spring Boot
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel11'} onChange={handleAccordionChange('panel11')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>11: Testing and Debugging</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Unit Testing:</strong><br/>
                        Introduction to JUnit framework<br/>
                        Writing and running unit tests<br/><br/>

                        <strong>Debugging:</strong><br/>
                        Debugging techniques and tools<br/>
                        Profiling and performance monitoring
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel12'} onChange={handleAccordionChange('panel12')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>12: Best Practices and Design Patterns</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Java Best Practices:</strong><br/>
                        Code conventions and best practices<br/>
                        Effective use of design patterns (Singleton, Factory, Observer, etc.)<br/>
                        Refactoring techniques<br/><br/>

                        <strong>Case Studies:</strong><br/>
                        Analyzing successful Java projects<br/>
                        Lessons learned and best practices from industry leaders.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel13'} onChange={handleAccordionChange('panel13')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>13: Hands-On Projects</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        <strong>Project Planning:</strong><br/>
                        Defining project requirements and objectives<br/>
                        Designing Java architecture for real-world scenarios<br/><br/>

                        <strong>Development:</strong><br/>
                        Implementing Java solutions for different project types<br/>
                        Integrating advanced Java features and best practices<br/><br/>

                        <strong>Review and Presentation:</strong><br/>
                        Peer review and feedback on projects<br/>
                        Final project presentation<br/>
                        Course wrap-up and next steps<br/><br/>
                        This curriculum provides a comprehensive and structured approach to mastering Java, covering
                        both foundational and advanced topics, and equipping learners with the skills needed to
                        effectively use Java for a variety of software development tasks.
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
                        <strong>Java</strong> is a widely-used, high-level, object-oriented programming language developed by Sun Microsystems, now owned by Oracle.<br /><br />
                        <strong>Platform Independence</strong>: Java is designed to be platform-independent, meaning code written in Java can run on any device with a Java Virtual Machine (JVM).<br /><br />
                        <strong>JVM</strong>: The Java Virtual Machine executes Java bytecode, providing an abstraction layer between the compiled code and the underlying hardware.<br /><br />
                        <strong>Bytecode</strong>: Java source code is compiled into bytecode, which is then interpreted or compiled into native code by the JVM.<br /><br />
                        <strong>Object-Oriented</strong>: Java is an object-oriented language, focusing on concepts like inheritance, encapsulation, polymorphism, and abstraction.<br /><br />
                        <strong>Syntax</strong>: Java’s syntax is similar to C++, making it relatively easy to learn for developers familiar with C-based languages.<br /><br />
                        <strong>Standard Libraries</strong>: Java includes a comprehensive set of standard libraries, known as the Java Standard Edition (SE) API, for various programming tasks.<br /><br />
                        <strong>Concurrency</strong>: Java provides built-in support for multithreading and concurrency, allowing efficient execution of multiple threads simultaneously.<br /><br />
                        <strong>Garbage Collection</strong>: Java has automatic garbage collection, which helps manage memory by automatically reclaiming unused resources.<br /><br />
                        <strong>Java Development Kit (JDK)</strong>: The JDK includes the Java Runtime Environment (JRE), compiler, and tools for developing Java applications.<br /><br />
                        <strong>Java Enterprise Edition (EE)</strong>: Java EE extends the Java SE with additional libraries and APIs for enterprise applications, including servlets and JSP.<br /><br />
                        <strong>JavaFX</strong>: A set of graphics and media packages used for building rich client applications with a modern user interface.<br /><br />
                        <strong>Annotations</strong>: Java supports annotations, which are metadata added to code to provide information to the compiler and runtime environments.<br /><br />
                        <strong>Exception Handling</strong>: Java provides a robust exception handling mechanism to manage runtime errors and maintain normal program flow.<br /><br />
                        <strong>Development Tools</strong>: Java developers use integrated development environments (IDEs) like Eclipse, IntelliJ IDEA, and NetBeans for coding and debugging.<br /><br />
                        <strong>Frameworks</strong>: Popular Java frameworks include Spring, Hibernate, and Apache Struts, which simplify development and improve productivity.<br /><br />
                        <strong>Cross-Platform Compatibility</strong>: Java applications can run on various operating systems, including Windows, macOS, and Linux, without modification.<br /><br />
                        <strong>Java Community</strong>: Java has a large and active community, offering extensive resources, libraries, and support through forums and user groups.<br /><br />
                        <strong>Security</strong>: Java includes a range of built-in security features, including a security manager, bytecode verification, and sandboxing.<br /><br />
                        <strong>Backward Compatibility</strong>: Java maintains backward compatibility, allowing newer versions of the language to run applications written in older versions.
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
                <Box height={'auto'} width={'60%'} sx={{ ml: 2 }} >
                    <Stack direction={'row'} sx={{ mt: 3 }}>
                        <Box height={'50px'} width={'50px'}>
                            <img src={JavaLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Box>
                        <Typography variant="h4" sx={{ mt: 1, ml: 1, textTransform: 'uppercase' }}>Java</Typography>
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
                <Box width={'35%'} height={'auto'} >
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
                        <BackendQuickLinks />
                    </Box>
                </Box>
            </Stack>
        </Stack>
    );
};

export default JavaInfo;
