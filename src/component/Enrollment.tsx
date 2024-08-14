import {  Stack, Box, Typography } from "@mui/material";
import '../App.css';

const Enrollment = () => {
    return(
        <Stack sx={{ width: '100%', height: 400 }} bgcolor={'red'}>

                <Typography width={'170px'} height={'35px'} fontStyle={'Poppins'} fontWeight={'400'} fontSize={'32px'} lineHeight={'48px'} color={'white'} sx={{ mt: 5, ml: 8 }}>Enrollment</Typography>
                    <Typography width={'179px'} height={'70px'} fontStyle={'Poppins'} fontWeight={'500'} fontSize={'48px'} lineHeight={'72px'} color={'white'} sx={{ mt: 1, ml: 8 }}>Include</Typography>
                    
                    <Box sx={{ borderRadius: '35px',  display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3, ml: 13 }} bgcolor={'white'} width={'42px'} height={'44px'}></Box>
                      <Typography width={'139px'} height={'24px'} fontStyle={'Poppins'} fontWeight={'500'} fontSize={'16px'} lineHeight={'24px'} color={'white'} sx={{ ml: 21, mt: -4.3 }}>Unlimited Access</Typography>

                    <Box sx={{ borderRadius: '35px',  display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 8, ml: 13 }} bgcolor={'white'} width={'42px'} height={'44px'}></Box>
                      <Typography width={'165px'} height={'24px'} fontStyle={'Poppins'} fontWeight={'500'} fontSize={'16px'} lineHeight={'24px'} color={'white'} sx={{ ml: 21, mt: -4.3 }}>Placement Assistance</Typography>
                      

                    <Box sx={{ borderRadius: '35px',  display: 'flex', justifyContent: 'center', alignItems: 'center', mt: -16.3, ml: 67 }} bgcolor={'white'} width={'42px'} height={'44px'}></Box>
                      <Typography width={'139px'} height={'24px'} fontStyle={'Poppins'} fontWeight={'500'} fontSize={'16px'} lineHeight={'24px'} color={'white'} sx={{ ml: 75, mt: -4.3 }}>Expert Teachers</Typography>
                      

                    <Box sx={{ borderRadius: '35px',  display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 8, ml: 67 }} bgcolor={'white'} width={'42px'} height={'44px'}></Box>
                      <Typography width={'139px'} height={'24px'} fontStyle={'Poppins'} fontWeight={'500'} fontSize={'16px'} lineHeight={'24px'} color={'white'} sx={{ ml: 75, mt: -4.3 }}>Cost Effective</Typography>
                      

                    <Box sx={{ borderRadius: '35px',  display: 'flex', justifyContent: 'center', alignItems: 'center', mt: -16.3, ml: 120 }} bgcolor={'white'} width={'42px'} height={'44px'}></Box>
                      <Typography width={'165px'} height={'24px'} fontStyle={'Poppins'} fontWeight={'500'} fontSize={'16px'} lineHeight={'24px'} color={'white'} sx={{ ml: 128, mt: -4.3 }}>Personalized Learning</Typography>
                      
                    <Box sx={{ borderRadius: '35px',  display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 8, ml: 120 }} bgcolor={'white'} width={'42px'} height={'44px'}></Box>
                      <Typography width={'160px'} height={'24px'} fontStyle={'Poppins'} fontWeight={'500'} fontSize={'16px'} lineHeight={'24px'} color={'white'} sx={{ ml: 128, mt: -4.3 }}>Continuous Support</Typography>
                </Stack>
    )
}

export default Enrollment;
