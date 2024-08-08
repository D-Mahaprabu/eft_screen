import { Box, Typography, Divider} from "@mui/material";
import '../App.css';

const Howitworks = () => {
    return(
        <Box width="100%" height={350}>
        <Typography variant="h4" gutterBottom color={'red'} sx={{ mt: 4, ml: 4 }}>
                            How It Works
                        </Typography>
                        <Typography variant="h3" gutterBottom color={'black'} sx={{ ml: 4 }}>
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
                                        mt: -14
                                    }}>
                                        01
                                    </Box>
                                    <Divider orientation="horizontal" sx={{ flexGrow: 1, borderColor: 'gray', borderBottomWidth: 1 }} />
                                    <Typography variant="h5" gutterBottom color={'black'} sx={{ mt: 1, ml: -6.5 }} style={{ fontWeight: 'bold' }}>
                                        Choose Your Course
                                    </Typography>
                                    <Typography variant="caption" gutterBottom color={'gray'} sx={{ mt: 8, ml: -27 }}>
                                        Choose Your Course
                                    </Typography>
                                    <Typography variant="caption" gutterBottom color={'gray'} sx={{ mt: 13, ml: -14.5 }}>
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
                                        mt: -14
                                    }}>
                                        02
                                    </Box>
                                    <Divider orientation="horizontal" sx={{ flexGrow: 20, borderColor: 'gray', borderBottomWidth: 10 }} />
                                    <Typography variant="h5" gutterBottom color={'black'} sx={{ mt: 1, ml: -6.5 }} style={{ fontWeight: 'bold' }}>
                                        Sign Up and Pay
                                    </Typography>
                                    <Typography variant="caption" gutterBottom color={'gray'} sx={{ mt: 8, ml: -21.5 }}>
                                        Sign Up and Pay
                                    </Typography>
                                    <Typography variant="caption" gutterBottom color={'gray'} sx={{ mt: 13, ml: -11.5 }}>
                                        Sign Up and Pay
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
                                        mt: -14
                                    }}>
                                        03
                                    </Box>
                                    <Typography variant="h5" gutterBottom color={'black'} sx={{ mt: 1, ml: -6.5 }} style={{ fontWeight: 'bold' }}>
                                        Learn and Engage
                                    </Typography>
                                    <Typography variant="caption" gutterBottom color={'gray'} sx={{ mt: 8, ml: -23.7 }}>
                                        Learn and Engage
                                    </Typography>
                                    <Typography variant="caption" gutterBottom color={'gray'} sx={{ mt: 13, ml: -12.7 }}>
                                        Learn and Engage
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        </Box>
    )
}

export default Howitworks;