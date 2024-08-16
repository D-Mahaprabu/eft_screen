import {  Stack, Box, Typography } from "@mui/material";
import '../App.css';

const Enrollment = () => {
    return(
        <Stack sx={{ width: '100%', height: 430 }} bgcolor={'#D81B0E'}>

                <Typography width={'170px'} height={'35px'} fontStyle={'Poppins'} fontWeight={'400'} fontSize={'32px'} lineHeight={'48px'} color={'white'} sx={{ mt: 5, ml: 8 }}>Enrollment</Typography>
                    <Typography width={'179px'} height={'70px'} fontStyle={'Poppins'} fontWeight={'500'} fontSize={'48px'} lineHeight={'72px'} color={'white'} sx={{ mt: 1, ml: 8 }}>Include</Typography>
                    
                <Stack width={'100%'} height={150} direction={'row'} sx={{mt:4}}>
                    <Stack>
                    <Box sx={{ borderRadius: '35px', ml: 20 }} bgcolor={'white'} width={'42px'} height={'44px'}></Box>
                    <Typography width={'162px'} height={'24px'} fontStyle={'Poppins'} fontWeight={'500'} fontSize={'16px'} lineHeight={'24px'} color={'white'} sx={{ ml: 27, mt: -4.5 }}>Unlimited Access</Typography>
                    </Stack>

                    <Stack>  
                    <Box sx={{ borderRadius: '35px', ml: 30 }} bgcolor={'white'} width={'42px'} height={'44px'}></Box>
                      <Typography width={'139px'} height={'24px'} fontStyle={'Poppins'} fontWeight={'500'} fontSize={'16px'} lineHeight={'24px'} color={'white'} sx={{ ml: 37, mt: -4.5 }}>Expert Teachers</Typography>
                    </Stack>
                    
                    <Stack> 
                    <Box sx={{ borderRadius: '35px', ml: 30 }} bgcolor={'white'} width={'42px'} height={'44px'}></Box>
                      <Typography width={'165px'} height={'24px'} fontStyle={'Poppins'} fontWeight={'500'} fontSize={'16px'} lineHeight={'24px'} color={'white'} sx={{ ml: 37, mt: -4.5 }}>Personalized Learning</Typography>  
                    </Stack>
                </Stack>    

                <Stack width={'100%'} height={150} direction={'row'} sx={{mt:-3}}>
                    <Stack>
                    <Box sx={{ borderRadius: '35px', ml: 20 }} bgcolor={'white'} width={'42px'} height={'44px'}></Box>
                      <Typography width={'162px'} height={'24px'} fontStyle={'Poppins'} fontWeight={'500'} fontSize={'16px'} lineHeight={'24px'} color={'white'} sx={{ ml: 27, mt: -4.5 }}>Placement Assistance</Typography>
                    </Stack>

                    <Stack>
                    <Box sx={{ borderRadius: '35px', ml: 30 }} bgcolor={'white'} width={'42px'} height={'44px'}></Box>
                      <Typography width={'139px'} height={'24px'} fontStyle={'Poppins'} fontWeight={'500'} fontSize={'16px'} lineHeight={'24px'} color={'white'} sx={{ ml: 37, mt:-4.5 }}>Cost Effective</Typography>
                    </Stack>

                    <Stack>
                    <Box sx={{ borderRadius: '35px', ml: 30 }} bgcolor={'white'} width={'42px'} height={'44px'}></Box>
                      <Typography width={'165px'} height={'24px'} fontStyle={'Poppins'} fontWeight={'500'} fontSize={'16px'} lineHeight={'24px'} color={'white'} sx={{ ml: 37, mt: -4.5 }}>Continuous Support</Typography>
                    </Stack>
                </Stack>
        </Stack>
    )
}

export default Enrollment;
