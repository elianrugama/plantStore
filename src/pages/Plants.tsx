import SearchAppBar from '../components/Navbar'

import Typography from '@mui/material/Typography';
import Cards2 from '../components/Card2'


type props = {
  cambiarRuta: (ruta: string) => void
}

function Plants({ cambiarRuta }: props) {

  return (
    <>
      <SearchAppBar />
      
      <br />
      
      
      <Typography variant="h6" component="div" style={{marginLeft: '10px', marginTop: '10px', color:"green"}}>
        Popular Plants Among
      </Typography>
      <Typography variant="h6" component="div" style={{marginLeft: '10px', color:"green"}}>
        The People
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

export default Plants