
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
import {useState } from 'react';


export default function Navs() {
  const [value, setValue] = useState('home');
  //local storage ruta
  console.log(value);
  

  return (
    <BottomNavigation
      sx={{ width: 500, position: 'fixed', bottom: 0 }}
      value={value}
      
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={(value === 'home') ? (<HomeIcon />) : (<HomeTwoToneIcon />)}
        onClick={() => {
          setValue('home')
        }}

      />
      <BottomNavigationAction
        label="Plants"
        value="plants"
        icon={(value === 'plants') ? (<SpaIcon />) : (<SpaOutlinedIcon />)}
        onClick={() => {
          setValue('plants')
        }}


        
      />
      <BottomNavigationAction
        label="Shopping"
        value="shopping"
        icon={(value === 'shopping') ? (<ShoppingCartIcon />) : (<ShoppingCartOutlinedIcon />)}
        onClick={() => {
          setValue('shopping')
        }
      }
      />
      <BottomNavigationAction
        label="User"
        value="user"
        icon={(value === 'user') ? (<PersonIcon />) : (<PersonOutlinedIcon />)}
        onClick={() => {
          setValue('user')
        }
      }
      />
      
    </BottomNavigation>
  );
}
