import React, { useState } from 'react';
import { Container, Box, Button, TextField, Divider, Stack, Grid, Card, Paper,Avatar } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
const PageContPeli = () => {

  return (
    
       <Box  flex={7} sx={{ p: 4  }} >
            <Typography  variant="h4" component="div" style={{ paddingTop: '16px', paddingBottom: '16px' , borderBottom: '1px solid rgb(224, 224, 224)'}}>
                Películas
            </Typography>

        <Box  sx={{ mt: 4, padding: '0px 24px 0 24px', mr: 2, width:"95%", height:"1057px", backgroundColor:"pink" }}>
         <Container >
          <header>
            <Box >
            <Typography variant="h4" sstyle={{ fontSize: "40px", fontFamily: "Roboto"}}  >Beekeeper Sentencia de Muerte</Typography>

            <Grid style={{display:"flex"}}>
              <LocationOnIcon color="action" style={{ marginRight: "15px",marginBottom:"20px", marginTop:"10px" }} ></LocationOnIcon>
              <Typography  variant="subtitle2" color="#2196F3" fontWeight="600" style={{marginBottom:"20px", marginTop:"10px"}}>
               1hrs 50min
              </Typography>
                <LocationOnIcon color='action' style={{marginLeft:"15px", marginRight: "15px", marginBottom:"20px", marginTop:"10px" }} ></LocationOnIcon>
                <Typography  variant="subtitle2" color="#2196F3" fontWeight="600" style={{marginBottom:"20px", marginTop:"10px"}}>
                 Director
                </Typography>
            </Grid>
            </Box>
          </header>
         </Container>


         <Grid display={"flex"} style={{width:"890px", height:"290px"}}   >
          <Card sx={{marginRight:"4%"}} style={{width:"700px", height:"290px"}}> 
            
            <img
      src="https://i.ytimg.com/vi/J2pWkhP3ou0/maxresdefault.jpg"
      style={{width:"600px",height:"100%"  }}/>
           
            </Card>

            <Card >
              <Paper style={{width:"400px", height:"290px"}} >
              <header >
                <Typography variant='h5' style={{margin:"5%"}} > Sinopsis</Typography>
                </header>

                <Typography variant='body1' style={{margin:"5%", lineHeight: "1.5", paddingRight:"80px"}}>
                La brutal campaña de venganza de un hombre adquiere dimensiones nacionales cuando se descubre que es un antiguo agente de una poderosa organización clandestina conocida como "Los apicultores".
                </Typography>
                <Box  sx={{mt:'16px',display: 'flex', gap: '8px', margin:"5%" }} spacing={8}>
                <Chip label="Accion" variant="filled" color="default" style={{ padding: "4px" , borderRadius: "100px"}} />
                <Chip label="+14" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
                 </Box>
                </Paper>
            </Card>
         
          </Grid>

          <Grid style={{ paddingLeft: "30px", marginTop:"2%" }}>
          <Typography variant="h2" style={{ fontSize: "45px", fontFamily: "Roboto" }}>
          Salas disponibles
        </Typography>
          </Grid>
        

       


        </Box>

       
 
    



</Box>


      
  );
};

export default PageContPeli;
