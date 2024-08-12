import { Stack, Box, Typography } from "@mui/material";
import CircleCiLogo from '../images/circleCiLogo.png'
import GitHubActionsLogo from '../images/gitHubActionsLogo.png'
import machineLearningLogo from '../images/machineLearning.jpeg'
import aiLogo from '../images/aiLogos.jpeg'
import SystemDesignLogo from '../images/systemDesignLogo.png'
import DebuggingSkillsLogo from '../images/debuggingSkillsLogo.png'
import EnterpriseArchitectureLogo from '../images/enterpriseArchitectureLogo.png'
import CapacityPlanningLogo from '../images/capacityPlanningLogo.png'
import { useHistory } from 'react-router-dom';


const Footer = () => {

  const history = useHistory();

    const handleClickCircleCi = () => {
        history.push('/courses/fullstack/circleci-info');
    };

    const handleClickGitHubActions = () => {
        history.push('/courses/fullstack/githubactions-info');
    };

    const handleClickSystemDesign = () => {
        history.push('/courses/fullstack/systemdesign-info');
    };

    const handleClickDebuggingSkills = () => {
        history.push('/courses/fullstack/debuggingskills-info');
    };

    const handleClickEnterpriseArchitecture = () => {
        history.push('/courses/fullstack/enterprisearchitecture-info');
    };

    const handleClickCapacityPlanning = () => {
        history.push('/courses/fullstack/capacityplanning-info');
    };

    const handleClickAi = () => {
        history.push('/courses/fullstack/ai-info');
    };

    const handleClickMachineLearning = () => {
        history.push('/machinelearning-info');
    };
    
    return(
        <Stack width={'100%'} height={280} direction={'row'} sx={{color:'#8AC1C9'}}>
            <Box  width={'25%'} height={'auto'}>
            <Stack direction={'column'}>
              <Stack direction={"row"} spacing={3} sx={{mt:1, ml:3}}>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='CircleCi Logo' src={CircleCiLogo} width={45} height={43} style={{ cursor: 'pointer', marginBottom:30, marginRight:0 }} onClick={handleClickCircleCi}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='GitHubActions Logo' src={GitHubActionsLogo} width={60} height={40} style={{ cursor: 'pointer', marginBottom:30 }} onClick={handleClickGitHubActions}></img>
                </Box>
                
                
            </Stack>
              </Stack>
             
              
            </Box>
            
            
           <Box width={'35%'} height={'auto'}>
            <Stack spacing={1} sx={{mt:13}}>
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
            </Box>

            <Box width={'40%'} height={'auto'}>
            <Typography variant="h6" color="#599585" textAlign="center" justifyContent={'center'}>
               Architect Essentials
            </Typography>
            <Stack direction={"row"} spacing={3} sx={{mt:0.2, ml:1}}>
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
            <Typography variant="h6" color="#599585" textAlign="center" >
               Exclusive Courses
            </Typography>
            <Stack direction={'row'} spacing={3} sx={{ml:16.5}}>
            <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='Ai Logo' src={aiLogo} width={55} height={47} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickAi}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='MachineLearning Logo' src={machineLearningLogo} width={55} height={45} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickMachineLearning}></img>
                </Box>
            </Stack>
            </Box> 
                   
            <Stack >
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:-297, mt:9}}>
               CircleCI 
            </Typography>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:-266.4, mt:-2.4}}>
               Github Actions 
             </Typography>
             <Typography variant="caption" color="white" textAlign="center" sx={{ml:-112.3, mt:0.7}}>
               System 
            </Typography>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:-112.3, mt:-0.7}}>
               Design 
            </Typography>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:-81,  mt:-4}}>
               Debugging 
            </Typography>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:-81, mt:-0.7}}>
               Skills 
            </Typography>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:-49.7, mt:-5}}>
               Enterprise
            </Typography>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:-49.7, mt:-0.7}}>
               Architecture
            </Typography>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:-19, mt:-4}}>
               Capacity
            </Typography>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:-19, mt:-0.7}}>
               Planning
            </Typography>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:-81, mt:13}}>
               AI
            </Typography>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:-49.7, mt:-3.6}}>
               Machine
            </Typography>
            <Typography variant="caption" color="white" textAlign="center" sx={{ml:-49.7, mt:-0.7}}>
               Learning
            </Typography>
            </Stack> 
        </Stack>
    )
}
export default Footer;
