import { Stack, Box, Typography } from "@mui/material";
import CircleCiLogo from '../images/circleCiLogo.png'
import GitHubActionsLogo from '../images/gitHubActionsLogo.png'
import machineLearningLogo from '../images/machineLearning.jpeg'
import aiLogo from '../images/aiLogo.jpeg'
import SystemDesignLogo from '../images/systemDesignLogo.png'
import DebuggingSkillsLogo from '../images/debuggingSkillsLogo.png'
import EnterpriseArchitectureLogo from '../images/enterpriseArchitectureLogo.png'
import CapacityPlanningLogo from '../images/capacityPlanningLogo.png'
import { useHistory } from 'react-router-dom';


const Footer = () => {

  const history = useHistory();

    const handleClickCircleCi = () => {
        history.push('/circleci-info');
    };

    const handleClickGitHubActions = () => {
        history.push('/githubactions-info');
    };

    const handleClickSystemDesign = () => {
        history.push('/systemdesign-info');
    };

    const handleClickDebuggingSkills = () => {
        history.push('/debuggingskills-info');
    };

    const handleClickEnterpriseArchitecture = () => {
        history.push('/enterprisearchitecture-info');
    };

    const handleClickCapacityPlanning = () => {
        history.push('/capacityplanning-info');
    };

    const handleClickAi = () => {
        history.push('/ai-info');
    };

    const handleClickMachineLearning = () => {
        history.push('/machinelearning-info');
    };
    
    return(
        <Stack height={'100'} width={1473} direction={'row'} sx={{color:'#8AC1C9'}}>
            <Box  width={800} height={232}>
              <Stack direction={"row"} spacing={3} sx={{mt:1, ml:3}}>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='CircleCi Logo' src={CircleCiLogo} width={45} height={43} style={{ cursor: 'pointer', marginBottom:30, marginRight:0 }} onClick={handleClickCircleCi}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='GitHubActions Logo' src={GitHubActionsLogo} width={60} height={40} style={{ cursor: 'pointer', marginBottom:30 }} onClick={handleClickGitHubActions}></img>
                </Box>
              </Stack>
            </Box>
            <Stack direction={"row"} spacing={3} sx={{mt:0.2, ml:23}}>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='SystemDesign Logo' src={SystemDesignLogo} width={50} height={50} style={{ cursor: 'pointer', marginBottom:30 }} onClick={handleClickSystemDesign}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='DebuggingSkills Logo' src={DebuggingSkillsLogo} width={55} height={55} style={{ cursor: 'pointer', marginBottom:30 }} onClick={handleClickDebuggingSkills}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='EnterpriseArchitecture Logo' src={EnterpriseArchitectureLogo} width={100} height={65} style={{ cursor: 'pointer', marginBottom:35 }} onClick={handleClickEnterpriseArchitecture}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='CapacityPlanning Logo' src={CapacityPlanningLogo} width={50} height={50} style={{ cursor: 'pointer', marginBottom:30 }} onClick={handleClickCapacityPlanning}></img>
                </Box>
            </Stack>
            <Stack direction={"row"} spacing={3} sx={{mt:16.5, ml:-43}}>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='Ai Logo' src={aiLogo} width={55} height={47} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickAi}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='MachineLearning Logo' src={machineLearningLogo} width={55} height={45} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickMachineLearning}></img>
                </Box>
            </Stack>
            <Stack width={15}>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:-317.5, mt:8.9}}>
               CircleCI 
            </Typography>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:-286.5, mt:-2.3}}>
               Github Actions 
            </Typography>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:5.7, mt:-3.6}}>
               Capacity
            </Typography>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:5.7, mt:-0.7}}>
               Planning
            </Typography>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:-15.3, mt:-4.7}}>
               Enterprise
            </Typography>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:-15.3, mt:-0.7}}>
               Architecture
            </Typography>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:-46, mt:-4}}>
               Debugging 
            </Typography>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:-46, mt:-0.5}}>
               Skills 
            </Typography>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:-77.3, mt:-4.5}}>
               System 
            </Typography>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:-77.3, mt:-0.7}}>
               Design 
            </Typography>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:-14.5, mt:12.3}}>
               Machine
            </Typography>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:-14.5, mt:-0.8}}>
               Learning
            </Typography>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:-45.5, mt:-3.5}}>
               AI
            </Typography>
            <Typography variant="h6" color="#599585" textAlign="center" sx={{ml:-30.3, mt:-31.7}}>
               Architect Essentials
            </Typography>
            <Typography variant="h6" color="#599585" textAlign="center" sx={{ml:-30, mt:12.8}}>
               Exclusive Courses
            </Typography>
            </Stack> 
            <Stack spacing={1} sx={{mt:13, ml:-100}}>
            <Typography fontStyle={'Dancing Script'} textAlign={'center'} sx={{mr:34, fontWeight: 'bold'}} variant="h4" color={'black'}>
               Contact us:
            </Typography>
            <Typography fontStyle={'Dancing Script'} textAlign={'center'} sx={{mr:34, fontWeight: 'bold'}} variant="h5" color={'black'}>
               Phone: +91 9944864398
            </Typography>
            <Typography fontStyle={'Dancing Script'} textAlign={'center'} sx={{mr:34, fontWeight: 'bold'}} variant="h5" color={'black'}>
               Email: stairs7solutions@gmail.com
            </Typography>
            </Stack> 
        </Stack>
    )
}
export default Footer;
