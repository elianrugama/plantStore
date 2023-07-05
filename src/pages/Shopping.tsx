import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';
import Images from '../components/Images';


type props = {
  cambiarRuta: (ruta: string) => void
}
function Shopping({ cambiarRuta }: props) {
  return (

    <>
    
    <div className='container' style={{backgroundColor: '#E9F3ED', height: '100vh'}}>
      <div
        className="row"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          padding: '10px',
          paddingLeft: '30px',
          paddingRight: '30px',
        }}
      >
        <div >
          <ArrowBackIosIcon
            onClick={() => {
              cambiarRuta('home');
            }}
            style={{ fontSize: '30px', color: 'black'}}
          />
        </div>

        <div>
          <ShareOutlinedIcon
            onClick={() => {
              cambiarRuta('home');
            }}
            style={{ fontSize: '30px', color: 'black' }}
          />
        </div>
      </div>

      <div>
      <Card sx={{ display: 'flex' }} style = {{backgroundColor: '#E9F3ED', borderRadius: '30px'}}>
      <CardMedia
        component="img"
        sx={{ width: 250, height: 300}}
        image="https://w7.pngwing.com/pngs/782/592/png-transparent-potted-plants-green-green-leaves-plant.png"
        alt="Live from space album cover"

      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }} style = {{backgroundColor: '#E9F3ED'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Size
          </Typography>
          <Typography component="div" variant="h5">
            Small
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Humidity
          </Typography>
          <Typography component="div" variant="h5">
            64%
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Ligth
          </Typography>
          <Typography component="div" variant="h5">
            Diffuse
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Temperature
          </Typography>
          <Typography component="div" variant="h5">
            18-24 C
          </Typography>
        </CardContent>
      </Box>
      
    </Card>

      </div>
      <br />
      <div>
      <Card style={{backgroundColor: '#FFFFFF', borderRadius: '60px' ,height: '100vh'}}>
      <CardActionArea>
        <br />
        <CardContent sx = {{display: 'flex', flexDirection: 'column', justifyContent: 'center',paddingLeft: '30px', paddingRight: '30px'}}>

          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Typography gutterBottom variant="h5" component="div" color = 'green'>
          Dracena Fragrans
          </Typography>
          <Typography gutterBottom variant="h6" component="div" color = 'black' style={{paddingRight:"10px"}}>
            $65.00
          </Typography>

          </div>
          <Typography variant="body2" color="text.secondary">
          One type of Dracaena that has an export value is Dracaena fragrans. D. fragrans is actually a shrub native to the African continent, from South Sudan, Mozambique to Angola.
          </Typography>
          <br />
          <Typography gutterBottom variant="h5" component="div" color = 'green'>
          Photos
          </Typography>
          <br />
          <Images />

        </CardContent>
      </CardActionArea>
    </Card>
      </div>
      </div>
    </>

  )
}

export default Shopping