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

const Home = () => {
    const [showCourses, setShowCourses] = useState(false);
    const [scrollToCourses, setScrollToCourses] = useState(false);
    const location = useLocation();
    const coursesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollToCourses && coursesRef.current) {
            coursesRef.current.scrollIntoView({ behavior: 'smooth' });
            setScrollToCourses(false); 
        }
    }, [scrollToCourses]);

    const handleHomeClick = () => {
        setShowCourses(false);
        if (location.pathname === "/") {
            window.scrollTo(0, 0);
        }
    };

    const handleCoursesClick = () => {
        setShowCourses(true);
        setScrollToCourses(true);
    };

    return (
        <Box className="Home">
            <Stack>
                <AppBar sx={{ backgroundColor: 'red' }} position="static" elevation={0}>
                    <Toolbar>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', flexGrow: 1 }}>
                            <Button sx={{mr: 65}} color="inherit">
                                <img alt='Stairs7Solutions Logo' src={Stairs7SolutionsLogo} height={70}></img>
                                Stairs7 Solutions
                            </Button>
                            <Button color="inherit" sx={{ mr: 7 }} component={Link} to="/" onClick={handleHomeClick}>
                                <Typography variant="body1">home</Typography>
                            </Button>
                            <Button color="inherit" sx={{ mr: 7 }}>
                                <Typography variant="body1">about us</Typography>
                            </Button>
                            <Button color="inherit" onClick={handleCoursesClick} sx={{ mr: 7 }}>
                                <Typography variant="body1">courses</Typography>
                            </Button>
                            <Button color="inherit" sx={{ mr: 20 }}>
                                <Typography variant="body1">contact us</Typography>
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>

                <Stack sx={{ width: '100%', height: 610 }} direction={'row'}>
                    <Box width={800} height={610}>
                        <Typography>Hello</Typography>
                    </Box>
                    <Box width={688} height={610}>
                        <EnquiryForm />
                    </Box>
                </Stack>
                <Stack sx={{ width: '100%', height: 350 }}>
                    <Howitworks></Howitworks>
                </Stack>

                <div ref={coursesRef}>
                    {showCourses && <Courses />}
                </div>
                 <Enrollment></Enrollment>
                 <Whychooseus></Whychooseus>
            </Stack>
        </Box>
    );
};

export default Home;
