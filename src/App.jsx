import React from "react";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";

import banner from "./images/banner.jpg";
import card1 from "./images/card1.jpg";
import card2 from "./images/card2.jpg";
import card3 from "./images/card3.jpg";
import card4 from "./images/card4.jpg";

import "./styles/global.css";
// npm install
// npm run start

// https://github.com/profchines
function App() {
  var titulos = [
    "Missão impossivel 2",
    "Missão Impossivel 3",
    "Missão Impossivel - Nação Secreta",
    "Missão Impossivel - Acerto de Contas",
  ];

  return (
    <>
      <Header />
      <img width="100%" src={banner} />
      <h1
        style={{
          margin: 15,
          textAlign: "center",
        }}
      >
        Filmes
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card imagem={card1} titulo={titulos[0]} />
        <Card imagem={card2} titulo={titulos[1]} />
        <Card imagem={card3} titulo={titulos[2]} />
        <Card imagem={card4} titulo={titulos[3]} />
      </div>
      <Footer />
    </>
  );
}

export default App;
