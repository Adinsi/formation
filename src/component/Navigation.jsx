import React, { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/component/Navigation.scss'


const Navigation = () => {

    const [position, setposition] = useState(false);
    const [show, setShow] = useState(false);


    useEffect(() => {
        
    },[setShow])
    const handleClick = () => {

        setShow(!show)
        
    }

   
    const handleSrcoll = () => {
        if (window.scrollY  > 15) {
            setposition(true)
        }
        else {
            setposition(false)
        }
    }

    window.addEventListener('scroll', handleSrcoll)
   
   

  

    
    return (
        <div  className={position ? "container stick" : "container"} onScroll={handleSrcoll}>
            
            <div className={position? "menu sticky":"menu "} onScroll={handleSrcoll} >
          
            <div className="logo">
                <NavLink exact to='/'>Vclick</NavLink>
            </div>

            <div className="links">
                <div className={show ? "items stick" : "items"}>
                    <div className="item">
                      <a href='#services' >Formations</a>
                    </div>
                    <div className="item">
                    <a href='#portfolio' > Projets</a>
                    </div>
                   
                    <div className="item">
                    <a href='#team' > Equipe</a>
                    </div>
                    <div className="item">
                    <a href='#contact' > Contact</a>
                    </div>
                </div>
            </div>

            <div className="burger" onClick={handleClick}>
                <i  className={show? "fa-solid fa-xmark" :"fa-solid fa-bars"}></i>
            </div>      
            </div>
            <div className="heroes">
                <h2>Formation en Devellopement <span>web</span>  </h2>
                <h2>Dev Fullstack : Abdias Adinsi</h2>
            </div>
            
       </div>
    );
};

export default Navigation;