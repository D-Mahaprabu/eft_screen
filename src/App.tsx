import './App.css';
import Body from './component/body';
import Headers from './component/Header';
import { Box } from '@mui/material';




function App() {
  return (
    <Box className="App" sx={{border:3, color:'#8AC1C9', bgcolor:'#B5C2D2'}}>
     <Headers></Headers>
     <Body></Body>
    </Box>
  );
}

export default App;
