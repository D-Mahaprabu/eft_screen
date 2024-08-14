import { Stack, Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import '../App.css';
import LaptopImage from '../images/laptopImage.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Whychooseus = () => {
    return(
        
        <Stack sx={{ width: '100%', height: 862 }}>
        <Card sx={{ width: 380, height: 450, mx: 'auto', mt: 13, mr: 122, borderRadius: 2 }}>
        <CardMedia
                component="img"
                width="380"
                height="450"
                image={LaptopImage}
                alt={'laptop image'}
            />
        </Card>
        <Card sx={{ width: 380, height: 80, mx: 'auto', mt:3, mr: 122, borderRadius: 2, bgcolor: '#F5F4F0' }}>
          <CardContent>
            <Box sx={{ width: '50px', height: '50px', borderRadius: '6px', bgcolor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 35 }}>
                ★
            </Box>
                <Typography width={'300px'} height={'52px'} fontStyle={'DM Sans'} fontWeight={'400'} fontSize={'16px'} lineHeight={'26px'} sx={{mt: -6.5, ml: 7}}>
                    Learn at your own pace, with unlimited access on mobile and desktop.
                </Typography>
          </CardContent>
        </Card>

        <Typography width={'151px'} height={'12px'} fontStyle={'Poppins'} fontWeight={'600'} fontSize={'17px'} lineHeight={'17px'} letterSpacing={'8&'} sx={{mt: -69.7, ml: 75}} color={'red'}>
             Why Choose Us
        </Typography>
        <Typography width={'580px'} height={'60px'} fontStyle={'Manrope'} fontWeight={'700'} fontSize={'48px'} lineHeight={'65.57px'} sx={{mt: 1, ml: 75}}>
             Your Learning Journey,
        </Typography>
        <Typography width={'580px'} height={'68px'} fontStyle={'Manrope'} fontWeight={'700'} fontSize={'48px'} lineHeight={'65.57px'} sx={{ ml: 75}}>
             Your Way
        </Typography>
        <Typography width={'580px'} height={'78px'} fontStyle={'DM Sans'} fontWeight={'400'} fontSize={'16px'} lineHeight={'26px'} sx={{mt: 1.5, ml: 75}} color={'gray'}>
             This course will help you gain the skills needed to excel in your field, This course will help you gain the skills needed to excel in your field, This course will help you for your future career.
        </Typography>

        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '30px', bgcolor: 'red', color: 'white', mt: 4, ml: 75, position: 'relative', overflow: 'hidden' }}>
            <MenuBookIcon />
        </Box>
        <Typography width={'254px'} height={'25px'} fontStyle={'Manrope'} fontWeight={'700'} fontSize={'18px'} lineHeight={'24.59px'} sx={{ mt: -4.2, ml: 82.5, mb:2 }}>
             High-Quality Content Course
        </Typography>
        
        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '30px', bgcolor: 'red', color: 'white', mt: 2, ml: 75, position: 'relative', overflow: 'hidden' }}>
            <MenuBookIcon />
        </Box>
        <Typography width={'277px'} height={'25px'} fontStyle={'Manrope'} fontWeight={'700'} fontSize={'18px'} lineHeight={'24.59px'} sx={{ mt: -4.2, ml: 82.7, mb:2 }}>
             Interactive Learning Experience
        </Typography>
        
        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '30px', bgcolor: 'red', color: 'white', mt: 2, ml: 75, position: 'relative', overflow: 'hidden' }}>
            <MenuBookIcon />
        </Box>
        <Typography width={'253px'} height={'25px'} fontStyle={'Manrope'} fontWeight={'700'} fontSize={'18px'} lineHeight={'24.59px'} sx={{ mt: -4.2, ml: 82.5, mb:2 }} color={'black'}>
             Exceptional Student Support
        </Typography>

        <Box width={'100%'} height={80} bgcolor={'black'} sx={{mt:34.2}}>
          <Typography width={'250px'} height={'22px'} fontStyle={'Poppins'} fontWeight={'500'} fontSize={'16px'} lineHeight={'22px'} color={'white'} sx={{ ml: 10, mt: 3 }}>Copy Rights @ All rights reserved</Typography>
        </Box>
    </Stack>
    )
}

export default Whychooseus;
