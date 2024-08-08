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
    )
}

export default Whychooseus;