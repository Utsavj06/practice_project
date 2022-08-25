import React from 'react'
import styled from './top.module.css'
import Logo from '../assents/Img/logo.jpg'
import '../App.css'

const Top = () => {
   return (
      <div className={styled.topdiv}>
         <div className={styled.navbar}>
            <div className={styled.imgDiv}>
               <img src={Logo} alt='logo' className={styled.image} />
            </div>
            <div className={styled.pageHeader}>
               <div>
                  <ul className={styled.unordersList}>
                     <li className={styled.list}>Fitness</li>
                     <li className={styled.list}>Nutrition</li>
                     <li className={styled.list}>Gyms</li>
                     <li className={styled.list}>Become WTF Partner</li>
                     <li className={styled.list}>About Us</li>
                  </ul>
               </div>
               <div>
                  <button className={styled.loginButton}>
                     Login
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Top