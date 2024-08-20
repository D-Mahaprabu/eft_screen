import {  Stack, Box, Typography } from "@mui/material";
import '../App.css';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import AssistantIcon from '@mui/icons-material/Assistant';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import Diversity1Icon from '@mui/icons-material/Diversity1';

const Enrollment = () => {
    return(
        <Stack sx={{ width: '100%', height: 430 }} bgcolor={'#D81B0E'}>

                <Typography width={'170px'} height={'35px'} fontFamily={'Poppins'} fontWeight={'400'} fontSize={'32px'} lineHeight={'48px'} color={'white'} sx={{ mt: 5, ml: 8 }}>Enrollment</Typography>
                    <Typography width={'179px'} height={'70px'} fontFamily={'Poppins'} fontWeight={'500'} fontSize={'48px'} lineHeight={'72px'} color={'white'} sx={{ mt: 1, ml: 8 }}>Include</Typography>
                    
                <Stack width={'100%'} height={150} direction={'row'} sx={{mt:4}}>
                    <Stack>
                    <Box sx={{ borderRadius: '35px', ml: 15 }} bgcolor={'white'} width={'42px'} height={'44px'} alignContent={'center'} textAlign={'center'}>
                      <AssignmentIcon sx={{fontSize: '28px', color: '#D81B0E'}} />
                    </Box>
                    <Typography width={'182px'} height={'24px'} fontFamily={'Poppins'} fontWeight={'500'} fontSize={'16px'} lineHeight={'24px'} color={'white'} sx={{ ml: 22, mt: -4.5 }}>Unlimited Access</Typography>
                    </Stack>

                    <Stack>  
                    <Box sx={{ borderRadius: '35px', ml: 25 }} bgcolor={'white'} width={'42px'} height={'44px'} alignContent={'center'} textAlign={'center'}>
                      <Diversity1Icon sx={{fontSize: '28px', color: '#D81B0E'}} />
                    </Box>
                      <Typography width={'139px'} height={'24px'} fontFamily={'Poppins'} fontWeight={'500'} fontSize={'16px'} lineHeight={'24px'} color={'white'} sx={{ ml: 32, mt: -4.5 }}>Expert Teachers</Typography>
                    </Stack>
                    
                    <Stack> 
                    <Box sx={{ borderRadius: '35px', ml: 25 }} bgcolor={'white'} width={'42px'} height={'44px'} alignContent={'center'} textAlign={'center'}>
                      <DisplaySettingsIcon sx={{fontSize: '28px', color: '#D81B0E'}} />
                    </Box>
                      <Typography width={'180px'} height={'24px'} fontFamily={'Poppins'} fontWeight={'500'} fontSize={'16px'} lineHeight={'24px'} color={'white'} sx={{ ml: 32, mt: -4.5 }}>Personalized Learning</Typography>  
                    </Stack>
                </Stack>    

                <Stack width={'100%'} height={150} direction={'row'} sx={{mt:-3}}>
                    <Stack>
                    <Box sx={{ borderRadius: '35px', ml: 15 }} bgcolor={'white'} width={'42px'} height={'44px'} alignContent={'center'} textAlign={'center'}>
                      <AssistantIcon sx={{fontSize: '28px', color: '#D81B0E'}} />
                    </Box>
                      <Typography width={'182px'} height={'24px'} fontFamily={'Poppins'} fontWeight={'500'} fontSize={'16px'} lineHeight={'24px'} color={'white'} sx={{ ml: 22, mt: -4.5 }}>Placement Assistance</Typography>
                    </Stack>

                    <Stack>
                    <Box sx={{ borderRadius: '35px', ml: 25 }} bgcolor={'white'} width={'42px'} height={'44px'} alignContent={'center'} textAlign={'center'}>
                      <BookmarkOutlinedIcon sx={{fontSize: '30px', color: '#D81B0E'}} />
                    </Box>
                      <Typography width={'139px'} height={'24px'} fontFamily={'Poppins'} fontWeight={'500'} fontSize={'16px'} lineHeight={'24px'} color={'white'} sx={{ ml: 32, mt:-4.5 }}>Cost Effective</Typography>
                    </Stack>

                    <Stack>
                    <Box sx={{ borderRadius: '35px', ml: 25 }} bgcolor={'white'} width={'42px'} height={'44px'} alignContent={'center'} textAlign={'center'}>
                      <ChangeCircleIcon sx={{fontSize: '30px', color: '#D81B0E'}} />
                    </Box>
                      <Typography width={'180px'} height={'24px'} fontFamily={'Poppins'} fontWeight={'500'} fontSize={'16px'} lineHeight={'24px'} color={'white'} sx={{ ml: 32, mt: -4.5 }}>Continuous Support</Typography>
                    </Stack>
                </Stack>
        </Stack>
    )
}

export default Enrollment;
