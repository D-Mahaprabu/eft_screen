import { AppBar, Toolbar, Button, Stack, Box, Typography} from "@mui/material";
import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Stairs7SolutionsLogo from '../images/Stairs7SolutionsIcon.png';

const AppBarComponent = () => {

    return (
        <Stack>
    <AppBar sx={{ backgroundColor: '#D81B0E', width:'100%' }} position="static" elevation={0}>
                    <Toolbar>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', flexGrow: 1 }}>
                            <Button  color="inherit">
                                <img alt='Stairs7Solutions Logo' src={Stairs7SolutionsLogo} height={70}></img>
                               <Typography fontStyle={'Poppins'} fontWeight={'400'} fontSize={'20px'} lineHeight={'30px'}>Stairs7 Solutions</Typography> 
                            </Button>
                            <Button color="inherit" sx={{ml:20}} component={Link} to="/">
                                <Typography fontStyle={'Poppins'} fontWeight={'500'} fontSize={'20px'} lineHeight={'30px'}>home</Typography>
                            </Button>
                            <Button color="inherit" sx={{ml: 3}}>
                                <Typography fontStyle={'Poppins'} fontWeight={'400'} fontSize={'20px'} lineHeight={'30px'}>about us</Typography>
                            </Button>
                            <Button color="inherit"  component={Link} to="/courses" sx={{ml: 3}}>
                                <Typography fontStyle={'Poppins'} fontWeight={'500'} fontSize={'20px'} lineHeight={'30px'}>courses</Typography>
                            </Button>
                            <Button color="inherit" sx={{ml: 3}}>
                                <Typography fontStyle={'Poppins'} fontWeight={'500'} fontSize={'20px'} lineHeight={'30px'}>contact us</Typography>
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
        </Stack>
    )
}

export default AppBarComponent;