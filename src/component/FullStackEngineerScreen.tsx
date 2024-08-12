import Body from './body';
import Headers from './Header';
import { Box} from '@mui/material';
import Footer from './footer';
import AppBarComponent from './Appbarcomponent';
import FullStackCource from './Fullstackcourcedetail';

const FullstackEngineerScreen = () => {

    return(
        <Box className="Fullstack">
          <AppBarComponent></AppBarComponent>
          <Headers></Headers>
          <Body></Body>
          {/* <Footer></Footer> */}
          <FullStackCource></FullStackCource>
        </Box>
    )
}

export default FullstackEngineerScreen;