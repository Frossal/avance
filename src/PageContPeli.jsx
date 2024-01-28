import React, { useState } from 'react';
import { Container, Box, Button, TextField } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
const PageContPeli = () => {

  const [searchTerm, setSearchTerm] = useState('');

  return (
   
   
   
    <Box>

        <div style={{ backgroundColor: "#F1690B", display: 'flex', alignItems: 'center', width: '105%', height: '90px', marginTop: '-21px', marginLeft: '-10px' }}>
        <h1 style={{ color: "#FFFFFF", marginLeft: '50px', paddingTop: '10px' }}> &#9776;</h1>
        <h1 style={{ color: "#FFFFFF", padding: '10px', marginLeft: '50px', paddingTop: '20px' }}>Salas de cine ULima </h1>
        <h1 style={{ color: "#FFFFFF", padding: '10px', marginLeft: '800px', paddingTop: '20px' }}>&#9733;</h1>
        <h1 style={{ color: "#FFFFFF", padding: '20px', marginTop: '30px' }}>&#9733;</h1>
        <h1 style={{ color: "#FFFFFF", padding: '20px', marginTop: '30px' }}>&#9733;</h1>
        <h1 style={{ color: "#FFFFFF", padding: '20px', marginTop: '30px' }}>&#9733;</h1>
        <h1 style={{ color: "#FFFFFF", padding: '20px', marginTop: '30px' }}>&#9733;</h1>
      </div>
      
      <Box style={{ display: 'flex' }} >
      <Container style={{ display: 'inline'  }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Universidad_de_Lima_logo.png/230px-Universidad_de_Lima_logo.png"  style={{ maxWidth: '100%', height: '180px', marginTop:'50px', marginLeft:'50px' }} />
          <div >
          <TextField  style={{ marginTop: '50px', width: '300px', height: '90px', marginLeft:'30px' }}
            label="Buscar"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div tyle={{ display: 'flex'}}> 

          <h1 style={{ color:"Black", padding: '20px', marginTop: '0px', fontSize:'25px', marginLeft:'25px',   }}>&#9733; &nbsp; Peliculas</h1>
         

          <h1 style={{  color:"Black",  padding: '20px', marginTop: '20px', fontSize:'25px', marginLeft:'25px'  }}>&#9733; &nbsp; Series</h1>


          </div>

          </div>


        </Container>

      <Container style={{ display: 'inline', margin: '10px'}}>

        <div>
        <h1 style={{fontSize:'45px',marginLeft:'-400px', marginTop:'50px', marginBottom:'-7px'}}>Peliculas</h1>
        <hr style={{ width: '300%', border: '1px solid #ccc', marginLeft:'-400px' }} />
        </div>

        <div>
      <h1 style={{ fontSize: '45px', marginLeft: '-350px', marginTop: '50px', marginBottom: '-7px', fontWeight: '400' }}>
        Beekeeper Sentencia de Muerte
      </h1>
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <PlaceIcon style={{ marginTop: '50px', marginBottom: '-7px',  fontWeight: '400', marginLeft: '-350px' }} />
        <span style={{ marginLeft: '10px', marginTop: '50px', marginBottom: '-7px', color: '#0A90ED', fontWeight: '500', fontSize:'20px' }}>1h 50min</span>
        <PlaceIcon style={{ marginLeft: '10px', marginTop: '50px', marginBottom: '-7px',  fontWeight: '400' }} />
        <span style={{ marginLeft: '10px', marginTop: '50px', marginBottom: '-7px', color: '#0A90ED', fontWeight: '500',fontSize:'20px' }}>Director</span>
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
  <div>
    <img
      src="https://i.ytimg.com/vi/J2pWkhP3ou0/maxresdefault.jpg"
      style={{ maxWidth: '200%', height: '100%', marginTop: '50px', marginLeft: '-350px' }}
    />
  </div>
  <div style={{ marginLeft: '20px', maxWidth: '400px', overflow: 'hidden', border: '2px solid #ddd', borderRadius: '8px', padding: '20px', marginTop: '20px' }}>
    <h1>
      Sinopsis
    </h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <Chip label="Acción" color="primary" variant="outlined" />
    <Chip label="+14" color="primary" variant="outlined" style={{marginLeft:'20px'}} />
  </div>
  </div>


  <div>
  <h1 style={{ fontSize: '45px', marginLeft: '-350px', marginTop: '50px', marginBottom: '-7px', fontWeight: '400' }}>Salas Disponibles</h1>

  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <Box
      sx={{
        width: '100px',
        height: '50px',
        border: '2px solid #ddd',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        marginRight: '20px', 
        marginLeft: '-330px',
        marginTop: '100px',
       
      }}
    >
      <Typography variant="h5">S1</Typography>
    </Box>

    <div style={{ display: 'block', marginLeft: '20px', marginTop: '80px',}}>
      <h1 style={{ fontSize:'30px',marginTop:'30px',marginLeft: '-20px'}}> Sala A</h1>

      <p style={{ fontSize: '20px', marginLeft: '-100px', marginTop: '30px', marginRight: '550px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </p>

      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Box
          sx={{
            marginTop:'40px',
            marginLeft:'-110px',
            width: '100px',
            height: '50px',
            border: '2px dashed purple',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#BB62FD',
          }}
        >
          <Typography variant="h5" style={{ fontSize:'20px' }}>15:00</Typography>
        </Box>
        <Box

          sx={{
            marginTop:'40px',
            width: '100px',
            height: '50px',
            border: '2px dashed purple',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#BB62FD',
            marginLeft: '20px',
          }}
        >
          <Typography variant="h5" style={{ fontSize:'20px' }}>17:00</Typography>
        </Box>
      </div>
    </div>
  </div>


  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <Box
      sx={{
        width: '100px',
        height: '50px',
        border: '2px solid #ddd',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        marginRight: '20px', 
        marginLeft: '-330px',
        marginTop: '100px',
       
      }}
    >
      <Typography variant="h5">S2</Typography>
    </Box>

    <div style={{ display: 'block', marginLeft: '20px', marginTop: '80px',}}>
      <h1 style={{ fontSize:'30px',marginTop:'30px',marginLeft: '-20px'}}> Sala B</h1>

      <p style={{ fontSize: '20px', marginLeft: '-100px', marginTop: '30px', marginRight: '550px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </p>

      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Box
          sx={{
            marginTop:'40px',
            marginLeft:'-110px',
            width: '100px',
            height: '50px',
            border: '2px dashed purple',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#BB62FD',
          }}
        >
          <Typography variant="h5" style={{ fontSize:'20px' }}>17:00</Typography>
        </Box>
        <Box

          sx={{
            marginTop:'40px',
            width: '100px',
            height: '50px',
            border: '2px dashed purple',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#BB62FD',
            marginLeft: '20px',
          }}
        >
          <Typography variant="h5" style={{ fontSize:'20px' }}>18:00</Typography>
        </Box>
      </div>
    </div>
  </div>

  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <Box
      sx={{
        width: '100px',
        height: '50px',
        border: '2px solid #ddd',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        marginRight: '20px', 
        marginLeft: '-330px',
        marginTop: '100px',
       
      }}
    >
      <Typography variant="h5">S3</Typography>
    </Box>

    <div style={{ display: 'block', marginLeft: '20px', marginTop: '80px',}}>
      <h1 style={{ fontSize:'30px',marginTop:'30px',marginLeft: '-20px'}}> Sala C</h1>

      <p style={{ fontSize: '20px', marginLeft: '-100px', marginTop: '30px', marginRight: '550px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </p>

      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Box
          sx={{
            marginTop:'40px',
            marginLeft:'-110px',
            width: '100px',
            height: '50px',
            border: '2px dashed purple',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#BB62FD',
          }}
        >
          <Typography variant="h5" style={{ fontSize:'20px' }}>20:00</Typography>
        </Box>
        <Box

          sx={{
            marginTop:'40px',
            width: '100px',
            height: '50px',
            border: '2px dashed purple',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#BB62FD',
            marginLeft: '20px',
          }}
        >
          <Typography variant="h5" style={{ fontSize:'20px' }}>22:00</Typography>
        </Box>
      </div>
    </div>
  </div>
</div>



      



      </Container>
      
      
    </Box>
    </Box>
 
  );
};

export default PageContPeli;
