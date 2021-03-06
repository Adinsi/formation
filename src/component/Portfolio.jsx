import React from "react";

import "../styles/component/Portfolio.scss";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <h2>PROJETS A REALISER</h2>

      <div className="portfolioContainer">
        <div className="portfolioElement">
          <i class="fa-solid fa-cart-shopping"></i>
          <h3>Site d'achat de ticket</h3>
          <h4>
            <a href="https://Adinsi.github.io/100tickets">Voir l'exemple</a>
          </h4>
        </div>

        <div className="portfolioElement">
          <i class="fa-solid fa-money-bill-transfer"></i>
          <h3>Un site de diffusion de vidéos</h3>
          <h4>
            <a href="https://Adinsi.github.io/movie-react">Voir l'exemple</a>
          </h4>
        </div>
        <div className="portfolioElement">
          <i class="fa-solid fa-people-carry-box"></i>
          <h3>Projet de site à réalisé en équipe</h3>
        </div>
        <div className="portfolioElement">
          <i class="fa-solid fa-user-check"></i>

          <h3>Portfolio Personnels à réaliser</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
