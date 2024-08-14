import { Stack, Box, Typography, Card, CardContent, CardMedia, IconButton } from "@mui/material";
import '../App.css';
import LaptopImage from '../images/laptopImage.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProfileLogo from '../images/profileLogo.png';
import ProfileImage from '../images/profileImage.png';
import StarIcon from '@mui/icons-material/Star';

const Whychooseus = () => {
    return(
        
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
    </Stack>
    )
}

export default Whychooseus;