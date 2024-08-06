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
import SystemDesignInfo from './info/SystemDesignIngo'
import DebuggingSkillsInfo from './info/DebuggingSkillsInfo'
import EnterpriseArchitectureInfo from './info/EnterpriseArchitectureInfo'
import CapacityPlanningInfo from './info/CapacityPlanningInfo'
import FullstackEngineerScreen from './component/FullStackEngineerScreen';
import Home from './component/home';
import Courses from './component/courses';

function App() {

  return (
  <Router>
    <Box className="App">
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/fullstack-engineer" component={FullstackEngineerScreen} />
      <Route path="/courses" component={Courses} />
      <Route path="/html-info" component={HtmlInfo} />
      <Route path="/css-info" component={CssInfo} />
      <Route path="/bootstrap-info" component={BootStrapInfo} />
      <Route path="/react-info" component={ReactInfo} />
      <Route path="/js-info" component={JslInfo} />
      <Route path="/ts-info" component={TsInfo} />
      <Route path="/jenkins-info" component={JenkinsInfo} />
      <Route path="/devops-info" component={DevOpsInfo} />
      <Route path="/gitlab-info" component={GitlabInfo} />
      <Route path="/aws-info" component={AwsInfo} />
      <Route path="/azure-info" component={AzureInfo} />
      <Route path="/googlecloud-info" component={GoogleCloudInfo} />
      <Route path="/docker-info" component={DockerInfo} />
      <Route path="/kubernetes-info" component={kupernetsInfo} />
      <Route path="/java-info" component={JavaInfo} />
      <Route path="/springboot-info" component={SpringBootInfo} />
      <Route path="/maven-info" component={MavenInfo} />
      <Route path="/springsecurity-info" component={SpringSecurityInfo} />
      <Route path="/hibernate-info" component={HibernateInfo} />
      <Route path="/microsservicedesign-info" component={MicroserviceDesignInfo} />
      <Route path="/oracle-info" component={OracleInfo} />
      <Route path="/mongodb-info" component={MongoDbInfo} />
      <Route path="/redis-info" component={RedisInfo} />
      <Route path="/ehcache-info" component={EhCacheInfo} />
      <Route path="/ai-info" component={AiInfo} />
      <Route path="/machinelearning-info" component={MachineLearningInfo} />
      <Route path="/swagger-info" component={SwaggerInfo} />
      <Route path="/kafka-info" component={KafkaInfo} />
      <Route path="/elasticstack-info" component={ElasticStackInfo} />
      <Route path="/circleci-info" component={CircleCiInfo} />
      <Route path="/githubactions-info" component={GitHubActionsInfo} />
      <Route path="/prometheus-info" component={PrometheusInfo} />
      <Route path="/systemdesign-info" component={SystemDesignInfo} />
      <Route path="/debuggingskills-info" component={DebuggingSkillsInfo} />
      <Route path="/enterprisearchitecture-info" component={EnterpriseArchitectureInfo} />
      <Route path="/capacityplanning-info" component={CapacityPlanningInfo} />
      </Switch>
    </Box>
  </Router>
  );
}

export default App;
