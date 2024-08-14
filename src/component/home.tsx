import React, { useState, useRef, useEffect } from 'react';
import { AppBar, Toolbar, Button, Stack, Box, Typography } from "@mui/material";
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import Stairs7SolutionsLogo from '../images/Stairs7SolutionsIcon.png';
import EnquiryForm from './EnquiryForm';
import Courses from './courses';
import Howitworks from './HowItWorks';
import Enrollment from './Enrollment';
import Whychooseus from './Whychooseus';
import Carousel from './Carousel';

const Home = () => {
    const location = useLocation();
    const coursesRef = useRef<HTMLDivElement>(null);

    const [showCourses] = useState(true);
    const [scrollToCourses, setScrollToCourses] = useState(location.pathname === '/courses');

    useEffect(() => {
        if (scrollToCourses && coursesRef.current) {
            coursesRef.current.scrollIntoView({ behavior: 'smooth' });
            setScrollToCourses(false); 
        }
    }, [scrollToCourses]);

    const handleHomeClick = () => {
        if (location.pathname === "/") {
            window.scrollTo(0, 0);
        }
    };

    const handleCoursesClick = () => {
        setScrollToCourses(true);
    };

    return (
        <Box className="Home">
            <Stack>
                <AppBar sx={{ backgroundColor: 'red', height: '87px' }} position="static" elevation={0}>
                    <Toolbar>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', flexGrow: 1 }}>
                            <Button color="inherit">
                                <img alt='Stairs7Solutions Logo' src={Stairs7SolutionsLogo} height={70}></img>
                                <Typography fontStyle={'Poppins'} fontWeight={'400'} fontSize={'20px'} lineHeight={'30px'}>Stairs7 Solutions</Typography>
                            </Button>
                            <Button color="inherit" sx={{ ml: 40 }} component={Link} to="/" onClick={handleHomeClick}>
                                <Typography fontStyle={'Poppins'} fontWeight={'600'} fontSize={'20px'} lineHeight={'30px'}>home</Typography>
                            </Button>
                            <Button color="inherit" component={Link} to={'/about-us'} sx={{ ml: 3 }}>
                                <Typography fontStyle={'Poppins'} fontWeight={'600'} fontSize={'20px'} lineHeight={'30px'}>about us</Typography>
                            </Button>
                            <Button color="inherit" component={Link} to="/courses" sx={{ ml: 3 }} onClick={handleCoursesClick}>
                                <Typography fontStyle={'Poppins'} fontWeight={'600'} fontSize={'20px'} lineHeight={'30px'}>courses</Typography>
                            </Button>
                            <Button color="inherit" component={Link} to={'/contact-us'} sx={{ ml: 3 }}>
                                <Typography fontStyle={'Poppins'} fontWeight={'600'} fontSize={'20px'} lineHeight={'30px'}>contact us</Typography>
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>

                <Stack sx={{ width: '100%', height: 680 }} direction={'row'}>
                    <Box width={800} height={610}>
                        <Carousel />
                    </Box>
                    <Box width={688} height={610}>
                        <EnquiryForm />
                    </Box>
                </Stack>
                <Stack sx={{ width: '100%', height: 350 }}>
                    <Howitworks />
                </Stack>

                <div ref={coursesRef}>
                    {showCourses && <Courses />}
                </div>
                <Enrollment />
                <Whychooseus />
            </Stack>
        </Box>
    );
};

export default Home;
