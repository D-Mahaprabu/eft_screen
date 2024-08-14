import Body from './body';
import { Box} from '@mui/material';
import AppBarComponent from './Appbarcomponent';
import FullStackCource from './Fullstackcourcedetail';

const FullstackEngineerScreen = () => {

    return(
        <Box className="Fullstack">
          <AppBarComponent></AppBarComponent>
          <Body></Body>
          <FullStackCource></FullStackCource>
        </Box>
    )
}

export default FullstackEngineerScreen;