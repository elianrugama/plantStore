import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

type props = {
  cambiarRuta: (ruta: string) => void
}

export default function Cards({ cambiarRuta }: props) {
  return (
    
    <Card sx={{ maxWidth: 176, maxHeight:200,marginLeft: '10px', marginRight: '10px' }}>
      <CardMedia
        sx={{ height: 0, paddingTop: '45.25%'}}
        image="https://th.bing.com/th/id/R.51874b523d0ba79995839cb38d6ba985?rik=m43RkiqkxNda7g&pid=ImgRaw&r=0"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="button" component="div" style={{height: '10px'}}>
            Monstera
        </Typography>
        <Typography  color="text.secondary" variant='caption' component="div" style={{height: '50px'}}>
          Monstera is a type of tropical.
        </Typography>
      </CardContent>
      <CardActions style={{display: 'flex', alignItems: 'center', maxHeight: '10px'}}>
        <Typography  color="text.secondary" variant='button' component="div" style={{color:"black"}}>
            $50.25
        </Typography>
        <Button  color="success" style={{marginLeft: 'auto'}} onClick={() => {
          cambiarRuta('shopping');
        }}>
            <AddCircleRoundedIcon />
        </Button>
      </CardActions>
    </Card>
  );
}