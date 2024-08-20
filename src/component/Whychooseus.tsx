import { Stack, Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import '../App.css';
import LaptopImage from '../images/laptopImage.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Whychooseus = () => {
    return(
        <Stack width={'100%'} direction={'row'} height={780}>
        <Box sx={{ width: '40%', height: 'auto' }}>
        <Card sx={{ width: 380, height: 450, mx: 'auto', mt: 13, ml: 10, borderRadius: 2 }}>
        <CardMedia
                component="img"
                width="380"
                height="450"
                image={LaptopImage}
                alt={'laptop image'}
            />
        </Card>
        <Card sx={{ width: 380, height: 80, mx: 'auto', mt:3, ml: 10, borderRadius: 2, bgcolor: '#F5F4F0' }}>
          <CardContent>
            <Box sx={{ width: '50px', height: '50px', borderRadius: '6px', bgcolor: '#D82C25', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 35 }}>
                ★
            </Box>
                <Typography width={'300px'} height={'52px'} fontFamily={'Poppins'} fontWeight={'400'} fontSize={'14px'} lineHeight={'20px'} sx={{mt: -5.8, ml: 7}}>
                    Learn at your own pace, with unlimited access on mobile and desktop.
                </Typography>
          </CardContent>
        </Card>
        </Box>

        <Box sx={{ width: '60%', height: 'auto' }}>
        <Typography width={'151px'} height={'12px'} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'17px'} lineHeight={'17px'} letterSpacing={'8&'} sx={{ mt: 13 }} color={'#DA2F26'}>
             Why Choose Us
        </Typography>
        <Typography width={'600px'} height={'60px'} fontFamily={'Poppins'} fontWeight={'700'} fontSize={'48px'} lineHeight={'65.57px'} sx={{ mt: 1 }}>
             Your Learning Journey,
        </Typography>
        <Typography width={'580px'} height={'68px'} fontFamily={'Poppins'} fontWeight={'700'} fontSize={'48px'} lineHeight={'65.57px'} sx={{ ml: 1 }}>
             Your Way
        </Typography>
        <Typography width={'580px'} height={'78px'} fontFamily={'Poppins'} fontWeight={'400'} fontSize={'16px'} lineHeight={'26px'} sx={{ mt: 1.5 }} color={'#7F8490'}>
             Our courses will help you gain the skills needed to excel in your field, Also it will help you embark your tech career and knowledge than ever.
        </Typography>

        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '30px', bgcolor: '#D82C25', color: 'white', mt: 4, position: 'relative', overflow: 'hidden' }}>
            <MenuBookIcon />
        </Box>
        <Typography width={'275px'} height={'25px'} fontFamily={'Poppins'} fontWeight={'700'} fontSize={'18px'} lineHeight={'24.59px'} sx={{mt: -4.2, ml: 7, mb:3 }}>
             High-Quality Content Course
        </Typography>
        
        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '30px', bgcolor: '#D82C25', color: 'white', mt: 2, position: 'relative', overflow: 'hidden' }}>
            <MenuBookIcon />
        </Box>
        <Typography width={'300px'} height={'25px'} fontFamily={'Poppins'} fontWeight={'700'} fontSize={'18px'} lineHeight={'24.59px'} sx={{ mt: -4.2, ml: 7, mb:3 }}>
             Interactive Learning Experience
        </Typography>
        
        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '30px', bgcolor: '#D82C25', color: 'white', mt: 2, position: 'relative', overflow: 'hidden' }}>
            <MenuBookIcon />
        </Box>
        <Typography width={'270px'} height={'25px'} fontFamily={'Poppins'} fontWeight={'700'} fontSize={'18px'} lineHeight={'24.59px'} sx={{ mt: -4.2, ml: 7, mb:2 }} color={'black'}>
             Exceptional Student Support
        </Typography>
    </Box>
    </Stack>
    )
}

export default Whychooseus;
