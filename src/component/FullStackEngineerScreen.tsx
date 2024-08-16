import { Box} from '@mui/material';
import AppBarComponent from './Appbarcomponent';
import FullStackCource from './Fullstackcourcedetail';
import Body from './Body';

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