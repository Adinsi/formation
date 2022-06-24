import React from "react";
import "../styles/component/Team.scss";

const Team = () => {
  return (
    <div className="teamContainer">
      <h1 id="team">L'équipe</h1>
      <p>
        L'équipe est composé de 3 devellopeurs expérimenté ayant à leurs actifs
        plus de 15 projets déja.
      </p>

      <div className="team-menu">
        <div className="teamElement">
          <h3>Adinsi Abdias</h3>
          <p>Devellopeur Fullstack</p>
        </div>

        <div className="teamElement">
          <h3>Diana Peterse</h3>
          <p>Devellopeur front-end</p>
        </div>

        <div className="teamElement">
          <h3>Larry Parker</h3>
          <p>Devellopeur Back-end</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
