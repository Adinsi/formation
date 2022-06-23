import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>Page not Fond</h1>  
         <button><NavLink exact to='/' >Page d'accueil</NavLink></button>   
        </div>
    );
};

export default NotFound;