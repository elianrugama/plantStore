
import './App.css'
import { useState, useEffect } from 'react'

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import PersonIcon from '@mui/icons-material/Person';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

import SpaIcon from '@mui/icons-material/Spa';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import Home from './pages/Home'
import Plants from './pages/Plants'
import User from './pages/User'
import Shopping from './pages/Shopping'




function App() {
  const [route, setRoute] = useState('')
  const [value, setValue] = useState('');
  
  useEffect(() => {
    const localRoute = localStorage.getItem('route')
    //const planta = localStorage.getItem('planta')
    
    if (localRoute) {
      setValue(localRoute);
      setRoute(localRoute)
    }
    else {
      localStorage.setItem('route', 'home')
      localStorage.setItem('planta', '0')
      setValue('home');
      setRoute('home')
    }
    
  }, [])

  const cambiarRuta = (nuevaRuta: string) => {
    setRoute(nuevaRuta);
    setValue(nuevaRuta);
    localStorage.setItem('route', nuevaRuta);
  };


  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    console.log(newValue);
    setRoute(newValue)
    localStorage.setItem('route', newValue)
  };

  const router = () => {
    if (route === 'home') {
      return <Home cambiarRuta={cambiarRuta}/>
    }
    else if (route === 'plants') {
      return <Plants cambiarRuta={cambiarRuta}/>
    }
    else if (route === 'shopping') {
      return <Shopping cambiarRuta={cambiarRuta}/>
    }
    else if (route === 'user') {
      return <User />
    }
    
  }

  return (
    <>
    {
      //verificar si hay cambios en la ruta
      router()

    }
    <BottomNavigation
      sx={{ width: 500, position: 'fixed', bottom: 0 }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={(value === 'home') ? (<HomeIcon />) : (<HomeTwoToneIcon />)}

      />
      <BottomNavigationAction
        label="Plants"
        value="plants"
        icon={(value === 'plants') ? (<SpaIcon />) : (<SpaOutlinedIcon />)}

        
      />
      <BottomNavigationAction
        label="Shopping"
        value="shopping"
        icon={(value === 'shopping') ? (<ShoppingCartIcon />) : (<ShoppingCartOutlinedIcon />)}
      />
      <BottomNavigationAction
        label="User"
        value="user"
        icon={(value === 'user') ? (<PersonIcon />) : (<PersonOutlinedIcon />)}
      />
      
    </BottomNavigation>
      
    </>
   
  )
}

export default App
