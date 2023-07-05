import SearchAppBar from '../components/Navbar'
import Tabss from '../components/Tabs'

import Cards from '../components/Card'
import Typography from '@mui/material/Typography';
import Cards2 from '../components/Card2'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
  boxShadow: 'none', // Quitar el sombreado
  border: 'none', // Quitar la línea de separación
  
}));


type props = {
  cambiarRuta: (ruta: string) => void
}
function Home({ cambiarRuta }: props) {
  

  return (
    <>
      <SearchAppBar />
      <Tabss /> 
      <br />
      <Box>
      <Stack  direction="row" style={{overflow:'auto', padding: '10px'}}>
        <Item>
          <Cards cambiarRuta={cambiarRuta} />
        </Item>
        <Item>
          <Cards cambiarRuta={cambiarRuta} />
        </Item>
        <Item>
          <Cards cambiarRuta={cambiarRuta} />
        </Item>
      </Stack>
    </Box>
      
      <Typography variant="button" component="div" style={{marginLeft: '10px', marginTop: '10px'}}>
        Featured Plants
      </Typography>
      <br />
      <div>
      <Cards2 cambiarRuta={cambiarRuta} />
      <br />
      <Cards2 cambiarRuta={cambiarRuta} />
      <br />
      <Cards2 cambiarRuta={cambiarRuta} />
      <br />
      </div>
      
    </>
  )
}

export default Home