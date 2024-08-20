import React, { useState, useRef, useEffect } from 'react';
import { AppBar, Toolbar, Button, Stack, Box, Typography } from "@mui/material";
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import Stairs7SolutionsLogo from '../images/Stairs7SolutionsIcon.png';
import EnquiryForm from './EnquiryForm';
import Howitworks from './HowItWorks';
import Enrollment from './Enrollment';
import Whychooseus from './Whychooseus';
import Carousel from './Carousel';
import Courses from './Courses';
import Aboutus from './Aboutus';
import Contactus from './Contactus';

const Home = () => {
    const location = useLocation();
    const coursesRef = useRef<HTMLDivElement>(null);
    const aboutusRef = useRef<HTMLDivElement>(null);
    const contactusRef = useRef<HTMLDivElement>(null);

    const [showCourses] = useState(true);
    const [showAboutUs] = useState(true);
    const [showContactUs] = useState(true);
    const [scrollToCourses, setScrollToCourses] = useState(location.pathname === '/courses');
    const [scrollToAboutUs, setScrollToAboutUs] = useState(location.pathname === '/about-us');
    const [scrollToContactUs, setScrollToContactUs] = useState(location.pathname === '/contact-us');

    useEffect(() => {
        if (scrollToCourses && coursesRef.current) {
            coursesRef.current.scrollIntoView({ behavior: 'smooth' });
            setScrollToCourses(false); 
        }
    }, [scrollToCourses]);

    useEffect(() => {
        if (scrollToAboutUs && aboutusRef.current) {
            aboutusRef.current.scrollIntoView({ behavior: 'smooth' });
            setScrollToAboutUs(false); 
        }
    }, [scrollToAboutUs]);

    useEffect(() => {
        if (scrollToContactUs && contactusRef.current) {
            contactusRef.current.scrollIntoView({ behavior: 'smooth' });
            setScrollToContactUs(false); 
        }
    }, [scrollToContactUs]);

    const handleHomeClick = () => {
        if (location.pathname === "/") {
            window.scrollTo(0, 0);
        }
    };

    const handleCoursesClick = () => {
        setScrollToCourses(true);
    };

    const handleAboutUsClick = () => {
        setScrollToAboutUs(true);
    };

    const handleContactUsClick = () => {
        setScrollToContactUs(true);
    };

    return (
        <Box className="Home">
            <Stack>
                <AppBar sx={{ backgroundColor: '#D81B0E', height: '87px' }} position="static" elevation={0}>
                    <Toolbar>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', flexGrow: 1 }}>
                            <Button color="inherit">
                                <img alt='Stairs7Solutions Logo' src={Stairs7SolutionsLogo} height={70}></img>
                                <Typography fontFamily={'Poppins'} fontWeight={'400'} fontSize={'20px'} lineHeight={'30px'}>Stairs7 Solutions</Typography>
                            </Button>
                            <Button color="inherit" sx={{ ml: 40 }} component={Link} to="/" onClick={handleHomeClick}>
                                <Typography fontFamily={'Poppins'} fontWeight={'600'} fontSize={'20px'} lineHeight={'30px'}>home</Typography>
                            </Button>
                            <Button color="inherit" component={Link} to={'/about-us'} sx={{ ml: 3 }}>
                                <Typography fontFamily={'Poppins'} fontWeight={'600'} fontSize={'20px'} lineHeight={'30px'} onClick={handleAboutUsClick}>about us</Typography>
                            </Button>
                            <Button color="inherit" component={Link} to="/courses" sx={{ ml: 3 }} onClick={handleCoursesClick}>
                                <Typography fontFamily={'Poppins'} fontWeight={'600'} fontSize={'20px'} lineHeight={'30px'}>courses</Typography>
                            </Button>
                            <Button color="inherit" component={Link} to={'/contact-us'} sx={{ ml: 3 }} onClick={handleContactUsClick}>
                                <Typography fontFamily={'Poppins'} fontWeight={'600'} fontSize={'20px'} lineHeight={'30px'}>contact us</Typography>
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>

                <Stack sx={{ width: '100%', height: 608 }} direction={'row'} className="CarouselandForm">
                    <Box width={800} height={'auto'}>
                        <Carousel />
                    </Box>
                    <Box width={688} height={'auto'}>
                        <EnquiryForm />
                    </Box>
                </Stack>
                <Stack sx={{ width: '100%', height: 300 }}>
                    <Howitworks />
                </Stack>

                <div ref={coursesRef}>
                    {showCourses && <Courses />}
                </div>

                <Enrollment />

                <Whychooseus />

                <Stack>
                    <div ref={aboutusRef}>
                      {showAboutUs && <Aboutus />}
                    </div>

                    <div ref={contactusRef}>
                      {showContactUs && <Contactus />}   
                    </div> 
                    <Box width={'100%'} height={80} bgcolor={'#D81B0E'}>
                      <Typography width={'250px'} height={'22px'} fontFamily={'Poppins'} fontWeight={'bold'} fontSize={'16px'} lineHeight={'22px'} color={'white'} sx={{mt: 3.5, ml: 75}}>Copy Rights @ All rights reserved</Typography>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Home;
