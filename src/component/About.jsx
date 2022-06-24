import React from "react";
import "../styles/component/About.scss";

const About = () => {
  return (
    <div className="aboute">
      <h1 id="about">About</h1>
      <p>Nos différents clients en parlent.</p>
      <div className="aboutContainerLeft">
        <h2>
          <img src="../images/image1.png" width={100} alt="oo" />
        </h2>
        <p>Mr Adouda Marcelin</p>
        <p className="texte">
          Je suis ravi par la qualité de leur travail , au début je croyais par
          qu'il pouvait réaliser ce site web en si peu de temps , grace à eux,
          aujourdh'ui je réalise beacoup de vente sur internet.
        </p>
      </div>

      <div className="aboutContainerRight">
        <h2>
          <img src="../images/image1.png" width={100} alt="oo" />
        </h2>
        <p>Mme Lessilin Souza</p>
        <p className="texte">
          Il y'a de cela quelques années j'ignorais totalement ce que pourrait
          m'offrir une opportunité de pourvoir gagné de l'argent sur internet,
          je remercie beacoup l'équipe de hoverstartup pour leur travail.
        </p>
      </div>

      <div className="aboutContainerLeft">
        <h2>
          <img src="../images/image1.png" width={100} alt="oo" />
        </h2>
        <p>Mr Sossou Jean</p>
        <p className="texte">
          Je remercie beaucoup l'équipe pour le travail abatue en si peu de
          temps.
        </p>
      </div>

      <div className="aboutContainerRight">
        <h2>
          <img src="../images/image1.png" width={100} alt="oo" />
        </h2>
        <p>Mr Adandou leandre</p>
        <p className="texte">
          Aujoud'hui ma communauté de blogeurs s'est develloppé grace à l'équipe
          de starthover qui m'omt peris d'avoir un blog bien structurer pour
          partager mes articles
        </p>
      </div>
    </div>
  );
};

export default About;
