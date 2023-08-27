import React from "react";
import banner from "./images/banner.jpg";
import styles from "./styles.module.css";
import "./styles/global.css";
import { Header } from "./components/Header";
// npm install
// npm run start

// https://github.com/profchines
function App() {
  return (
    <>
      <Header />
      <img width="100%" src={banner} />
      <h1 className={styles.title}>Hello World</h1>
      <h1
        style={{
          color: "blue",
          backgroundColor: "red",
        }}
      >
        5 min pro intervalo
      </h1>
      <p>Primeira aula de react</p>
    </>
  );
}

export default App;
