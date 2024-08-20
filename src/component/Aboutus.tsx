import { Stack, Typography, Box } from "@mui/material"
import BgImage from '../images/BgImg7.jpeg'

const Aboutus = () => {
    return(
        <Stack sx={{ width: '100%', height: 300 }} bgcolor={'#D81B0E'} direction={'row'}>
            <Box height={230} width={'40%'}>
            <Box>
                <img src={BgImage} width={570} height={300}></img>
            </Box>
            </Box>

            <Box height={230} width={'60%'}>
              <Typography color={'white'} fontWeight={'bold'} fontFamily={'Poppins'} fontSize={'24px'}  sx={{mt: 5}}>Who We Are</Typography>
              <Typography color={'white'} fontWeight={'bold'} fontFamily={'Poppins'} fontSize={'14px'} alignContent={'left'} textAlign={'left'} sx={{mt: 4}}>
                At Stairs7 Solutions, we’re redefining excellence in education. 
                Our custom-built curriculum is engineered to keep you ahead in today’s fast-paced world. 
                We don’t just train, we transform delivering hands-on real-world learning through expert instructors and innovative methods. 
                With rigorous assessments and prestigious certifications, we empower you to not just meet industry standards but also to set them.
              </Typography>
            </Box>
        </Stack>
    )
}

export default Aboutus;