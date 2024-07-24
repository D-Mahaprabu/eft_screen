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


function App() {
  return (
  <Router>
    <Box className="App">
      <Route exact path="/">
      <Headers></Headers>
      <Body></Body>
      </Route>
      <Switch>
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
