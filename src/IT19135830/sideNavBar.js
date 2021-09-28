//import useState hook to create menu collapse state
import React, { useState } from "react";
import './css/sideBar.css'

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu 
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle,FaSwatchbook} from "react-icons/fi";
import {BiFoodMenu} from 'react-icons/bi'
import {AiOutlineMail, AiOutlineShopping,AiOutlineStar} from 'react-icons/ai'
import {MdLocalOffer} from'react-icons/md';
import { HiDocumentReport } from "react-icons/hi";
import { BiCog } from "react-icons/bi";
import logo from './images/logo.png';
import logoSmall from './images/logo-small.png'


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
// import "./css/sideNavBar.css";


const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    
      <div id="header" style={{width:'283px'}}>
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse} >
          <SidebarHeader style={{backgroundColor:'#BAC5CC'}}>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? <img src={logoSmall} style={{paddingTop:'2vh', marginLeft:'-1vh'}}/> : <img src={logo} style={{paddingTop:'2vh', paddingLeft:'4vh'}}/>}</p>
              
            </div>
            
          </SidebarHeader>
          <SidebarContent style={{backgroundColor:'#1a1a1a'}}>
          
            <Menu iconShape="square">
              <MenuItem icon={<FiHome />} className='titleBackgound'>
                <a href='/' style={{color:'black'}}> Dashboard </a>
              </MenuItem>
              <br/>
              <SubMenu title="Manage Categories" icon={<FaList/>}  className='titleBackgound'>
                <MenuItem className='menuItemFont'><a href='/' style={{color:'black'}}>Add Categories </a></MenuItem>
                <MenuItem className='menuItemFont'><a href='/' style={{color:'black'}}>View Categories</a></MenuItem>
               </SubMenu>
               <br/>
               <SubMenu title="Manage Menus" icon={<BiFoodMenu/>}  className='titleBackgound'>
                <MenuItem className='menuItemFont'><a href='/' style={{color:'black'}}>Add Menus </a></MenuItem>
                <MenuItem className='menuItemFont'><a href='/' style={{color:'black'}}>View Menus</a></MenuItem>
               </SubMenu>
               <br/>
               <SubMenu title="Email Creator" icon={<AiOutlineMail/>}  className='titleBackgound'>
                <MenuItem className='menuItemFont'><a href='/create-email' style={{color:'black'}}>Create Email</a></MenuItem>
                <MenuItem className='menuItemFont'><a href='/view-emails' style={{color:'black'}}>View Emails</a></MenuItem>
               </SubMenu>
               <br/>
               <SubMenu title="Manage Orders" icon={<AiOutlineShopping/>}  className='titleBackgound'>
                <MenuItem className='menuItemFont'><a href='/' style={{color:'black'}}>Add Orders </a></MenuItem>
                <MenuItem className='menuItemFont'><a href='/' style={{color:'black'}}>View Orders </a></MenuItem>
               </SubMenu>
               <br/>
               <SubMenu title="Manage Offers" icon={<MdLocalOffer/>}  className='titleBackgound'>
                <MenuItem className='menuItemFont'><a href='/' style={{color:'black'}}>Add Offers</a></MenuItem>
                <MenuItem className='menuItemFont'><a href='/' style={{color:'black'}}>View Offers</a></MenuItem>
               </SubMenu>
               <br/>
               <SubMenu title="Today's Specials" icon={<AiOutlineStar/>}  className='titleBackgound'>
                <MenuItem className='menuItemFont'><a href='/add-todays-special' style={{color:'black'}}>Add Today's Specials </a></MenuItem>
                <MenuItem className='menuItemFont'><a href='/view-todays-special' style={{color:'black'}}>View Today's Specials </a></MenuItem>
               </SubMenu>
               <br/>
               <MenuItem icon={<HiDocumentReport />} className='titleBackgound'>
                   <a href='/reports' style={{color:'black'}}>
                    Report Generation
                   </a>
              </MenuItem>

              
            </Menu>
          </SidebarContent>
          
        </ProSidebar>
      </div>
    
  );
};


export default Header;