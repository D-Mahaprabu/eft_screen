import './App.css';
import Body from './component/body';
import Headers from './component/Header';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JavaInfo from './info/JavaInfo';
import SpringBootInfo from './info/SpringBootInfo';
import MavenInfo from './info/MavenInfo';
import SpringSecurityInfo from './info/SpringSecurityInfo';
import HibernateInfo from './info/HibernateInfo';
import MicrosoftServiceInfo from './info/MicrosoftServiceInfo';
import OracleInfo from './info/OracleInfo';
import MangoDbInfo from './info/MangoDbInfo';
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


function App() {
  return (
  <Router>
    <Box className="App">
      <Route exact path="/">
      <Headers></Headers>
      <Body></Body>
      </Route>
      <Switch>
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
      <Route path="/microsoftservice-info" component={MicrosoftServiceInfo} />
      <Route path="/oracle-info" component={OracleInfo} />
      <Route path="/mangodb-info" component={MangoDbInfo} />
      <Route path="/redis-info" component={RedisInfo} />
      <Route path="/ehcache-info" component={EhCacheInfo} />
      <Route path="/ai-info" component={AiInfo} />
      <Route path="/machinelearning-info" component={MachineLearningInfo} />
      <Route path="/swagger-info" component={SwaggerInfo} />
      <Route path="/kafka-info" component={KafkaInfo} />
      <Route path="/elasticstack-info" component={ElasticStackInfo} />
      </Switch>
    </Box>
  </Router>
  );
}

export default App;
