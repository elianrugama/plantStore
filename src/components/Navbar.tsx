
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
    backgroundColor: '#f8f8fa',
  '&:hover': {
    
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100ch',
      '&:focus': {
        width: '20ch',
      },
    },
    
  },
}));

export default function SearchAppBar() {
  const ruta = localStorage.getItem('route');
  if (ruta) {
    console.log(ruta);
  }
  else {
    localStorage.setItem('route', 'home');
  }

  return (
    //redondear esquinas
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#f8f8fa' , color: 'black', borderRadius: '10px'}}>
        <Toolbar>
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}

            />
          </Search>
            <Box sx={{ flexGrow: 1 }} />
            {
              ruta === 'home' ? <NotificationsNoneIcon /> : <MenuIcon />
            }
        </Toolbar>
      </AppBar>
      <br />
    </Box>
   

    </>
  );
}