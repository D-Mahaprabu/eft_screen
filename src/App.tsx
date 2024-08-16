import './App.css';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import JavaInfo from './info/JavaInfo';
import SpringBootInfo from './info/SpringBootInfo';
import MavenInfo from './info/MavenInfo';
import SpringSecurityInfo from './info/SpringSecurityInfo';
import HibernateInfo from './info/HibernateInfo';
import MicroserviceDesignInfo from './info/MicroserviceDesignInfo';
import OracleInfo from './info/OracleInfo';
import MongoDbInfo from './info/MongoDbInfo';
import RedisInfo from './info/RedisInfo';
import EhCacheInfo from './info/EhCacheInfo';
import AiInfo from './info/AiInfo';
import MachineLearningInfo from './info/MachineLearningInfo';
import SwaggerInfo from './info/SwaggerInfo';
import KafkaInfo from './info/KafkaInfo';
import ElasticStackInfo from './info/ElasticStackInfo';
import HtmlInfo from './info/Htmlinfo';
import CssInfo from './info/CssInfo';
import BootStrapInfo from './info/BootstrapInfo';
import ReactInfo from './info/ReactInfo';
import JslInfo from './info/JsInfo';
import TsInfo from './info/TsInfo';
import JenkinsInfo from './info/JenKinsInfo';
import DevOpsInfo from './info/DevOpsInfo';
import GitlabInfo from './info/GitLabInfo';
import AwsInfo from './info/AwsInfo';
import AzureInfo from './info/AzureInfo';
import GoogleCloudInfo from './info/GoogleCloudInfo';
import DockerInfo from './info/DockerInfo';
import kupernetsInfo from './info/KubernetesInfo';
import CircleCiInfo from './info/CircleCiInfo';
import GitHubActionsInfo from './info/GitHubActionsInfo';
import PrometheusInfo from './info/PrometheusInfo';
import SystemDesignInfo from './info/SystemDesignInfo'
import DebuggingSkillsInfo from './info/DebuggingSkillsInfo'
import EnterpriseArchitectureInfo from './info/EnterpriseArchitectureInfo'
import CapacityPlanningInfo from './info/CapacityPlanningInfo'
import FullstackEngineerScreen from './component/FullStackEngineerScreen';
import Home from './component/Home';
import Aboutus from './component/Aboutus';
import Contactus from './component/Contactus';

function App() {

  return (
  <Router> 
    <Box className="App">
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/courses" exact component={Home} />
      <Route path="/courses/fullstack" exact component={FullstackEngineerScreen} />
      <Route path="/courses/fullstack/html-info" component={HtmlInfo} />
      <Route path="/courses/fullstack/css-info" component={CssInfo} />
      <Route path="/courses/fullstack/bootstrap-info" component={BootStrapInfo} />
      <Route path="/courses/fullstack/react-info" component={ReactInfo} />
      <Route path="/courses/fullstack/js-info" component={JslInfo} />
      <Route path="/courses/fullstack/ts-info" component={TsInfo} />
      <Route path="/courses/fullstack/jenkins-info" component={JenkinsInfo} />
      <Route path="/courses/fullstack/devops-info" component={DevOpsInfo} />
      <Route path="/courses/fullstack/gitlab-info" component={GitlabInfo} />
      <Route path="/courses/fullstack/aws-info" component={AwsInfo} />
      <Route path="/courses/fullstack/azure-info" component={AzureInfo} />
      <Route path="/courses/fullstack/googlecloud-info" component={GoogleCloudInfo} />
      <Route path="/courses/fullstack/docker-info" component={DockerInfo} />
      <Route path="/courses/fullstack/kubernetes-info" component={kupernetsInfo} />
      <Route path="/courses/fullstack/java-info" component={JavaInfo} />
      <Route path="/courses/fullstack/springboot-info" component={SpringBootInfo} />
      <Route path="/courses/fullstack/maven-info" component={MavenInfo} />
      <Route path="/courses/fullstack/springsecurity-info" component={SpringSecurityInfo} />
      <Route path="/courses/fullstack/hibernate-info" component={HibernateInfo} />
      <Route path="/courses/fullstack/microservicedesign-info" component={MicroserviceDesignInfo} />
      <Route path="/courses/fullstack/oracle-info" component={OracleInfo} />
      <Route path="/courses/fullstack/mongodb-info" component={MongoDbInfo} />
      <Route path="/courses/fullstack/redis-info" component={RedisInfo} />
      <Route path="/courses/fullstack/ehcache-info" component={EhCacheInfo} />
      <Route path="/courses/fullstack/ai-info" component={AiInfo} />
      <Route path="/courses/fullstack/machinelearning-info" component={MachineLearningInfo} />
      <Route path="/courses/fullstack/swagger-info" component={SwaggerInfo} />
      <Route path="/courses/fullstack/kafka-info" component={KafkaInfo} />
      <Route path="/courses/fullstack/elasticstack-info" component={ElasticStackInfo} />
      <Route path="/courses/fullstack/circleci-info" component={CircleCiInfo} />
      <Route path="/courses/fullstack/githubactions-info" component={GitHubActionsInfo} />
      <Route path="/courses/fullstack/prometheus-info" component={PrometheusInfo} />
      <Route path="/courses/fullstack/systemdesign-info" component={SystemDesignInfo} />
      <Route path="/courses/fullstack/debuggingskills-info" component={DebuggingSkillsInfo} />
      <Route path="/courses/fullstack/enterprisearchitecture-info" component={EnterpriseArchitectureInfo} />
      <Route path="/courses/fullstack/capacityplanning-info" component={CapacityPlanningInfo} />
      <Route path="/about-us" component={Aboutus} />
      <Route path="/contact-us" component={Contactus} />
      </Switch>
    </Box>
  </Router>
  );
}

export default App;
