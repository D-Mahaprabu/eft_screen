import { Box, Typography, Stack } from "@mui/material";
import '../App.css';

const Howitworks = () => {
    return(
        <Box width="100%" height={300}>
            <Typography height={'22px'} width={'231px'} fontStyle={'Poppins'} fontWeight={'400'} fontSize={'32px'} lineHeight={'32px'} letterSpacing={'8%'} gutterBottom color={'#D81B0E'} sx={{ mt: 4, ml: 8 }}>
                How It Works
            </Typography>
            <Typography height={'60px'} width={'817px'} fontStyle={'Poppins'} fontWeight={'500'} fontSize={'40px'} lineHeight={'60px'} gutterBottom color={'black'} sx={{ ml: 8 }}>
                Your Online Learning Journey Made Easy
            </Typography>

                <Stack width={'100%'} height={150} sx={{mt:4}} direction={'row'}>
                    <Stack>
                        <Box sx={{
                                width: 40, height: 40,
                                display: 'flex', alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                backgroundColor: '#D81B0E',
                                color: 'white',
                                mx: 1,
                                ml: 20
                        }}>
                                01
                        </Box>
                        <Typography height={'33px'} fontStyle={'Manrope'} fontWeight={'700'} fontSize={'24px'} lineHeight={'32.78px'} gutterBottom color={'black'} sx={{ mt: 3, ml: 20 }}>
                            Choose Your Course
                        </Typography>
                    </Stack>

                    <Stack>           
                        <Box sx={{
                                width: 40, height: 40,
                                display: 'flex', alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                backgroundColor: '#D81B0E',
                                color: 'white',
                                mx: 1,
                                ml: 25
                        }}>
                                02
                        </Box>
                        <Typography height={'33px'} fontStyle={'Manrope'} fontWeight={'700'} fontSize={'24px'} lineHeight={'32.78px'} gutterBottom color={'black'} sx={{ mt: 3, ml: 25 }} style={{ fontWeight: 'bold' }}>
                            Register an Enquiry 
                        </Typography>
                    </Stack> 
        
                    <Stack>
                        <Box sx={{
                                width: 40, height: 40,
                                display: 'flex', alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                backgroundColor: '#D81B0E',
                                color: 'white',
                                mx: 1,
                                ml: 25
                        }}>
                                03
                        </Box>
                        <Typography height={'33px'} fontStyle={'Manrope'} fontWeight={'700'} fontSize={'24px'} lineHeight={'32.78px'} gutterBottom color={'black'} sx={{  mt: 3, ml: 25 }} style={{ fontWeight: 'bold' }}>
                            Learn and Engage
                        </Typography>
                    </Stack>
                </Stack>
        </Box>
    )
}

export default Howitworks;
