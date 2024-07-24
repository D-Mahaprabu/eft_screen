import { Stack, Typography, Box } from "@mui/material";

const Headers = () => {
    return(
        <Stack direction={'row'} height={120} width={1262} justifyContent="center" alignItems="center" sx={{borderRight:3, borderLeft:3, borderTop:3, color:'#8AC1C9', bgcolor:'#B5C2D2'}}>
            <Typography color={'#306156'} align="center" variant="h5">
               <Box sx={{ textTransform: 'uppercase', fontWeight: 'bold', mt:-6}}>
                FULL STACK ENGINEER PROGRAM
                </Box>
            </Typography> 
            <Typography color={'black'} align="center" >
                <Box sx={{ml:-55}}>
                EFT (Education For Tomorrow)
                </Box>
            </Typography>
            <Typography color={'#306156'} align="center">
                <Box sx={{ textTransform: 'uppercase', fontWeight: 'bold', ml:-55, mt:7}}>
                 August 10, 2024 | Stairs7 solutions private limited
                </Box>
            </Typography>
        </Stack>
     )
}

export default Headers;