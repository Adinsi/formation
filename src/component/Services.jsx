/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import '../styles/component/Services.scss';

const Services = () => {
  return (
    <div id="services" className="services">
      <h1>Formation</h1>
      <p>
        La formation se compose de trois modules suivi d'une attestation de fin
        de formation. Ils se tiendra sur une durée de 6 mois à partir du{" "}
        <span>6 Aout au 06 Janvier 2023 </span>
        Les inscriptions démarre du 06 juillet au 17 juillet 2022.
      </p>
      <div className="servicesContainer">
        <div className="servicesElement">
          <h2>Module 1</h2>
          <i class="fa-brands fa-html5"></i>
          <i class="fa-brands fa-css3"></i>
          <p>
            Le module 1 est l'enssemble des deux langagues  indispensemble dans le web à savoir : Langague de texte (HTML 5) et
            de style (CSS 3). Nous apprendrons a faire l'intégration des
            maquettes et à les stylisé. Ils sont appelé des sites statiques.
          </p>
     
        </div>
        <div className="servicesElement">
          <h2>Module 2</h2>
          <i class="fa-brands fa-js"></i>
          <p> Pour developper des sites dynamique nous apprenons a interragir coté client avec le langaugue Javascript pour produire des sites interractives.</p>
        
        </div>
        <div className="servicesElement">
          <h2>Module 3</h2>
          <i class="fa-brands fa-bootstrap"></i>
          <p>
            Pour etre productive dans nos styles , le framework Bootstrap nous permettra d'écrire nos règles de styles rapidement.
          </p>
     
        </div>

        <div className="servicesElement">
          <h2>Module 4</h2>
          <i class="fa-brands fa-react"></i>
          <p>
            A la fin de notre apprentissage nous passerons au librairies Javascript React facile à appréhender permettant de codé plus en develloppant des applications web.
          </p>
       
        </div>
      </div>
    </div>
  );
};

export default Services;
