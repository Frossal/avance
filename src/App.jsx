import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import ContentMenuPelis from './components/ContentMenuPelis.jsx';
import {Box , Stack} from "@mui/material";
import PageContPeli from './PageContPeli.jsx';


function App() {
    return (

      //esto es el contenido de los menus
      <Box>
        <Header/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar/>
          <PageContPeli/>
        </Stack>
      </Box>
    
    );
  }

export default App;
