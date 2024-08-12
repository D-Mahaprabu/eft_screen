import { Stack, Box, Typography, Card } from "@mui/material";
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
import { Height } from "@mui/icons-material";
  

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
        <Stack height={'auto'} width={'100'} direction={'row'} >
            <Box  width={'30%'} height={'auto'}>
                <Card sx={{height:'381px'}}>
                <Typography fontStyle={'Dancing Script'} textAlign={'left'} justifyContent={'center'} variant="h6" sx={{fontWeight:'bold', ml:1}}>
                    Front End
                </Typography>

                <Stack direction={"row"} spacing={3} sx={{mt:1, ml:3}}>

                    <Stack >
                <Box sx={{ borderRadius:'5%', display: 'flex', justifyContent: 'center', alignItems: 'center' , border:'1px solid red'}} width={80} height={80}>
                    <img alt='Html Logo' src={htmlLogo} width={47} height={50} style={{ cursor: 'pointer', marginBottom:22 }} onClick={handleClickHtml}></img>
                    
                </Box>
                <Typography sx={{mt:-2}} justifyContent={'center'} display={'flex'} alignItems={'center'} variant="caption">HTML5</Typography>
                </Stack>

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}}  width={80} height={80}>
                    <img alt='Css Logo' src={cssLogo} width={50} height={51} style={{ cursor: 'pointer', marginBottom:22 }} onClick={handleClickCss}></img>
                </Box>
                <Typography sx={{mt:-2}} justifyContent={'center'} display={'flex'} alignItems={'center'} variant="caption">CSS</Typography>
                </Stack>

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}} width={80} height={80}>
                    <img alt='BootStrap Logo' src={bootStrapLogo} width={60} height={50} style={{ cursor: 'pointer', marginBottom:22 }} onClick={handleClickBootstrap}></img>
                </Box>
                <Typography sx={{mt:-2}} justifyContent={'center'} display={'flex'} alignItems={'center'} variant="caption">BootsTrap</Typography>
                </Stack>

                </Stack>


                <Stack direction={"row"} spacing={3} sx={{mt:1, ml:3}}>
                    <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center' , border:'1px solid red'}} width={80} height={80}>
                    <img alt='React Logo' src={reactLogo} width={110} height={60} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickReact}></img>
                </Box>
                <Typography sx={{mt:-2}} justifyContent={'center'} display={'flex'} alignItems={'center'} variant="caption">React</Typography>
                </Stack>

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}}  width={80} height={80}>
                    <img alt='JavaScript Logo' src={javaScriptLogo} width={55} height={45} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickJs}></img>
                </Box>
                <Typography sx={{mt:-2}} justifyContent={'center'} display={'flex'} alignItems={'center'} variant="caption">JavaScript</Typography>
                </Stack>

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}}  width={80} height={80}>
                    <img alt='TypeScript Logo' src={typeScriptLogo} width={80} height={48} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickTs}></img>
                </Box>
                <Typography sx={{mt:-2}} justifyContent={'center'} display={'flex'} alignItems={'center'} variant="caption">TypeScript</Typography>
                </Stack>

                </Stack>
                
                <Stack direction={"row"} spacing={3} sx={{mt:1, ml:3}}>

                    <Stack>
                    <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}}   width={80} height={80}>
                    <img alt='Jenkins Logo' src={jenkinsLogo} width={55} height={55} style={{ cursor: 'pointer', marginBottom:30 }} onClick={handleClickJenkins}></img>
                    </Box>
                    </Stack>

                    <Stack>
                    <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}}  width={80} height={80}>
                    <img alt='Devops Logo' src={devopsLogo} width={63} height={37} style={{ cursor: 'pointer', marginBottom:15 }} onClick={handleClickDevops}></img>
                    </Box>
                    <Typography sx={{mt:-2}} justifyContent={'center'} display={'flex'} alignItems={'center'} variant="caption">DevOps</Typography>
                    </Stack>

                    <Stack>
                    <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}}  width={80} height={80}>
                    <img alt='Gitlab Logo' src={gitlabLogo} width={60} height={45} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickGitlab}></img>
                    </Box>
                    <Typography sx={{mt:-2}} justifyContent={'center'} display={'flex'} alignItems={'center'} variant="caption">GitLab</Typography>
                    </Stack>

                </Stack>
                </Card>
                </Box>

                {/* {second box} */}

            <Box width={'30%'} height={'auto'} >
                <Card>
                 <Typography fontStyle={'Dancing Script'} textAlign={'left'} justifyContent={'center'} variant="h6" sx={{fontWeight:'bold', ml:1}} color={'black'}>
                    Cloud
                </Typography>
                <Stack direction={"row"} spacing={3} sx={{mt:1, ml:2.3}} >
                    <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}}  width={80} height={80}>
                    <img alt='Aws Logo' src={awsLogo} width={55} height={35} style={{ cursor: 'pointer', marginBottom:18 }} onClick={handleClickAws}></img>
                </Box>
                <Typography sx={{mt:-2}} justifyContent={'center'} display={'flex'} alignItems={'center'} variant="caption">AWS</Typography>
                </Stack>

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}}  width={80} height={80}>
                    <img alt='Azure Logo' src={azureLogo} width={65} height={30} style={{ cursor: 'pointer', marginBottom:18 }} onClick={handleClickAzure}></img>
                </Box>
                <Typography sx={{mt:-2}} justifyContent={'center'} display={'flex'} alignItems={'center'} variant="caption">Azure</Typography>
                </Stack>

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}}  width={80} height={80}>
                    <img alt='GoogleCloud Logo' src={glcloudLogo} width={40} height={38} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickGooglecloud}></img>
                </Box>
                <Typography sx={{mt:-2}} justifyContent={'center'} display={'flex'} alignItems={'center'} variant="caption">Google Cloud</Typography>
                </Stack>
                </Stack>

                <Typography fontStyle={'Dancing Script'} textAlign={'left'} justifyContent={'center'} variant="h6" sx={{fontWeight:'bold', ml:1}} color={'black'}>
                    Deployment Options
                </Typography>

                <Stack direction={"row"} spacing={5} sx={{mt:1.4, ml:9.1}}>
                    <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}}  width={80} height={80}>
                    <img alt='Docker Logo' src={dockerLogo} width={53} height={60} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickDocker}></img>
                </Box>
                <Typography sx={{mt:-2}} justifyContent={'center'} display={'flex'} alignItems={'center'} variant="caption">Docker</Typography>
                </Stack>

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}}  width={80} height={80}>
                    <img alt='Kubernetes Logo' src={kubernetesLogo} width={60} height={50} style={{ cursor: 'pointer', marginBottom:30 }} onClick={handleClickKubernetes}></img>
                </Box>
                <Typography sx={{mt:-2}} justifyContent={'center'} display={'flex'} alignItems={'center'} variant="caption">Kubernetes</Typography>
                </Stack>
                </Stack>


                <Typography fontStyle={'Dancing Script'} textAlign={'left'} justifyContent={'center'} variant="h6" sx={{fontWeight:'bold', ml:1,mt:0.8}}>
                    Databases
                </Typography>
                
                <Stack direction={"row"} spacing={5} sx={{mt:0.5, ml:9.1}}>
                <Stack>
                   <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}} width={90} height={80}>
                    <img alt='Oracle Logo' src={oracleLogo} width={90} height={60} style={{ cursor: 'pointer', marginBottom:8 }} onClick={handleClickOracle}></img>
                   </Box>
                   <Typography sx={{mt:-2}} justifyContent={'center'} display={'flex'} alignItems={'center'} variant="caption">Oracle</Typography>
                   </Stack>
                   <Stack>
                   <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}} width={80} height={80}>
                    <img alt='MongoDb Logo' src={mongoDbLogo} width={70} height={70} style={{ cursor: 'pointer', marginBottom:12 }} onClick={handleClickMongoDb}></img>
                   </Box>
                   <Typography sx={{mt:-2}} justifyContent={'center'} display={'flex'} alignItems={'center'} variant="caption">MongoDb</Typography>
                   </Stack>
                </Stack>
                </Card>
            </Box>

            {/* {3rd box} */}


            <Box width={'40%'} height={'auto'} >
                <Card>
                <Typography fontStyle={'Dancing Script'} textAlign={'left'} justifyContent={'center'} sx={{fontWeight:'bold', ml:1}} color={'black'} variant="h6" >
                    Backend
                </Typography>
                <Stack direction={"row"} spacing={3} sx={{mt:1, ml:1.6, mr:2}}> 
                    <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}}  width={80} height={80}>
                    <img alt='Java Logo' src={javaLogo} width={55} height={42} style={{ cursor: 'pointer', marginBottom:20 }} onClick={handleClickJava}></img>
                </Box>
                <Typography sx={{mt:-2}} justifyContent={'center'} display={'flex'} alignItems={'center'} variant="caption">Java</Typography>
                </Stack>

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}}  width={80} height={80}>
                    <img alt='SpringBoot Logo' src={springBootLogo} width={55} height={55} style={{ cursor: 'pointer', marginBottom:30 }} onClick={handleClickSpringBoot}></img>
                </Box>
                <Typography sx={{mt:-2}} justifyContent={'center'} display={'flex'} alignItems={'center'} variant="caption">SpringBoot</Typography>
                </Stack>

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}} width={80} height={80}>
                    <img alt='Maven Logo' src={mavenLogo} width={60} height={30} style={{ cursor: 'pointer', marginBottom:12 }} onClick={handleClickMaven}></img>
                </Box>
                <Typography sx={{mt:-2}} justifyContent={'center'} display={'flex'} alignItems={'center'} variant="caption">Maeven</Typography>
                </Stack>

                <Stack>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}} width={80} height={80}>
                    <img alt='SpringSecurity Logo' src={springSecurityLogo} width={50} height={50} style={{ cursor: 'pointer', marginBottom:30 }} onClick={handleClickSpringSecurity}></img>
                </Box>
                <Typography sx={{mt:-2}} justifyContent={'center'} display={'flex'} alignItems={'center'} variant="caption" color={'black'}>Spring</Typography>
                </Stack>

                </Stack>
                <Stack direction={"row"} spacing={3} sx={{mt:1, ml:1.6, mr:2}}>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}}  width={80} height={80}>
                    <img alt='MicroserviceDesign Logo' src={microserviceDesignLogo} width={60} height={42} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickMicroserviceDesign}></img>
                </Box>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}}  width={80} height={80}>
                    <img alt='Swagger Logo' src={swaggerLogo} width={70} height={55} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickSwagger}></img>
                </Box>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}}  width={80} height={80}>
                    <img alt='ElasticStack Logo' src={elasticStackLogo} width={52} height={52} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickElasticChange}></img>
                </Box>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}}  width={80} height={80}>
                    <img alt='EhCache Logo' src={ehCacheLogo} width={60} height={57} style={{ cursor: 'pointer', marginBottom:20 }} onClick={handleClickEhCache}></img>
                </Box>
                </Stack>
                <Stack direction={"row"} spacing={3} sx={{mt:1, ml:1.6, mr:2}}>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}}  width={80} height={80}>
                    <img alt='Kafka Logo' src={kafkaLogo} width={55} height={48} style={{ cursor: 'pointer', marginBottom:20 }} onClick={handleClickKafka}></img>
                </Box>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}}  width={80} height={80}>
                    <img alt='Redis Logo' src={redisLogo} width={50} height={50} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickRedis}></img>
                </Box>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}}  width={80} height={80}>
                    <img alt='Hibernate Logo' src={hibernateLogo} width={60} height={55} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickHibernate}></img>
                </Box>
                <Box sx={{ borderRadius: '5%',  display: 'flex', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}}  width={80} height={80}>
                    <img alt='Prometheus Logo' src={PrometheusLogo} width={55} height={55} style={{ cursor: 'pointer', marginBottom:25 }} onClick={handleClickPrometheus}></img>
                </Box>
                </Stack>
                </Card>
            </Box>   
        </Stack>
    )
}

export default Body;