import { Stack, Box, Typography } from "@mui/material";
import htmlLogo from '../images/html.png'
import cssLogo from '../images/css.png'
import bootStrapLogo from '../images/bootstraplogo.png'
import reactLogo from '../images/reactlogo.png'
import javaScriptLogo from '../images/js.png'
import typeScriptLogo from '../images/ts.png'
import jenkinsLogo from '../images/jkins.png'
import gitlabLogo from '../images/gitlab.png'
import devopsLogo from '../images/devops.png'
import awsLogo from '../images/aws.png'
import azureLogo from '../images/azure.png'
import glcloudLogo from '../images/glcloud.png'
import dockerLogo from '../images/docker.png'
import kubernetesLogo from '../images/kupernets.png'
import hibernateLogo from '../images/hibernateLogo.png'
import springSecurityLogo from '../images/springSecurityLogo.png'
import mavenLogo from '../images/mavenLogo.png'
import springBootLogo from '../images/springBootLogo.png'
import javaLogo from '../images/javaLogo.png'
import ehCacheLogo from '../images/ehCacheLogo.png'
import redisLogo from '../images/redisLogo.png'
import mangoDbLogo from '../images/mangoDbLogo.png'
import oracleLogo from '../images/oracleLogo.png'
import microsoftServiceLogo from '../images/microsoftServiceLogo.png'
import elasticStackLogo from '../images/elasticStackLogo.png'
import kafkaLogo from '../images/kafkaLogo.png'
import swaggerLogo from '../images/swaggerLogo.png'
import machineLearningLogo from '../images/machineLearningLogo.png'
import aiLogo from '../images/aiLogo.png'
import { useHistory } from 'react-router-dom';
  

