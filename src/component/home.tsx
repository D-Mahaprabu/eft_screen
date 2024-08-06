import React, { useState, useRef, useEffect } from 'react';
import { AppBar, Toolbar, Button, Stack, Box, Typography, Divider, Card, CardContent, CardMedia, IconButton } from "@mui/material";
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import Stairs7SolutionsLogo from '../images/Stairs7SolutionsIcon.png';
import EnquiryForm from './EnquiryForm';
import Courses from './courses';
import LaptopImage from '../images/laptopImage.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProfileLogo from '../images/profileLogo.png';
import ProfileImage from '../images/profileImage.png';
import StarIcon from '@mui/icons-material/Star';

const Home = () => {
    const [showCourses, setShowCourses] = useState(false);
    const [scrollToCourses, setScrollToCourses] = useState(false);
    const location = useLocation();
    const coursesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollToCourses && coursesRef.current) {
            coursesRef.current.scrollIntoView({ behavior: 'smooth' });
            setScrollToCourses(false); // Reset the flag after scrolling
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
        setScrollToCourses(true); // Set flag to trigger scrolling
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
                    <Box width="100%" height={350}>
                        <Typography variant="h4" gutterBottom color={'red'} sx={{ mt: 4, ml: 4 }}>
                            How It Works
                        </Typography>
                        <Typography variant="h3" gutterBottom color={'black'} sx={{ ml: 4 }}>
                            Your Online Learning Journey Made Easy
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
                            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mx: 2 }}>
                                    <Box sx={{
                                        width: 40, height: 40,
                                        display: 'flex', alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '50%',
                                        backgroundColor: 'red',
                                        color: 'white',
                                        mx: 1,
                                        ml: 20,
                                        mt: -14
                                    }}>
                                        01
                                    </Box>
                                    <Divider orientation="horizontal" sx={{ flexGrow: 1, borderColor: 'gray', borderBottomWidth: 1 }} />
                                    <Typography variant="h5" gutterBottom color={'black'} sx={{ mt: 1, ml: -6.5 }} style={{ fontWeight: 'bold' }}>
                                        Choose Your Course
                                    </Typography>
                                    <Typography variant="caption" gutterBottom color={'gray'} sx={{ mt: 8, ml: -27 }}>
                                        Choose Your Course
                                    </Typography>
                                    <Typography variant="caption" gutterBottom color={'gray'} sx={{ mt: 13, ml: -14.5 }}>
                                        Choose Your Course
                                    </Typography>
                                    <Box sx={{
                                        width: 40, height: 40,
                                        display: 'flex', alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '50%',
                                        backgroundColor: 'red',
                                        color: 'white',
                                        mx: 1,
                                        ml: 35,
                                        mt: -14
                                    }}>
                                        02
                                    </Box>
                                    <Divider orientation="horizontal" sx={{ flexGrow: 20, borderColor: 'gray', borderBottomWidth: 10 }} />
                                    <Typography variant="h5" gutterBottom color={'black'} sx={{ mt: 1, ml: -6.5 }} style={{ fontWeight: 'bold' }}>
                                        Sign Up and Pay
                                    </Typography>
                                    <Typography variant="caption" gutterBottom color={'gray'} sx={{ mt: 8, ml: -21.5 }}>
                                        Sign Up and Pay
                                    </Typography>
                                    <Typography variant="caption" gutterBottom color={'gray'} sx={{ mt: 13, ml: -11.5 }}>
                                        Sign Up and Pay
                                    </Typography>
                                    <Box sx={{
                                        width: 40, height: 40,
                                        display: 'flex', alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '50%',
                                        backgroundColor: 'red',
                                        color: 'white',
                                        mx: 1,
                                        ml: 35,
                                        mt: -14
                                    }}>
                                        03
                                    </Box>
                                    <Typography variant="h5" gutterBottom color={'black'} sx={{ mt: 1, ml: -6.5 }} style={{ fontWeight: 'bold' }}>
                                        Learn and Engage
                                    </Typography>
                                    <Typography variant="caption" gutterBottom color={'gray'} sx={{ mt: 8, ml: -23.7 }}>
                                        Learn and Engage
                                    </Typography>
                                    <Typography variant="caption" gutterBottom color={'gray'} sx={{ mt: 13, ml: -12.7 }}>
                                        Learn and Engage
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Stack>

                <div ref={coursesRef}>
                    {showCourses && <Courses />}
                </div>
                <Stack sx={{ width: '100%', height: 500 }} bgcolor={'red'}>
                    <Typography variant='h6' color={'white'} sx={{ mt: 7, ml: 5 }}>Enrollment</Typography>
                    <Typography variant='h4' color={'white'} sx={{ mt: 1, ml: 5 }}>Include</Typography>
                    <Typography variant='caption' color={'white'} sx={{ mt: 1, ml: 5 }}>
                        we will give you our best
                    </Typography>
                    <Typography variant='caption' color={'white'} sx={{ ml: 5 }}>
                        we will give you our best
                    </Typography>
                    <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3, ml: 8.7 }} bgcolor={'white'} width={40} height={40}></Box>
                      <Typography variant='body1' color={'white'} sx={{ ml: 15.7, mt: -5.4 }}>Unlimited Access</Typography>
                      <Typography variant='caption' color={'white'} sx={{ ml: 15.7 }}>
                         we can give you creative thoughts
                      </Typography>
                      <Typography variant='caption' color={'white'} sx={{ ml: 15.7, mt: -0.4 }}>
                         we can give you creative thoughts
                      </Typography>
                      <Typography variant='caption' color={'white'} sx={{ ml: 15.7, mt: -0.4 }}>
                         we can give you creative thoughts
                      </Typography>
                    <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 8, ml: 8.7 }} bgcolor={'white'} width={40} height={40}></Box>
                      <Typography variant='body1' color={'white'} sx={{ ml: 15.7, mt: -5.4 }}>Placement Assistence</Typography>
                      <Typography variant='caption' color={'white'} sx={{ ml: 15.7 }}>
                         we can give you placements oppurtunity
                      </Typography>
                      <Typography variant='caption' color={'white'} sx={{ ml: 15.7, mt: -0.4 }}>
                         we can give you placements oppurtunity
                      </Typography>
                      <Typography variant='caption' color={'white'} sx={{ ml: 15.7, mt: -0.4 }}>
                         we can give you placements oppurtunity
                      </Typography>
                    <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center', mt: -26.5, ml: 65 }} bgcolor={'white'} width={40} height={40}></Box>
                      <Typography variant='body1' color={'white'} sx={{ ml: 72, mt: -5.4 }}>Expert Teachers</Typography>
                      <Typography variant='caption' color={'white'} sx={{ ml: 72 }}>
                         we can give you future advices
                      </Typography>
                      <Typography variant='caption' color={'white'} sx={{ ml: 72, mt: -0.4 }}>
                         we can give you future advices
                      </Typography>
                      <Typography variant='caption' color={'white'} sx={{ ml: 72, mt: -0.4 }}>
                         we can give you future advices
                      </Typography>
                    <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 8, ml: 65 }} bgcolor={'white'} width={40} height={40}></Box>
                      <Typography variant='body1' color={'white'} sx={{ ml: 72, mt: -5.4 }}>Cost Effective</Typography>
                      <Typography variant='caption' color={'white'} sx={{ ml: 72 }}>
                         we can give you effective way to learn 
                      </Typography>
                      <Typography variant='caption' color={'white'} sx={{ ml: 72, mt: -0.4 }}>
                         we can give you effective way to learn 
                      </Typography>
                      <Typography variant='caption' color={'white'} sx={{ ml: 72, mt: -0.4 }}>
                         we can give you effective way to learn 
                      </Typography>
                    <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center', mt: -26.5, ml: 120 }} bgcolor={'white'} width={40} height={40}></Box>
                      <Typography variant='body1' color={'white'} sx={{ ml: 127, mt: -5.4 }}>Personalized Learning</Typography>
                      <Typography variant='caption' color={'white'} sx={{ ml: 127 }}>
                         we can give you perfect training
                      </Typography>
                      <Typography variant='caption' color={'white'} sx={{ ml: 127, mt: -0.4 }}>
                         we can give you perfect training
                      </Typography>
                      <Typography variant='caption' color={'white'} sx={{ ml: 127, mt: -0.4 }}>
                         we can give you perfect training
                      </Typography>
                    <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 8, ml: 120 }} bgcolor={'white'} width={40} height={40}></Box>
                      <Typography variant='body1' color={'white'} sx={{ ml: 127, mt: -5.4 }}>Continuous Support</Typography>
                      <Typography variant='caption' color={'white'} sx={{ ml: 127 }}>
                         we can give you more support
                      </Typography>
                      <Typography variant='caption' color={'white'} sx={{ ml: 127, mt: -0.4 }}>
                         we can give you more support
                      </Typography>
                      <Typography variant='caption' color={'white'} sx={{ ml: 127, mt: -0.4 }}>
                         we can give you more support
                      </Typography>
                </Stack>
                <Stack sx={{ width: '100%', height: 1180 }} bgcolor={'white'}>
                    <Card sx={{ width: 380, height: 400, mx: 'auto', mt: 15, mr: 122, borderRadius: 2 }}>
                    <CardMedia
                            component="img"
                            width="380"
                            height="400"
                            image={LaptopImage}
                            alt={'laptop image'}
                        />
                    </Card>
                    <Card sx={{ width: 380, height: 90, mx: 'auto', mt:2, mr: 122, borderRadius: 2, bgcolor: '#F5F4F0' }}>
                      <CardContent>
                        <Box sx={{ width: 40, height: 40, borderRadius: '3px', bgcolor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', mt: 0.5, fontSize: 30 }}>
                            ★
                        </Box>
                            <Typography variant="body2" sx={{mt: -5, ml: 6}}>
                                This course will help you gain the skills needed to excel in your field.
                            </Typography>
                      </CardContent>
                    </Card>
                    <Typography variant="h6" sx={{mt: -64, ml: 70}} color={'red'}>
                         Why Choose Us
                    </Typography>
                    <Typography variant="h3" sx={{mt: 1, ml: 70}} color={'black'}>
                         Your Learning Journey,
                    </Typography>
                    <Typography variant="h3" sx={{ ml: 70}} color={'black'}>
                         Your Way
                    </Typography>
                    <Typography variant="caption" sx={{mt: 1.5, ml: 70}} color={'black'}>
                         This course will help you gain the skills needed to excel in your field.
                    </Typography>
                    <Typography variant="caption" sx={{ ml: 70}} color={'black'}>
                         This course will help you gain the skills needed to excel in your field.
                    </Typography>
                    <Typography variant="caption" sx={{ ml: 70}} color={'black'}>
                         This course will help you for your future career.
                    </Typography>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: 'red', color: 'white', mt: 4, ml: 70, position: 'relative', overflow: 'hidden' }}>
                        <MenuBookIcon />
                    </Box>
                    <Typography variant="body1" sx={{ mt: -3.7, ml: 76 }} color={'black'} style={{ fontWeight: 'bold' }}>
                         High-Quality Content Course
                    </Typography>
                    <Typography variant="caption" sx={{ mt: 0.5, ml: 76 }} color={'black'}>
                         This course will help you for your future career.
                    </Typography>
                    <Typography variant="caption" sx={{ ml: 76 }} color={'black'}>
                         This course will help you for your future career.
                    </Typography>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: 'red', color: 'white', mt: 2, ml: 70, position: 'relative', overflow: 'hidden' }}>
                        <MenuBookIcon />
                    </Box>
                    <Typography variant="body1" sx={{ mt: -3.7, ml: 76 }} color={'black'} style={{ fontWeight: 'bold' }}>
                         Interactive Learning Experience
                    </Typography>
                    <Typography variant="caption" sx={{ mt: 0.5, ml: 76 }} color={'black'}>
                         This course will help you for your future career.
                    </Typography>
                    <Typography variant="caption" sx={{ ml: 76 }} color={'black'}>
                         This course will help you for your future career.
                    </Typography>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: 'red', color: 'white', mt: 2, ml: 70, position: 'relative', overflow: 'hidden' }}>
                        <MenuBookIcon />
                    </Box>
                    <Typography variant="body1" sx={{ mt: -3.7, ml: 76 }} color={'black'} style={{ fontWeight: 'bold' }}>
                         Exceptional Student Support
                    </Typography>
                    <Typography variant="caption" sx={{ mt: 0.5, ml: 76 }} color={'black'}>
                         This course will help you for your future career.
                    </Typography>
                    <Typography variant="caption" sx={{ ml: 76 }} color={'black'}>
                         This course will help you for your future career.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 19, ml: 60 }}>
                      <IconButton>
                        <ArrowBackIcon sx={{ color: 'red', fontSize: 30 }} />
                      </IconButton>
                      <IconButton>
                        <ArrowForwardIcon sx={{ color: 'red', fontSize: 30 }} />
                      </IconButton>
                    </Box>
                    <Typography variant="h4" sx={{ mt: -8, ml: 17.3 }} color={'black'} style={{ fontWeight: 'bold' }}>
                         Transform your life
                    </Typography>
                    <Typography variant="h4" sx={{ mt: 0.5, ml: 17.3 }} color={'black'} style={{ fontWeight: 'bold' }}>
                         through education
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 4, ml: 17.3 }} color={'black'} style={{ fontWeight: 'bold' }}>
                         "Love mathematics because of 
                    </Typography>
                    <Typography variant="body2" sx={{ ml: 17.3 }} color={'black'} style={{ fontWeight: 'bold' }}>
                         Besnik Academy".
                    </Typography>
                    <Typography variant="caption" sx={{ mt: 3, ml: 17.3 }} color={'black'}>
                         This course will help you for your future career.
                    </Typography>
                    <Typography variant="caption" sx={{ ml: 17.3 }} color={'black'}>
                         This course will help you for your future career.
                    </Typography>
                    <Typography variant="caption" sx={{ ml: 17.3 }} color={'black'}>
                         This course will help you for your future career.
                    </Typography>
                    <Typography variant="caption" sx={{ ml: 17.3 }} color={'black'}>
                         This course will help you for your future career.
                    </Typography>
                    <Typography variant="body2" sx={{ mt: -17.9, ml: 87 }} color={'black'} style={{ fontWeight: 'bold' }}>
                         "There is so much to see and do all 
                    </Typography>
                    <Typography variant="body2" sx={{ ml: 87 }} color={'black'} style={{ fontWeight: 'bold' }}>
                         over World".
                    </Typography>
                    <Typography variant="caption" sx={{ mt: 3, ml: 87 }} color={'black'}>
                         This course will help you for your future career.
                    </Typography>
                    <Typography variant="caption" sx={{ ml: 87 }} color={'black'}>
                         This course will help you for your future career.
                    </Typography>
                    <Typography variant="caption" sx={{ ml: 87 }} color={'black'}>
                         This course will help you for your future career.
                    </Typography>
                    <Typography variant="caption" sx={{ ml: 87 }} color={'black'}>
                         This course will help you for your future career.
                    </Typography>
                    <Box sx={{ ml: 16.8, mt: 4, bgcolor: 'white' }}>
                    <img src={ProfileLogo} alt='profile logo' width={45} height={45}>
                    </img>
                    <Typography sx={{ ml: 8, mt: -6.5 }} style={{ fontWeight: 'bold' }}>
                        Wilson Thai
                    </Typography>
                    <Typography variant='body2' sx={{ ml: 8, mt: -0.5, color: 'gray' }}>
                        Cananda
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.3, ml: 8 }}>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarIcon key={index} sx={{ color: 'yellow', fontSize: 12 }} />
                      ))}
                    </Box>
                    </Box>
                    <Box sx={{ ml: 86.5, mt: -6.5, bgcolor: 'white' }}>
                    <img src={ProfileImage} alt='profile image' width={45} height={45}>
                    </img>
                    <Typography sx={{ ml: 8, mt: -6.5 }} style={{ fontWeight: 'bold' }}>
                        Milena Bolmar
                    </Typography>
                    <Typography variant='body2' sx={{ ml: 8, mt: -0.5, color: 'gray' }}>
                        Argentina
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.3, ml: 8 }}>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarIcon key={index} sx={{ color: 'yellow', fontSize: 12 }} />
                      ))}
                    </Box>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Home;
