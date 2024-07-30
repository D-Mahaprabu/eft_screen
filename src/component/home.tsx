import { AppBar, Toolbar, Button, Stack, Box, Typography, Card, CardContent } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import React, { useState, MouseEvent } from "react";
import { Link, useLocation } from 'react-router-dom';
import '../App.css'; 

const Home = () => {
    const [showCourses, setShowCourses] = useState(false);
    const location = useLocation();

    const handleHomeClick = () => {
        if (location.pathname === '/') {
            window.scrollTo(0, 0);
        }
    };

    const handleCoursesClick = () => {
        setShowCourses(!showCourses);
    };

    const courses = [
        { title: "Fullstack Engineer", path: "/fullstack-engineer" },
        { title: "Cloud", path: "/devops" },
        { title: "AI & ML", path: "/ai-ml" },
        { title: "Data Engineer", path: "/data-engineer" }
    ];

    return (
        <Box className="home" height={732}>
            <Stack>
                <AppBar sx={{backgroundColor:'inherit'}} position="static" elevation={0}>
                    <Toolbar>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', flexGrow: 1 }}>
                            <Button color="inherit" sx={{ mr: 4 }} component={Link} to="/" onClick={handleHomeClick}>
                                <Typography variant="body1">home</Typography>
                            </Button>
                            <Button color="inherit" onClick={handleCoursesClick} endIcon={<ArrowDropDown />} sx={{ mr: 4 }}>
                                <Typography variant="body1">courses</Typography>
                            </Button>
                            <Button color="inherit" sx={{ mr: 4 }}>
                                <Typography variant="body1">contact us</Typography>
                            </Button>
                            <Button color="inherit" sx={{ mr: 4 }}>
                                <Typography variant="body1">about us</Typography>
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
                {showCourses && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        {courses.map(course => (
                            <Card sx={{ minWidth: 200, m: 2, backgroundColor: 'inherit', height: 150}} key={course.title}>
                                <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <Typography fontFamily={"Roboto"} color={'white'} variant="h6" component={Link} to={course.path} onClick={() => setShowCourses(false)}>
                                        {course.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                )}
            </Stack>
        </Box>
    );
};

export default Home;
