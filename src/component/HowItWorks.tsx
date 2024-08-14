import { Box, Typography, Divider} from "@mui/material";
import '../App.css';

const Howitworks = () => {
    return(
        <Box width="100%" height={320}>
        <Typography height={'22px'} width={'231px'} fontStyle={'Poppins'} fontWeight={'400'} fontSize={'32px'} lineHeight={'32px'} letterSpacing={'8%'} gutterBottom color={'red'} sx={{ mt: 4, ml: 8 }}>
                            How It Works
                        </Typography>
                        <Typography height={'60px'} width={'817px'} fontStyle={'Poppins'} fontWeight={'500'} fontSize={'40px'} lineHeight={'60px'} gutterBottom color={'black'} sx={{ ml: 8 }}>
                            Your Online Learning Journey Made Easy
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
                            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mx: 2 }}>
                                    <Box sx={{
                                        width: 40, height: 40,
                                        display: 'flex', alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '50%',
                                        backgroundColor: 'red',
                                        color: 'white',
                                        mx: 1,
                                        ml: 20,
                                        mt: -6
                                    }}>
                                        01
                                    </Box>
                                    <Divider orientation="horizontal" sx={{ flexGrow: 1, borderColor: 'gray', borderBottomWidth: 1 }} />
                                    <Typography height={'33px'} fontStyle={'Manrope'} fontWeight={'700'} fontSize={'24px'} lineHeight={'32.78px'} gutterBottom color={'black'} sx={{ mt: 10, ml: -6.5 }}>
                                        Choose Your Course
                                    </Typography>
                                    <Box sx={{
                                        width: 40, height: 40,
                                        display: 'flex', alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '50%',
                                        backgroundColor: 'red',
                                        color: 'white',
                                        mx: 1,
                                        ml: 35,
                                        mt: -6
                                    }}>
                                        02
                                    </Box>
                                    <Divider orientation="horizontal" sx={{ flexGrow: 20, borderColor: 'gray', borderBottomWidth: 10 }} />
                                    <Typography height={'33px'} fontStyle={'Manrope'} fontWeight={'700'} fontSize={'24px'} lineHeight={'32.78px'} gutterBottom color={'black'} sx={{ mt: 10, ml: -6.5 }} style={{ fontWeight: 'bold' }}>
                                        Register an Enquiry 
                                    </Typography>
                                    <Box sx={{
                                        width: 40, height: 40,
                                        display: 'flex', alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '50%',
                                        backgroundColor: 'red',
                                        color: 'white',
                                        mx: 1,
                                        ml: 35,
                                        mt: -6
                                    }}>
                                        03
                                    </Box>
                                    <Typography height={'33px'} fontStyle={'Manrope'} fontWeight={'700'} fontSize={'24px'} lineHeight={'32.78px'} gutterBottom color={'black'} sx={{ mt: 10, ml: -6.5 }} style={{ fontWeight: 'bold' }}>
                                        Learn and Engage
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        </Box>
    )
}

export default Howitworks;
