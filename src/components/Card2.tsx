

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';

type props = {
  cambiarRuta: (ruta: string) => void
}
export default function Cards2({ cambiarRuta }: props) {

  return (
    <Card sx={{ display: 'flex', maxHeight: '200px', maxWidth: '1000px', marginLeft: '10px', marginRight: '10px' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://th.bing.com/th/id/R.51874b523d0ba79995839cb38d6ba985?rik=m43RkiqkxNda7g&pid=ImgRaw&r=0"
        alt="Live from space album cover"
      />
      <Box >
        <CardContent >
          <Typography component="div" variant="h5" style={{color:"black"}}>
            Pinus Strobus
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" style={{color:"black", maxHeight: '10'}}>
            $50.25
          </Typography>
          <div>
          <Typography variant="subtitle2" color="text.secondary" style={{height: '90px',width:"200px" , marginTop: '10px'}}>
            Pinus Strobus is a type of tropical.
            plant that is tropocal kaksdjasdjasdas
            

          </Typography>
          </div>
          <div style={{display: 'flex', alignItems: 'center', maxHeight: '10px', paddingTop:"5px"}}>
          <Typography  color="text.secondary" variant='button' component="div" style={{color:"black"}}>
            $50.25
        </Typography>
        <Button  color="success" style={{marginLeft: 'auto'}} onClick={() => {
          cambiarRuta('shopping');
        }}>
            <AddCircleRoundedIcon />
        </Button>
          </div>
         
          
        </CardContent>

      </Box>
      
    </Card>
  );
}