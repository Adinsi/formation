import React from 'react';
import Contact from '../component/Contact';
import Navigation from '../component/Navigation';
import Portfolio from '../component/Portfolio';
import Services from '../component/Services';
import Team from '../component/Team';
import '../styles/page/Home.scss';


const Home = () => {
    return (
        <div>
            <Navigation />  

            <Services />

            <Portfolio />
            
            <Team />
            <Contact/>
       
            
        </div>
    );
};

export default Home;