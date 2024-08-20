import { Stack, Typography } from "@mui/material"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const Contactus = () => {
    return(
        <Stack width={'100%'} height={250}>
            <Typography sx={{mt: 5}} fontWeight={'bold'} color={'#D81B0E'} fontFamily={'Poppins'} fontSize={'28px'}>Get In Touch With Us</Typography>
            <Stack sx={{mt: 2, ml: 1}}>
              <Typography fontFamily={'Poppins'}>Stairs7 Solutions Private Limited </Typography>
              <Typography fontFamily={'Poppins'}>i13, 1st Main Road, i-block, Anna Nagar East, Chennai - 600102</Typography>
              <Typography fontFamily={'Poppins'}>
                 Phone: 9944864398.
              </Typography>
              <Typography fontFamily={'Poppins'}>
                 Email: stairs7solutions@gmail.com</Typography>
            </Stack>
        </Stack>
    )
}

export default Contactus;