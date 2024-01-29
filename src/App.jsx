import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import ContentMenuPelis from './components/ContentMenuPelis.jsx';
import {Box , Stack} from "@mui/material";
import PeliculasDetallePage from './PeliculasDetallePage.jsx';
import SalaItemPage from './SalaItemPage.jsx';


function App() {
    return (

      //esto es el contenido de los menus
      <Box>
        <Header/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar/>
          <SalaItemPage/>
        </Stack>
      </Box>
    
    );
  }

export default App;
