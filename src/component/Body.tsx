import { Stack, Box, Typography, Divider, Button } from "@mui/material";
import htmlLogo from '../images/htmlLogo.svg'
import cssLogo from '../images/css.png'
import bootStrapLogo from '../images/bootstrapLogo.svg'
import reactLogo from '../images/reactLogo.svg'
import javaScriptLogo from '../images/jsLogo.png'
import typeScriptLogo from '../images/typescriptLogo.svg'
import jenkinsLogo from '../images/jenkinsLogo.png'
import gitlabLogo from '../images/gitLabLogo.svg'
import devopsLogo from '../images/devopsLogo.png'
import awsLogo from '../images/awsLogo.png'
import azureLogo from '../images/azureLogo.png'
import glcloudLogo from '../images/googleCloudLogo.png'
import dockerLogo from '../images/dockerLogo.png'
import kubernetesLogo from '../images/kubernetsLogo.svg'
import springSecurityLogo from '../images/springSecurityLogo.png'
import mavenLogo from '../images/mavenLogo.png'
import springBootLogo from '../images/springBootLogo.png'
import javaLogo from '../images/javaLogo.png'
import ehCacheLogo from '../images/ehCacheLogo.png'
import mongoDbLogo from '../images/mongoDbLogo.png'
import oracleLogo from '../images/oracleLogo.png'
import microserviceDesignLogo from '../images/microserviceDesignLogo.png'
import elasticStackLogo from '../images/elasticStackLogo.png'
import swaggerLogo from '../images/swaggerLogo.png'
import PrometheusLogo from '../images/prometheusLogo.svg'
import hibernateLogo from '../images/hibernateLogo.svg'
import redisLogo from '../images/redisLogo.png'
import kafkaLogo from '../images/kafkaLogo.png'
import { useHistory } from 'react-router-dom';
import SystemDesignLogo from '../images/systemDesignLogo.png'
import DebuggingSkillsLogo from '../images/debuggingSkillsLogo.png'
import EnterpriseArchitectureLogo from '../images/enterpriceArchitectureLogo.png'
import CapacityPlanningLogo from '../images/capacityPlanningLogo.png'
import CircleCiLogo from '../images/circleCiLogo.png'
import GitHubActionsLogo from '../images/gitHubActionsLogo.png'
import machineLearningLogo from '../images/machineLearning.png'
import aiLogo from '../images/aiLogos.png'
  

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
        history.push('/courses/fullstack/microservicedesign-info');
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

    const handleClickCircleCi = () => {
        history.push('/courses/fullstack/circleci-info');
    };

    const handleClickGitHubActions = () => {
        history.push('/courses/fullstack/githubactions-info');
    };

    const handleClickAi = () => {
        history.push('/courses/fullstack/ai-info');
    };

    const handleClickMachineLearning = () => {
        history.push('/courses/fullstack/machinelearning-info');
    };


    return(
        <Stack  width={'100'} height={480} direction={'row'} display={'flex'}>

            {/* first box */}
            <Box width={'26%'} height={'auto'} sx={{border:'1px solid gray', borderRadius:'2%'}} margin={'1%'}>
                <Typography fontFamily={'Poppins'} fontWeight={'700'} fontSize={'16px'} lineHeight={'24px'} textAlign={'left'} justifyContent={'center'} sx={{ml:3}}>
                    FRONT END
                </Typography>

                <Stack direction={"row"} spacing={3} sx={{mt:1, ml:3}}>

                    <Stack >
                <Box sx={{ borderRadius:'5%', display: 'flex', justifyContent: 'center', alignItems: 'center' , border:'1px solid #D81B0E'}} width={70} height={70}>
                    <img alt='Html Logo' src={htmlLogo} width={40} height={40} style={{ cursor: 'pointer', marginBottom:22 }} onClick={handleClickHtml}></img>
                    
                </Box>
                <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>HTML 5</Typography>
                </Stack>

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E'}}  width={70} height={70}>
                    <img alt='Css Logo' src={cssLogo} width={40} height={40} style={{ cursor: 'pointer', marginBottom:22 }} onClick={handleClickCss}></img>
                </Box>
                <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>CSS 3</Typography>
                </Stack>

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E'}} width={70} height={70}>
                    <img alt='BootStrap Logo' src={bootStrapLogo} width={35} height={35} style={{ cursor: 'pointer', marginBottom:22 }} onClick={handleClickBootstrap}></img>
                </Box>
                <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Bootstrap</Typography>
                </Stack>

                </Stack>


                <Stack direction={"row"} spacing={3} sx={{mt:1, ml:3}}>

                    <Stack>
                     <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center' , border:'1px solid #D81B0E', mt:1}} width={70} height={70}>
                    <img alt='React Logo' src={reactLogo} width={40} height={40} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickReact}></img>
                </Box>
                <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>React</Typography>
                </Stack>

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E', mt:1}}  width={70} height={70}>
                    <img alt='JavaScript Logo' src={javaScriptLogo} width={40} height={40} style={{ cursor: 'pointer', marginBottom:20 }} onClick={handleClickJs}></img>
                </Box>
                <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>JavaScript</Typography>
                </Stack>

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E', mt:1}}  width={70} height={70}>
                    <img alt='TypeScript Logo' src={typeScriptLogo} width={35} height={35} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickTs}></img>
                </Box>
                <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>TypeScript</Typography>
                </Stack>
                </Stack>
                <Divider sx={{ width: '80%', mx: 'auto', mt:4 }}></Divider>
                <Typography fontFamily={'Poppins'} fontWeight={'700'} fontSize={'16px'} lineHeight={'24px'} textAlign={'left'} justifyContent={'center'} sx={{ml:3,mt:3}}>
                    CI/CD OPTIONS
                </Typography>
                
                <Stack direction={"row"} spacing={3} sx={{mt:1, ml:3}}>

                    <Stack>
                    <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E'}}   width={70} height={70}>
                    <img alt='Jenkins Logo' src={jenkinsLogo} width={35} height={40} style={{ cursor: 'pointer', marginBottom:12 }} onClick={handleClickJenkins}></img>
                    </Box>
                    <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Jenkins</Typography>
                    </Stack>

                    <Stack>
                    <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E'}}  width={70} height={70}>
                    <img alt='Devops Logo' src={devopsLogo} width={50} height={40} style={{ cursor: 'pointer', marginBottom:15 }} onClick={handleClickDevops}></img>
                    </Box>
                    <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>DevOps</Typography>
                    </Stack>

                    <Stack>
                    <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E'}}  width={70} height={70}>
                    <img alt='Gitlab Logo' src={gitlabLogo} width={40} height={40} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickGitlab}></img>
                    </Box>
                    <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>GitLab</Typography>
                    </Stack>
                    </Stack>

                    <Stack direction={'row'} spacing={3} sx={{mt:1, ml:3}}>
                    <Stack>
                    <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E', mt:1}}  width={70} height={70}>
                    <img alt='CircleCi Logo' src={CircleCiLogo} width={35} height={35} style={{ cursor: 'pointer', marginBottom:15 }} onClick={handleClickCircleCi}></img>
                    </Box>
                    <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Circle CI</Typography>
                    </Stack>

                    <Stack>
                    <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E', mt:1}}  width={70} height={70}>
                    <img alt='GitHubActions Logo' src={GitHubActionsLogo} width={50} height={40} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickGitHubActions}></img>
                    </Box>
                    <Typography sx={{mt:-3.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>GitHub</Typography>
                    <Typography fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Actions</Typography>
                    </Stack>

                </Stack>
                </Box>

                {/* {second box} */}

            <Box width={'26%'} height={'auto'} sx={{border:'1px solid gray', borderRadius:'2%'}} margin={'1%'}>
                
                 <Typography fontFamily={'Poppins'} fontWeight={'700'} fontSize={'16px'} lineHeight={'24px'} textAlign={'left'} justifyContent={'center'} sx={{ml:2.4}}>
                    CLOUD
                </Typography>
                <Stack direction={"row"} spacing={3} sx={{mt:1, ml:2.3}} >
                    <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E'}}  width={70} height={70}>
                    <img alt='Aws Logo' src={awsLogo} width={55} height={35} style={{ cursor: 'pointer', marginBottom:18 }} onClick={handleClickAws}></img>
                </Box>
                <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>AWS</Typography>
                </Stack>

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E'}}  width={70} height={70}>
                    <img alt='Azure Logo' src={azureLogo} width={40} height={40} style={{ cursor: 'pointer', marginBottom:18 }} onClick={handleClickAzure}></img>
                </Box>
                <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Azure</Typography>
                </Stack>

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E'}}  width={70} height={70}>
                    <img alt='GoogleCloud Logo' src={glcloudLogo} width={40} height={38} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickGooglecloud}></img>
                </Box>
                <Typography sx={{mt:-3.8}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Google</Typography>
                <Typography fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Cloud</Typography>
                </Stack>
                </Stack>
                <Divider sx={{ width: '80%', mx: 'auto',mt:3 }}></Divider>
                <Typography fontFamily={'Poppins'} fontWeight={'700'} fontSize={'16px'} lineHeight={'24px'} textAlign={'left'} justifyContent={'center'} sx={{ml:2.4,mt:3}}>
                    DEPLOYMENT OPTIONS
                </Typography>

                <Stack direction={"row"} spacing={3} sx={{mt:1.4, ml:2.3}} display={'flex'} justifyContent={'left'} alignSelf={'left'}>
                    <Stack >
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'left', border:'1px solid #D81B0E'}}  width={70} height={70}>
                    <img alt='Docker Logo' src={dockerLogo} width={120} height={120} style={{ cursor: 'pointer', marginTop:-33 }} onClick={handleClickDocker}></img>
                </Box>
                <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Docker</Typography>
                </Stack>

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'left', border:'1px solid #D81B0E'}}  width={70} height={70}>
                    <img alt='Kubernetes Logo' src={kubernetesLogo} width={40} height={40} style={{ cursor: 'pointer', marginTop:5 }} onClick={handleClickKubernetes}></img>
                </Box>
                <Typography sx={{mt:-2.4}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Kubernetes</Typography>
                </Stack>
                </Stack>
                <Divider sx={{ width: '80%', mx: 'auto', mt:3 }}></Divider>
                <Typography fontFamily={'Poppins'} fontWeight={'700'} fontSize={'16px'} lineHeight={'24px'} textAlign={'left'} justifyContent={'center'} sx={{ml:2.4,mt:2}}>
                    DATABASES
                </Typography>
                
                <Stack direction={"row"} spacing={3} sx={{mt:1.4, ml:2.3}}>
                <Stack>
                   <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E'}} width={70} height={70}>
                    <img alt='Oracle Logo' src={oracleLogo} width={50} height={50} style={{ cursor: 'pointer', marginBottom:15 }} onClick={handleClickOracle}></img>
                   </Box>
                   <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Oracle</Typography>
                   </Stack>
                   <Stack>
                   <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E'}} width={70} height={70}>
                    <img alt='MongoDb Logo' src={mongoDbLogo} width={75} height={45} style={{ cursor: 'pointer', marginBottom:12 }} onClick={handleClickMongoDb}></img>
                   </Box>
                   <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>MongoDb</Typography>
                   </Stack>
                </Stack>
                
            </Box>

            {/* {3rd box} */}


            <Box width={'43%'} height={'auto'} sx={{border:'1px solid gray', borderRadius:'2%'}} margin={'1%'}>
                
                <Typography fontFamily={'Poppins'} fontWeight={'700'} fontSize={'16px'} lineHeight={'24px'} textAlign={'left'} justifyContent={'center'} sx={{ml:1.5}}>
                    BACKEND
                </Typography>

                <Stack direction={"row"} spacing={2} sx={{mt:1, ml:1.6, mr:2}}> 
                    <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E'}}  width={70} height={70}>
                    <img alt='Java Logo' src={javaLogo} width={35} height={35} style={{ cursor: 'pointer', marginBottom:20 }} onClick={handleClickJava}></img>
                </Box>
                <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Java</Typography>
                </Stack>

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E'}}  width={70} height={70}>
                    <img alt='SpringBoot Logo' src={springBootLogo} width={50} height={40} style={{ cursor: 'pointer', marginBottom:20 }} onClick={handleClickSpringBoot}></img>
                </Box>
                <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>SpringBoot</Typography>
                </Stack>

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E'}} width={70} height={70}>
                    <img alt='Maven Logo' src={mavenLogo} width={40} height={25} style={{ cursor: 'pointer', marginBottom:12 }} onClick={handleClickMaven}></img>
                </Box>
                <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Maven</Typography>
                </Stack>

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E'}} width={70} height={70}>
                    <img alt='SpringSecurity Logo' src={springSecurityLogo} width={55} height={25} style={{ cursor: 'pointer', marginBottom:30 }} onClick={handleClickSpringSecurity}></img>
                </Box>
                <Typography sx={{mt:-3.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Spring </Typography>
                <Typography fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Security </Typography>
                </Stack>

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E'}}  width={70} height={70}>
                    <img alt='MicroserviceDesign Logo' src={microserviceDesignLogo} width={60} height={42} style={{ cursor: 'pointer', marginBottom:15 }} onClick={handleClickMicroserviceDesign}></img>
                </Box>
                    <Typography sx={{mt:-3.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Micro</Typography>
                    <Typography fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>services</Typography>
                   </Stack>

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E'}}  width={70} height={70}>
                    <img alt='Swagger Logo' src={swaggerLogo} width={40} height={30} style={{ cursor: 'pointer', marginBottom:15 }} onClick={handleClickSwagger}></img>
                </Box>
                    <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Swagger</Typography>
                </Stack>
                </Stack>

                <Stack direction={"row"} spacing={2} sx={{mt:1, ml:1.6, mr:2}}>
                    

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E'}}  width={70} height={70}>
                    <img alt='ElasticStack Logo' src={elasticStackLogo} width={40} height={40} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickElasticChange}></img>
                </Box>
                <Typography sx={{mt:-3.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Elastic</Typography>
                <Typography fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>stack</Typography>
                </Stack>
                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E'}}  width={70} height={70}>
                    <img alt='EhCache Logo' src={ehCacheLogo} width={40} height={40} style={{ cursor: 'pointer', marginBottom:20 }} onClick={handleClickEhCache}></img>
                </Box>
                <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Ehcache</Typography>
                </Stack>
                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E'}}  width={70} height={70}>
                    <img alt='Kafka Logo' src={kafkaLogo} width={40} height={35} style={{ cursor: 'pointer', marginBottom:20 }} onClick={handleClickKafka}></img>
                </Box>
                <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Kafka</Typography>
                </Stack>
                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E'}}  width={70} height={70}>
                    <img alt='Redis Logo' src={redisLogo} width={40} height={40} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickRedis}></img>
                </Box>
                <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Redis</Typography>
                </Stack>

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E'}}  width={70} height={70}>
                    <img alt='Hibernate Logo' src={hibernateLogo} width={35} height={35} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickHibernate}></img>
                </Box>
                <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Hibernate</Typography>
                </Stack>
                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E'}}  width={70} height={70}>
                    <img alt='Prometheus Logo' src={PrometheusLogo} width={35} height={35} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickPrometheus}></img>
                </Box>
                <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Prometheus</Typography>
                </Stack>

                </Stack>
                <Divider sx={{ width: '90%', mx: 'auto' , mt:2}}></Divider>
                <Stack spacing={3} sx={{mt:1, ml:1.6, mr:2}}>
                
                <Typography fontFamily={'Poppins'} fontWeight={'700'} fontSize={'16px'} lineHeight={'24px'} textAlign={'left'} justifyContent={'center'} sx={{ml:1.5,mt:2}}>
                    ARCHITECT ESSENTIALS
                </Typography>

                <Stack direction={'row'} spacing={2} >
               <Stack>
               <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E', mt:-2}} width={70} height={70}>
                    <img alt='SystemDesign Logo' src={SystemDesignLogo} width={35} height={35} style={{ cursor: 'pointer', marginBottom:25}} onClick={handleClickSystemDesign}></img>
                </Box>
                <Typography sx={{mt:-3.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>System</Typography>
                <Typography fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Design</Typography>
               </Stack>

               <Stack >
               <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E', mt:-2}} width={70} height={70}>
                    <img alt='DebuggingSkills Logo' src={DebuggingSkillsLogo} width={35} height={35} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickDebuggingSkills}></img>
                </Box>
                <Typography sx={{mt:-3.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Debugging</Typography>
                <Typography fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Skills</Typography>
               </Stack>

               <Stack>
               <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E', mt:-2}} width={70} height={70}>
                    <img alt='EnterpriseArchitecture Logo' src={EnterpriseArchitectureLogo} width={75} height={40} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickEnterpriseArchitecture}></img>
                </Box>
                <Typography sx={{mt:-3.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Enterprise</Typography>
                <Typography fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Architecture</Typography>
               </Stack>

               <Stack>
               <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E', mt:-2}} width={70} height={70}>
                    <img alt='CapacityPlanning Logo' src={CapacityPlanningLogo} width={35} height={35} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickCapacityPlanning}></img>
                </Box>
                <Typography sx={{mt:-3.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Capacity</Typography>
                <Typography fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Planning</Typography>
               </Stack>
                
                </Stack>
                </Stack>
                <Divider sx={{ width: '90%', mx: 'auto' , mt:2}}></Divider>
                <Stack sx={{mt:1, ml:1.6, mr:2}}>
                
                <Typography fontFamily={'Poppins'} fontWeight={'700'} fontSize={'16px'} lineHeight={'24px'} textAlign={'left'} justifyContent={'center'}>
                    EXCLUSIVE COURSES
                </Typography>

                <Stack direction={'row'} spacing={2}>

                <Stack>
               <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E', mt:0.5}} width={70} height={70}>
                    <img alt='Ai Logo' src={aiLogo} width={35} height={35} style={{ cursor: 'pointer', marginBottom:20 }} onClick={handleClickAi}></img>
                </Box>
                <Typography sx={{mt:-2.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Ai</Typography>
               </Stack>

               <Stack>
               <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid #D81B0E', mt:0.5}} width={70} height={70}>
                    <img alt='machineLearningLogo Logo' src={machineLearningLogo} width={35} height={35} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickMachineLearning}></img>
                </Box>
                <Typography sx={{mt:-3.5}} fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Machine</Typography>
                <Typography fontFamily={'Poppins'} fontWeight={'600'} fontSize={'11px'} lineHeight={'12.89px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Learning</Typography>
               </Stack>

               <Stack>
                <Button size="large" sx={{ width: "130%", height: 95, mt: -2.4, ml: 4, bgcolor: '#D81B0E', color: 'white', '&:hover': {bgcolor: 'darkred',},}}>
                    <Stack>
                    <Typography fontWeight={'bold'} display={'flex'} variant="h5" justifyContent={'center'}>
                        FULL STACK
                    </Typography>
                    <Typography fontWeight={'bold'} display={'flex'} variant="h5" justifyContent={'center'}>
                        ENGINEERING
                    </Typography>
                    </Stack>
                </Button>
                </Stack>
                </Stack>
                </Stack>
            </Box>   
        </Stack>
    )
}

export default Body;
