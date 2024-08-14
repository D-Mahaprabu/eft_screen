import { AppBar, Toolbar, Button, Stack, Box, Typography} from "@mui/material";
import { Link } from 'react-router-dom';
import Stairs7SolutionsLogo from '../images/Stairs7SolutionsIcon.png';

const AppBarComponent = () => {

    return (
            <Stack>
                <AppBar sx={{ backgroundColor: 'red', height: '87px' }} position="static" elevation={0}>
                    <Toolbar>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', flexGrow: 1 }}>
                            <Button color="inherit">
                                <img alt='Stairs7Solutions Logo' src={Stairs7SolutionsLogo} height={70}></img>
                                <Typography fontStyle={'Poppins'} fontWeight={'400'} fontSize={'20px'} lineHeight={'30px'}>Stairs7 Solutions</Typography>
                            </Button>
                            <Button color="inherit" sx={{ ml: 40 }} component={Link} to="/">
                                <Typography fontStyle={'Poppins'} fontWeight={'600'} fontSize={'20px'} lineHeight={'30px'}>home</Typography>
                            </Button>
                            <Button color="inherit" sx={{ ml: 3 }} component={Link} to={'/about-us'}>
                                <Typography fontStyle={'Poppins'} fontWeight={'600'} fontSize={'20px'} lineHeight={'30px'}>about us</Typography>
                            </Button>
                            <Button color="inherit" component={Link} to="/courses" sx={{ ml: 3 }}>
                                <Typography fontStyle={'Poppins'} fontWeight={'600'} fontSize={'20px'} lineHeight={'30px'}>courses</Typography>
                            </Button>
                            <Button color="inherit" sx={{ ml: 3 }} component={Link} to={'/contact-us'}>
                                <Typography fontStyle={'Poppins'} fontWeight={'600'} fontSize={'20px'} lineHeight={'30px'}>contact us</Typography>
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Stack>
    )
}

export default AppBarComponent;
