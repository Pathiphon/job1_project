import React, { useState,useEffect } from 'react'
import background from "./image/bg2.jpg";
import { Routes, Route, Link,useLocation } from 'react-router-dom';
import './App.css';

import LoginIcon from '@mui/icons-material/Login';
import logolast2 from './image/logo.png';
import Home from './component/Home';
import Register from './component/Register';
import Promotion_page from './component/Promotion_page'
import Callcenter from './component/Callcenter'
import Casino_Game from './component/Casino_Games'
import InGame from './component/InGame'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Box, List, SwipeableDrawer, ListItem, ListItemIcon, ListItemText, Divider, CssBaseline, AppBar, Toolbar, Typography, Drawer } from '@mui/material';


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
      sx={{ width:'150px' }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link className='textDec text-center' style={{ textDecoration: 'none' }} to="/"  >
          <ListItem button style={{display:'flex', justifyContent:'center'}} >
            <ListItemIcon >
              <HomeIcon className="icon_nav mx-auto" />
            </ListItemIcon>        
          </ListItem>
          <ListItemText primary="หน้าแรก"/>
        </Link>
        <Divider color='white' />
        <Link className="textDec text-center" to="/Register" style={{ textDecoration: 'none' }}>
          <ListItem button style={{display:'flex', justifyContent:'center'}} >
            <ListItemIcon>
              <GroupAddIcon className="icon_nav mx-auto" />
            </ListItemIcon>
            
          </ListItem>
          <ListItemText primary="สมัครสมาชิก" />
        </Link>
        <Divider color='white' />
        <Link className="textDec text-center" to="/Promotion" style={{ textDecoration: 'none' }}>  
          <ListItem button style={{display:'flex', justifyContent:'center'}}>
            <ListItemIcon>
              <CardGiftcardIcon className="icon_nav mx-auto" />
            </ListItemIcon>                  
          </ListItem>
          <ListItemText primary="โปรโมชั่น" />  
        </Link>
        <Divider color='white' />
        <Link className="textDec text-center" to="/Casino_Games" style={{ textDecoration: 'none' }}>
          <ListItem button style={{display:'flex', justifyContent:'center'}}>
            <ListItemIcon>
              <SportsEsportsIcon className="icon_nav mx-auto" />
            </ListItemIcon>
            
          </ListItem>
          <ListItemText primary="คาสิโน + เกมส์" />
        </Link>
        <Divider color='white' />
        <Link className="textDec text-center" to="/InGame" style={{ textDecoration: 'none' }}>
          <ListItem button style={{display:'flex', justifyContent:'center'}}>
            <ListItemIcon>
              <ExitToAppIcon className="icon_nav mx-auto" />
            </ListItemIcon>
            
          </ListItem>
          <ListItemText primary="ทางเข้าเล่น" />
        </Link>
        <Divider color='white' />
        <Link className="textDec text-center" to="/Callcenter" style={{ textDecoration: 'none' }}>
          <ListItem button style={{display:'flex', justifyContent:'center'}}>
            <ListItemIcon>
              <SupportAgentIcon className="icon_nav mx-auto" />
            </ListItemIcon>
          </ListItem>
          <ListItemText primary="ติดต่อสอบถาม" />
        </Link>
        
      </List>
      <Divider />
    </Box>
  );

  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: "100%" }} >
      <div className='mx-auto text-center container'>
                <marquee className="mx-auto text-white" width="100%" direction="left" >
                    <strong>
                        ** หารายได้ โดยวิธีง่ายๆ เพียงแค่สมัครสมาชิก แล้วส่งลิ้งแนะนำเพื่อนให้เพื่อนสมัครรับไปเลยค่าคอมมิชชั่นกับคืนยอดเสียของเพื่อน(ตั้งแต่วันที่ 1 ถึงสิ้นเดือน ระบบจะโอนให้ทุกวันที่ 2 ของเดือน) **
                    </strong>
                </marquee>
            </div>
            <div className="container h-25 card  px-2 py-2 mb-2 well">
                <div className="row">
                    <div className="col-sm">
                    <Button onClick={toggleDrawer('left', true)} color='warning' size='large'  variant="contained" startIcon={<MenuIcon fontSize='large'/>}><h5>เมนู</h5></Button>
      <SwipeableDrawer
      // BackdropProps={{ invisible: true }}
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
                        <img className="d-block w-50 mx-auto" src={logolast2} alt="Second slide" />
                    </div>
                    <div className="col-sm mx-auto container text-center">
                        <Button variant="contained" color='primary' className="w-75" target="_blank" component="a" href="https://acc.mm88kickoff.bet/register/" startIcon={<GroupAddIcon />}>
                            สมัครสมาชิก
                        </Button>

                        <div className="row mt-2">
                            <div className="col"><Button variant="contained" color='error' className="w-75" target="_blank" component="a" href="https://acc.mm88kickoff.bet/?fbclid=IwAR121Rkn_3uw449_hreLKrOshvlkTD9mH2YX0qPF_UQFXndQI8gV0MoOWtA" startIcon={<LoginIcon />}>
                                Login เข้าสู่ระบบ
                            </Button></div>
                        </div>
                    </div>
                </div>
            </div>
      <div className=" w-100" >

        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Promotion_page' element={<Promotion_page />} />
          <Route path='/Callcenter' element={<Callcenter />} />
          <Route path='/Casino_Game' element={<Casino_Game />} />
          <Route path='/InGame' element={<InGame />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