const Body = () => {

    const history = useHistory();

    const handleClickJava = () => {
        history.push('/java-info');
    };

    const handleClickSpringBoot = () => {
        history.push('/springboot-info');
    };

    const handleClickMaven = () => {
        history.push('/maven-info');
    };

    const handleClickSpringSecurity = () => {
        history.push('/springsecurity-info');
    };

    const handleClickHibernate = () => {
        history.push('/hibernate-info');
    };

    const handleClickMicrosoftService = () => {
        history.push('/microsoftservice-info');
    };

    const handleClickOracle = () => {
        history.push('/oracle-info');
    };

    const handleClickMangoDb = () => {
        history.push('/mangodb-info');
    };

    const handleClickRedis = () => {
        history.push('/redis-info');
    };

    const handleClickEhCache = () => {
        history.push('/ehcache-info');
    };

    const handleClickAi = () => {
        history.push('/ai-info');
    };

    const handleClickMachineLearning = () => {
        history.push('/machinelearning-info');
    };

    const handleClickSwagger = () => {
        history.push('/swagger-info');
    };

    const handleClickKafka = () => {
        history.push('/kafka-info');
    };

    const handleClickElasticChange = () => {
        history.push('/elasticstack-info');
    };

    return(
        <Stack height={'300'} direction={'row'} sx={{borderRight:3, borderLeft:3, color:'#8AC1C9', bgcolor:'#B5C2D2'}}>
            <Box  width={290} height={300}>
                <Typography fontStyle={'Dancing Script'} textAlign={'center'} sx={{ml:-2}} variant="h6" color={'#599585'}>
                    Front End
                </Typography>
                <Stack direction={"row"} spacing={1} sx={{mt:1, ml:1}}>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={70} height={70}>
                    <img alt='Html Logo' src={htmlLogo} width={40} height={45}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={70} height={70}>
                    <img alt='Css Logo' src={cssLogo} width={47} height={45}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={70} height={70}>
                    <img alt='BootStrap Logo' src={bootStrapLogo} width={80} height={50}></img>
                </Box>
                </Stack>
                <Stack direction={"row"} spacing={1} sx={{mt:1, ml:1}}>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={70} height={70}>
                    <img alt='React Logo' src={reactLogo} width={110} height={65} ></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={70} height={70}>
                    <img alt='JavaScript Logo' src={javaScriptLogo} width={50} height={40} ></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={70} height={70}>
                    <img alt='TypeScript Logo' src={typeScriptLogo} width={60} height={45} ></img>
                </Box>
                </Stack>
                <Typography fontStyle={'Dancing Script'} textAlign={'center'} sx={{ml:-2}} variant="h6" color={'#599585'}>
                    CI/CD Options
                </Typography>
                <Stack direction={"row"} spacing={1} sx={{mt:1, ml:1}}>
                    <Box sx={{ borderRadius: 3,  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={70} height={70}>
                    <img alt='Jenkins Logo' src={jenkinsLogo} width={60} height={45} ></img>
                    </Box>
                    <Box sx={{ borderRadius: 3,  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={70} height={70}>
                    <img alt='Devops Logo' src={devopsLogo} width={60} height={45} ></img>
                    </Box>
                    <Box sx={{ borderRadius: 3,  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={70} height={70}>
                    <img alt='Gitlab Logo' src={gitlabLogo} width={60} height={45} ></img>
                    </Box>
                </Stack>
            </Box>
            <Box width={350} height={300} bgcolor={'red'}>
            <Typography fontStyle={'Dancing Script'} textAlign={'center'} sx={{ml:-2}} variant="h6" color={'#599585'}>
                    cloud
                </Typography>
                <Stack direction={"row"} spacing={2} sx={{mt:1, ml:1}}>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={80} height={80}>
                    <img alt='Aws Logo' src={awsLogo} width={40} height={45} ></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={80} height={80}>
                    <img alt='Azure Logo' src={azureLogo} width={47} height={45} ></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={80} height={80}>
                    <img alt='GoogleCloud Logo' src={glcloudLogo} width={35} height={35} ></img>
                </Box>
                </Stack>
                <Typography fontStyle={'Dancing Script'} textAlign={'center'} sx={{ml:-2, mt:1}} variant="h6" color={'#599585'}>
                    Deployement Options
                </Typography>
                <Stack direction={"row"} spacing={6} sx={{mt:1, ml:6}}>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={80} height={80}>
                    <img alt='Docker Logo' src={dockerLogo} width={40} height={45} ></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={80} height={80}>
                    <img alt='Kubernetes Logo' src={kubernetesLogo} width={67} height={55} ></img>
                </Box>
                </Stack>
            </Box>
            <Box width={845} height={300}>
                <Typography fontStyle={'Dancing Script'} textAlign={'center'} sx={{ml:35}} variant="h6" color={'#599585'}>
                    Backend
                </Typography>
                <Stack direction={"row"} spacing={2} sx={{mt:1, ml: 46}}>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={80} height={80}>
                    <img alt='Java Logo' src={javaLogo} width={55} height={42} style={{ cursor: 'pointer' }} onClick={handleClickJava}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={80} height={80}>
                    <img alt='SpringBoot Logo' src={springBootLogo} width={65} height={60} style={{ cursor: 'pointer' }} onClick={handleClickSpringBoot}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={80} height={80}>
                    <img alt='Maven Logo' src={mavenLogo} width={60} height={30} style={{ cursor: 'pointer' }} onClick={handleClickMaven}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={80} height={80}>
                    <img alt='SpringSecurity Logo' src={springSecurityLogo} width={50} height={50} style={{ cursor: 'pointer' }} onClick={handleClickSpringSecurity}></img>
                </Box>
                <Box sx={{ borderRadius: '10%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={80} height={80}>
                    <img alt='Hibernate Logo' src={hibernateLogo} width={110} height={70} style={{ cursor: 'pointer' }} onClick={handleClickHibernate}></img>
                </Box>
                </Stack>
                <Stack direction={"row"} spacing={2} sx={{mt:1, ml:46}}>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={80} height={80}>
                    <img alt='Microsoft Service Logo' src={microsoftServiceLogo} width={60} height={35} style={{ cursor: 'pointer' }} onClick={handleClickMicrosoftService}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'white'} width={80} height={80}>
                    <img alt='Oracle Logo' src={oracleLogo} width={70} height={60} style={{ cursor: 'pointer' }} onClick={handleClickOracle}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'white'} width={80} height={80}>
                    <img alt='MangoDb Logo' src={mangoDbLogo} width={80} height={60} style={{ cursor: 'pointer' }} onClick={handleClickMangoDb}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'white'} width={80} height={80}>
                    <img alt='Redis Logo' src={redisLogo} width={60} height={60} style={{ cursor: 'pointer' }} onClick={handleClickRedis}></img>
                </Box>
                <Box sx={{ borderRadius: '10%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={80} height={80}>
                    <img alt='EhCache Logo' src={ehCacheLogo} width={70} height={60} style={{ cursor: 'pointer' }} onClick={handleClickEhCache}></img>
                </Box>
                </Stack>
                <Stack direction={"row"} spacing={2} sx={{mt:1, ml:46}}>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={80} height={80}>
                    <img alt='Ai Logo' src={aiLogo} width={50} height={43} style={{ cursor: 'pointer' }} onClick={handleClickAi}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={80} height={80}>
                    <img alt='MachineLearning Logo' src={machineLearningLogo} width={50} height={43} style={{ cursor: 'pointer' }} onClick={handleClickMachineLearning}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={80} height={80}>
                    <img alt='Swagger Logo' src={swaggerLogo} width={65} height={50} style={{ cursor: 'pointer' }} onClick={handleClickSwagger}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={80} height={80}>
                    <img alt='Kafka Logo' src={kafkaLogo} width={50} height={40} style={{ cursor: 'pointer' }} onClick={handleClickKafka}></img>
                </Box>
                <Box sx={{ borderRadius: '10%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#509581'} width={80} height={80}>
                    <img alt='ElasticStack Logo' src={elasticStackLogo} width={85} height={90} style={{ cursor: 'pointer' }} onClick={handleClickElasticChange}></img>
                </Box>
                </Stack>
            </Box>
        </Stack>
    )
}

export default Body;