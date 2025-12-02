import React, { useState } from 'react'
import './header.css'
import profil from "../../assets/sharingan.png"
import { LogoutOutlined } from '@ant-design/icons'
import AuthModals from '../modals/AuthModals'

const Header = () => {
  
  const [open, setOpen] = useState(false);

  const openAuthModal = () => {
    setOpen(true);
  }

  return (
    <header>
      
      <div className='logo'>
        <h1>Forum</h1>
      </div>

      <div className='right'>
        {/* <img src={profil} alt='Profil User'/>

        <div className='user_info'>
          <div className='info'>
            <span>Benidir Mourad</span>
            <p>@benidir</p>
          </div>
        </div> */}

        <div className='login' onClick={openAuthModal}>
          <LogoutOutlined/> Se connecter
        </div>
      </div>
      <AuthModals open={open} setOpen={setOpen}/>



    </header>
  )
}

export default Header
