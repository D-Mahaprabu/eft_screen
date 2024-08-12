import { Stack, Box, Typography } from "@mui/material";
import htmlLogo from '../images/htmlLogo.svg'
import cssLogo from '../images/css.png'
import bootStrapLogo from '../images/bootstrapLogo.svg'
import reactLogo from '../images/reactLogo.svg'
import javaScriptLogo from '../images/js.png'
import typeScriptLogo from '../images/typescriptLogo.svg'
import jenkinsLogo from '../images/jenkinsLogo.svg'
import gitlabLogo from '../images/gitLabLogo.svg'
import devopsLogo from '../images/devopsLogo.jpeg'
import awsLogo from '../images/awsLogo.png'
import azureLogo from '../images/azureLogo.png'
import glcloudLogo from '../images/googleCloudLogo.png'
import dockerLogo from '../images/dockerLogo.svg'
import kubernetesLogo from '../images/kubernetsLogo.svg'
import springSecurityLogo from '../images/springSecurityLogo.png'
import mavenLogo from '../images/mavenLogo.png'
import springBootLogo from '../images/springBootLogo.svg'
import javaLogo from '../images/javaLogo.jpg'
import ehCacheLogo from '../images/ehCacheLogo.png'
import mongoDbLogo from '../images/mongoDbLogo.png'
import oracleLogo from '../images/oracleLogo.svg'
import microserviceDesignLogo from '../images/microserviceDesignLogo.png'
import elasticStackLogo from '../images/elasticStackLogo.png'
import swaggerLogo from '../images/swaggerLogo.png'
import PrometheusLogo from '../images/prometheusLogo.svg'
import hibernateLogo from '../images/hibernateLogo.svg'
import redisLogo from '../images/redisLogo.png'
import kafkaLogo from '../images/kafkaLogo.png'
import { useHistory } from 'react-router-dom';
  

