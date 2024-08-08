import { AppBar, Toolbar, Button, Stack, Box, Typography} from "@mui/material";
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Stairs7SolutionsLogo from '../images/Stairs7SolutionsIcon.png';

const AppBarComponent = () => {

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
        <Stack>
    <AppBar sx={{ backgroundColor: 'red', width:'100%' }} position="static" elevation={0}>
                    <Toolbar>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', flexGrow: 1 }}>
                            <Button sx={{mr: 65}} color="inherit">
                                <img alt='Stairs7Solutions Logo' src={Stairs7SolutionsLogo} height={70}></img>
                                Stairs7 Solutions
                            </Button>
                            <Button color="inherit" sx={{ml:20}} component={Link} to="/" onClick={handleHomeClick}>
                                <Typography variant="body1">home</Typography>
                            </Button>
                            <Button color="inherit" sx={{ml: 3}}>
                                <Typography variant="body1">about us</Typography>
                            </Button>
                            <Button color="inherit" onClick={handleCoursesClick} sx={{ml: 3}}>
                                <Typography variant="body1">courses</Typography>
                            </Button>
                            <Button color="inherit" sx={{ml: 3}}>
                                <Typography variant="body1">contact us</Typography>
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
        </Stack>
    )
}

export default AppBarComponent;