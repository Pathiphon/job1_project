import React from 'react'

import background from "./image/bg2.jpg";
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

import LoginIcon from '@mui/icons-material/Login';
import logolast2 from './image/LOGO_NEW2.png';
import Home from './component/Home';
import bg12 from './image/bg14.png'
import Register from './component/Register';
import Promotion_page from './component/Promotion_page'
import Callcenter from './component/Callcenter'
import Casino_Game from './component/Casino_Games'
import InGame from './component/InGame'
import logo_new2 from './image/LOGO_NEW2.png';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PaidIcon from '@mui/icons-material/Paid';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';


import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Box, List, SwipeableDrawer, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';


function App() {

  const [state, setState] = React.useState({
    left: false,

  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: '150px' }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >
        <Link className='textDec text-center' style={{ textDecoration: 'none' }} to="/"  >
          <ListItem button style={{ display: 'flex', justifyContent: 'center' }} >
            <ListItemIcon >
              <HomeIcon className="icon_nav mx-auto" />
            </ListItemIcon>
          </ListItem>
          <ListItemText primary="?????????????????????" />
        </Link>
        <Divider color='white' />
        <a className="textDec text-center" href='https://acc.mm88kickoff.bet/register/' target="_blank" style={{ textDecoration: 'none' }}>
          <ListItem button style={{ display: 'flex', justifyContent: 'center' }} >
            <ListItemIcon>
              <GroupAddIcon className="icon_nav mx-auto" />
            </ListItemIcon>
          </ListItem>
          <ListItemText primary="?????????????????????????????????" />
        </a>
        <Divider color='white' />
        <Link className="textDec text-center" to="/Promotion_page" style={{ textDecoration: 'none' }}>
          <ListItem button style={{ display: 'flex', justifyContent: 'center' }}>
            <ListItemIcon>
              <CardGiftcardIcon className="icon_nav mx-auto" />
            </ListItemIcon>
          </ListItem>
          <ListItemText primary="???????????????????????????" />
        </Link>
        <Divider color='white' />
        <Link className="textDec text-center" to="/Casino_Game" style={{ textDecoration: 'none' }}>
          <ListItem button style={{ display: 'flex', justifyContent: 'center' }}>
            <ListItemIcon>
              <SportsEsportsIcon className="icon_nav mx-auto" />
            </ListItemIcon>
          </ListItem>
          <ListItemText primary="?????????????????? + ???????????????" />
        </Link>
        <Divider color='white' />
        <Link className="textDec text-center" to="/InGame" style={{ textDecoration: 'none' }}>
          <ListItem button style={{ display: 'flex', justifyContent: 'center' }}>
            <ListItemIcon>
              <ExitToAppIcon className="icon_nav mx-auto" />
            </ListItemIcon>
          </ListItem>
          <ListItemText primary="?????????????????????????????????" />
        </Link>
        <Divider color='white' />
        <Link className="textDec text-center" to="/Callcenter" style={{ textDecoration: 'none' }}>
          <ListItem button style={{ display: 'flex', justifyContent: 'center' }}>
            <ListItemIcon>
              <SupportAgentIcon className="icon_nav mx-auto" />
            </ListItemIcon>
          </ListItem>
          <ListItemText primary="????????????????????????????????????" />
        </Link>
        <Divider color='white' />
      </List>
      <Divider />
    </Box>
  );

  return (
    <div >
      <div style={{ backgroundImage: `url(${background})`, backgroundSize: "100%" }}>
        <div className='mx-auto text-center container' >
          <marquee className="mx-auto text-white" width="100%" direction="left" >
            <strong>
              ** ???????????????????????? ???????????????????????????????????? ????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????(??????????????????????????????????????? 1 ???????????????????????????????????? ??????????????????????????????????????????????????????????????? 2 ????????????????????????) **
            </strong>
          </marquee>
        </div>
        <div className="w-100 mx-auto px-2 py-2" style={{ backgroundImage: `url(${bg12})`, backgroundSize: "cover" }}>
          <div className="row">
            <div className="col-sm">
              <Button className="m-3" onClick={toggleDrawer('left', true)}  size='large' variant="outlined" 
              style={{color:"#ffffff"}}
               startIcon={<MenuIcon size='large' fontSize='large' />}><h5>????????????</h5></Button>
              <SwipeableDrawer
                PaperProps={{
                  sx: {
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    color: "red",

                  }
                }}
                anchor='left'
                open={state['left']}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
              >
                {list('left')}
              </SwipeableDrawer>
            </div>
            <div className="col-sm container mx-auto">
              <img className="d-block w-75 mx-auto" src={logolast2} alt="Second slide" />
            </div>
            <div className="col-sm mx-auto container text-center">
              <Button
                style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '300px', minHeight: '50px',backgroundColor:'#FFD700',color:'#000000' }}
                variant="contained" color='primary' className="w-75" target="_blank" component="a" href="https://acc.mm88kickoff.bet/register/" startIcon={<GroupAddIcon />}>
                ?????????????????????????????????
              </Button>

              <div className="row mt-2">
                <div className="col">
                  <Button
                    style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '300px', minHeight: '50px' }}
                    variant="contained" color='error' className="w-75" target="_blank" component="a" href="https://acc.mm88kickoff.bet/?fbclid=IwAR121Rkn_3uw449_hreLKrOshvlkTD9mH2YX0qPF_UQFXndQI8gV0MoOWtA" startIcon={<LoginIcon />}>
                    Login ?????????????????????????????????
                  </Button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-100" >

        <Routes >
          <Route path='/' element={<Home />} />

          <Route path='/Promotion_page' element={<Promotion_page />} />
          <Route path='/Callcenter' element={<Callcenter />} />
          <Route path='/Casino_Game' element={<Casino_Game />} />
          <Route path='/InGame' element={<InGame />} />
        </Routes>
      </div>
      <div className=" text-white w-100 bgcolor1">
        <div className="row w-100 container mx-auto">
          <div className="col-sm-3 p-3">
            <img loading="lazy" src={logo_new2} className="rounded w-100" />
          </div>
          <div className="col-sm-9 p-3">
            ???????????????????????????????????????????????????????????????????????????????????????????????????????????? MM88KICKOFF.COM ??????????????????????????? MM88 ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? PC ??????????????????????????????????????????????????????????????? ios,android ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????????????? ????????????????????????????????? ????????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????? Call center 24 ??????. ?????????????????????????????????????????????????????? ???????????? ???????????????????????? Line Livechat ?????????????????? MM88BET.COM ?????????????????????????????????????????????????????????????????? ??????????????????????????????????????? ????????????????????????????????????????????? ???????????????????????????????????????????????? ????????????????????????????????????????????? ??????????????????????????????????????? ???????????????????????????????????????????????????????????? ????????????????????????????????????????????? ???????????????????????????????????????????????? ???????????????????????????????????????????????????????????? ???????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
