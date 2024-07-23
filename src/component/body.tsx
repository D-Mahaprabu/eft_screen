import { Stack, Box, Typography } from "@mui/material";
import htmlLogo from '../images/html.png'
import cssLogo from '../images/css.png'
import bootstrapLogo from '../images/bootstraplogo.png'
import reactLogo from '../images/reactlogo.png'
import jsLogo from '../images/js.png'
import tsLogo from '../images/ts.png'
import jkinsLogo from '../images/jkins.png'
import gitlabLogo from '../images/gitlab.png'
import devopsLogo from '../images/devops.png'
import awsLogo from '../images/aws.png'
import azureLogo from '../images/azure.png'
import glcloudLogo from '../images/glcloud.png'
import dockerLogo from '../images/docker.png'
import kupernetsLogo from '../images/kupernets.png'

const Body = () => {
    return(
        <Stack height={'300'} direction={'row'}>
            <Box  width={290} height={300}>
                <Typography fontStyle={'Dancing Script'} textAlign={'center'} sx={{ml:-2}} variant="h6" color={'#599585'}>
                    Front End
                </Typography>
                <Stack direction={"row"} spacing={1} sx={{mt:1, ml:1}}>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={70} height={70}>
                    <img alt='html' src={htmlLogo} width={40} height={45} ></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={70} height={70}>
                    <img alt='html' src={cssLogo} width={47} height={45} ></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={70} height={70}>
                    <img alt='html' src={bootstrapLogo} width={80} height={50} ></img>
                </Box>
                </Stack>
                <Stack direction={"row"} spacing={1} sx={{mt:1, ml:1}}>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={70} height={70}>
                    <img alt='html' src={reactLogo} width={110} height={65} ></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={70} height={70}>
                    <img alt='html' src={jsLogo} width={50} height={40} ></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={70} height={70}>
                    <img alt='html' src={tsLogo} width={60} height={45} ></img>
                </Box>
                </Stack>
                <Typography fontStyle={'Dancing Script'} textAlign={'center'} sx={{ml:-2}} variant="h6" color={'#599585'}>
                    CI/CD Options
                </Typography>
                <Stack direction={"row"} spacing={1} sx={{mt:1, ml:1}}>
                    <Box sx={{ borderRadius: 3,  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={70} height={70}>
                    <img alt='html' src={jkinsLogo} width={60} height={45} ></img>
                    </Box>
                    <Box sx={{ borderRadius: 3,  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={70} height={70}>
                    <img alt='html' src={devopsLogo} width={60} height={45} ></img>
                    </Box>
                    <Box sx={{ borderRadius: 3,  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={70} height={70}>
                    <img alt='html' src={gitlabLogo} width={60} height={45} ></img>
                    </Box>
                </Stack>
            </Box>
            <Box width={350} height={300}>
            <Typography fontStyle={'Dancing Script'} textAlign={'center'} sx={{ml:-2}} variant="h6" color={'#599585'}>
                    cloud
                </Typography>
                <Stack direction={"row"} spacing={2} sx={{mt:1, ml:1}}>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={80} height={80}>
                    <img alt='html' src={awsLogo} width={40} height={45} ></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={80} height={80}>
                    <img alt='html' src={azureLogo} width={47} height={45} ></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={80} height={80}>
                    <img alt='html' src={glcloudLogo} width={35} height={35} ></img>
                </Box>
                </Stack>
                <Typography fontStyle={'Dancing Script'} textAlign={'center'} sx={{ml:-2, mt:1}} variant="h6" color={'#599585'}>
                    Deployement Options
                </Typography>
                <Stack direction={"row"} spacing={6} sx={{mt:1, ml:6}}>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={80} height={80}>
                    <img alt='html' src={dockerLogo} width={40} height={45} ></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={80} height={80}>
                    <img alt='html' src={kupernetsLogo} width={67} height={55} ></img>
                </Box>
                </Stack>
            </Box>
        </Stack>
    )
}

export default Body;