const Body = () => {

    const history = useHistory();

    const handleClickHtml = () => {
        history.push('/courses/fullstack/html-info');
    };

    const handleClickCss = () => {
        history.push('/courses/fullstack/css-info');
    };

    const handleClickBootstrap = () => {
        history.push('/courses/fullstack/bootstrap-info');
    };
    
    const handleClickReact = () => {
        history.push('/courses/fullstack/react-info');
    };

    const handleClickJs = () => {
        history.push('/courses/fullstack/js-info');
    };

    const handleClickTs = () => {
        history.push('/courses/fullstack/ts-info');
    };

    const handleClickJenkins = () => {
        history.push('/courses/fullstack/jenkins-info');
    };

    const handleClickDevops = () => {
        history.push('/courses/fullstack/devops-info');
    };

    const handleClickGitlab = () => {
        history.push('/courses/fullstack/gitlab-info');
    };

    const handleClickAws = () => {
        history.push('/courses/fullstack/aws-info');
    };

    const handleClickAzure = () => {
        history.push('/courses/fullstack/azure-info');
    };

    const handleClickGooglecloud = () => {
        history.push('/courses/fullstack/googlecloud-info');
    };

    const handleClickDocker = () => {
        history.push('/courses/fullstack/docker-info');
    };

    const handleClickKubernetes = () => {
        history.push('/courses/fullstack/kubernetes-info');
    };

    const handleClickJava = () => {
        history.push('/courses/fullstack/java-info');
    };

    const handleClickSpringBoot = () => {
        history.push('/courses/fullstack/springboot-info');
    };

    const handleClickMaven = () => {
        history.push('/courses/fullstack/maven-info');
    };

    const handleClickSpringSecurity = () => {
        history.push('/courses/fullstack/springsecurity-info');
    };

    const handleClickMicroserviceDesign = () => {
        history.push('/courses/fullstack/microsservicedesign-info');
    };

    const handleClickOracle = () => {
        history.push('/courses/fullstack/oracle-info');
    };

    const handleClickMongoDb = () => {
        history.push('/courses/fullstack/mongodb-info');
    };

    const handleClickEhCache = () => {
        history.push('/courses/fullstack/ehcache-info');
    };

    const handleClickSwagger = () => {
        history.push('/courses/fullstack/swagger-info');
    };

    const handleClickElasticChange = () => {
        history.push('/courses/fullstack/elasticstack-info');
    };

    const handleClickPrometheus = () => {
        history.push('/courses/fullstack/prometheus-info');
    };

    const handleClickHibernate = () => {
        history.push('/courses/fullstack/hibernate-info');
    };

    const handleClickRedis = () => {
        history.push('/courses/fullstack/redis-info');
    };

    const handleClickKafka = () => {
        history.push('/courses/fullstack/kafka-info');
    };


    return(
        <Stack height={'auto'} width={'100'} direction={'row'} sx={{color:'#8AC1C9'}}>
            <Box  width={'30%'} height={'auto'}>
                <Typography fontStyle={'Dancing Script'} textAlign={'center'} justifyContent={'center'} variant="h6" color={'#599585'}>
                    Front End
                </Typography>
                <Stack direction={"row"} spacing={3} sx={{mt:1, ml:3}}>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='Html Logo' src={htmlLogo} width={47} height={50} style={{ cursor: 'pointer', marginBottom:22 }} onClick={handleClickHtml}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='Css Logo' src={cssLogo} width={50} height={51} style={{ cursor: 'pointer', marginBottom:22 }} onClick={handleClickCss}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='BootStrap Logo' src={bootStrapLogo} width={60} height={50} style={{ cursor: 'pointer', marginBottom:22 }} onClick={handleClickBootstrap}></img>
                </Box>
                </Stack>
                <Stack direction={"row"} spacing={3} sx={{mt:1, ml:3}}>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='React Logo' src={reactLogo} width={110} height={60} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickReact}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='JavaScript Logo' src={javaScriptLogo} width={55} height={45} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickJs}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='TypeScript Logo' src={typeScriptLogo} width={80} height={48} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickTs}></img>
                </Box>
                </Stack>
                <Stack>
                <Typography variant="caption" color="white" textAlign="center" sx={{ml: 32, mt:-3.7}}>
                   TypeScript
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{ml:1.5, mt:-2.4}}>
                   JavaScript
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{mr:29.5, mt:-2.4}}>
                   React
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{ml:33, mt:-16}}>
                   Bootstrap
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{mr:-2, mt:-2.4}}>
                   CSS3
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{ml:-29, mt:-2.4}}>
                   HTML5
                </Typography>
                </Stack>
                <Typography fontStyle={'Dancing Script'} textAlign={'center'} justifyContent={'center'} variant="h6" color={'#599585'} bgcolor={'balck'}>
                    CI/CD Options
                </Typography>
                <Stack direction={"row"} spacing={3} sx={{mt:1, ml:3}}>
                    <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='Jenkins Logo' src={jenkinsLogo} width={55} height={55} style={{ cursor: 'pointer', marginBottom:30 }} onClick={handleClickJenkins}></img>
                    </Box>
                    <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='Devops Logo' src={devopsLogo} width={63} height={37} style={{ cursor: 'pointer', marginBottom:15 }} onClick={handleClickDevops}></img>
                    </Box>
                    <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='Gitlab Logo' src={gitlabLogo} width={60} height={45} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickGitlab}></img>
                    </Box>
                </Stack>
                <Stack>
                <Typography variant="caption" color="white" textAlign="center" sx={{ml: 32, mt:-3.7}}>
                   Gitlab
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{ml:1.5, mt:-2.4}}>
                   Devops
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{mr:29.5, mt:-2.4}}>
                   Jenkins
                </Typography>
                </Stack>
            </Box>
            <Box width={'30%'} height={'auto'}>
            <Typography fontStyle={'Dancing Script'} textAlign={'center'} justifyContent={'center'} variant="h6" color={'#599585'} >
                    Cloud
                </Typography>
                <Stack direction={"row"} spacing={3} sx={{mt:1, ml:2.3}}>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='Aws Logo' src={awsLogo} width={55} height={35} style={{ cursor: 'pointer', marginBottom:18 }} onClick={handleClickAws}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='Azure Logo' src={azureLogo} width={65} height={30} style={{ cursor: 'pointer', marginBottom:18 }} onClick={handleClickAzure}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='GoogleCloud Logo' src={glcloudLogo} width={40} height={38} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickGooglecloud}></img>
                </Box>
                </Stack>
                <Typography fontStyle={'Dancing Script'} textAlign={'center'} justifyContent={'center'} variant="h6" color={'#599585'}>
                    Deployment Options
                </Typography>
                <Stack direction={"row"} spacing={5} sx={{mt:1.4, ml:9.1}}>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='Docker Logo' src={dockerLogo} width={53} height={60} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickDocker}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='Kubernetes Logo' src={kubernetesLogo} width={60} height={50} style={{ cursor: 'pointer', marginBottom:30 }} onClick={handleClickKubernetes}></img>
                </Box>
                </Stack>
                <Typography fontStyle={'Dancing Script'} textAlign={'center'} justifyContent={'center'} variant="h6" color={'#599585'} sx={{mt:0.8}}>
                    Databases
                </Typography>
                <Stack direction={"row"} spacing={5} sx={{mt:0.5, ml:9.1}}>
                   <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='Oracle Logo' src={oracleLogo} width={90} height={60} style={{ cursor: 'pointer', marginBottom:8 }} onClick={handleClickOracle}></img>
                   </Box>
                   <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='MongoDb Logo' src={mongoDbLogo} width={70} height={70} style={{ cursor: 'pointer', marginBottom:12 }} onClick={handleClickMongoDb}></img>
                   </Box>
                </Stack>
                <Stack>
                <Typography variant="caption" color="white" textAlign="center" sx={{ml:31, mt:-40.5}}>
                   Google Cloud
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{ml:31, mt:-0.5}}>
                   Platform
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{mt:-4}}>
                   Azure
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{mr:31, mt:-2.4}}>
                   AWS
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{mr:17, mt:15.5}}>
                   Docker
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{ml:18, mt:-2.4}}>
                   Kubernetes
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{mr:17, mt:15}}>
                   Oracle
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{ml:18, mt:-2.4}}>
                   MongoDb
                </Typography>
                </Stack>
            </Box>
            <Box width={'40%'} height={'auto'}>
                <Typography fontStyle={'Dancing Script'} textAlign={'center'} justifyContent={'center'} sx={{ml:12}} variant="h6" color={'#599585'}>
                    Backend
                </Typography>
                <Stack direction={"row"} spacing={3} sx={{mt:1, ml:1.6, mr:2}}> 
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='Java Logo' src={javaLogo} width={55} height={42} style={{ cursor: 'pointer', marginBottom:20 }} onClick={handleClickJava}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='SpringBoot Logo' src={springBootLogo} width={60} height={55} style={{ cursor: 'pointer', marginBottom:30 }} onClick={handleClickSpringBoot}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='Maven Logo' src={mavenLogo} width={60} height={30} style={{ cursor: 'pointer', marginBottom:12 }} onClick={handleClickMaven}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='SpringSecurity Logo' src={springSecurityLogo} width={50} height={50} style={{ cursor: 'pointer', marginBottom:30 }} onClick={handleClickSpringSecurity}></img>
                </Box>
                </Stack>
                <Stack direction={"row"} spacing={3} sx={{mt:1, ml:1.6, mr:2}}>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='MicroserviceDesign Logo' src={microserviceDesignLogo} width={60} height={42} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickMicroserviceDesign}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='Swagger Logo' src={swaggerLogo} width={70} height={55} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickSwagger}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='ElasticStack Logo' src={elasticStackLogo} width={52} height={52} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickElasticChange}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='EhCache Logo' src={ehCacheLogo} width={60} height={57} style={{ cursor: 'pointer', marginBottom:20 }} onClick={handleClickEhCache}></img>
                </Box>
                </Stack>
                <Stack direction={"row"} spacing={3} sx={{mt:1, ml:1.6, mr:2}}>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='Kafka Logo' src={kafkaLogo} width={55} height={48} style={{ cursor: 'pointer', marginBottom:20 }} onClick={handleClickKafka}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='Redis Logo' src={redisLogo} width={50} height={50} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickRedis}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='Hibernate Logo' src={hibernateLogo} width={60} height={55} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickHibernate}></img>
                </Box>
                <Box sx={{ borderRadius: '50%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} bgcolor={'#7A8B93'} width={100} height={100}>
                    <img alt='Prometheus Logo' src={PrometheusLogo} width={55} height={55} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickPrometheus}></img>
                </Box>
                </Stack>
                
                <Stack>
                <Typography variant="caption" color="white" textAlign="center" sx={{ml:44.5, mt:-31.5}}>
                   Spring
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{ml:44.5, mt:-0.5}}>
                   Security 
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{ml:14, mt:-4}}>
                   Maven
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{mr:17, mt:-2.5}}>
                   Spring Boot
                </Typography>
                 <Typography variant="caption" color="white" textAlign="center" sx={{mr:48, mt:-2.5}}>
                   Java
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{ml:45.2, mt:11}}>
                   EhCache 
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{ml:14, mt:-2.5}}>
                   Elastic Stack
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{mr:17, mt:-2.5}}>
                   Swagger
                </Typography>
                 <Typography variant="caption" color="white" textAlign="center" sx={{mr:48, mt:-2.5}}>
                   Microservice
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{mr:48, mt:-0.7}}>
                   Design
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{ml:45.2, mt:9.5}}>
                   Prometheus 
                </Typography>
                <Typography variant="caption" color="white" textAlign="center"  sx={{ml:14, mt:-2.3}}>
                   Hibernate
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{mr:17, mt:-2.5}}>
                   Redis
                </Typography>
                <Typography variant="caption" color="white" textAlign="center" sx={{mr:48, mt:-2.5}}>
                   Kafka
                </Typography>
                </Stack>
            </Box> 
        </Stack>
    )
}

export default Body;