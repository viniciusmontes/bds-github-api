import Navbar from "components/Navbar";
import ButtonIcon from "components/ButtonIcon";

import "./styles.css";


const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-content-container">
          <h1>Desafio Github API</h1>
          <p>DevSuperior - Escola de programação</p>
          <ButtonIcon text="Começar"/>
        </div>
      </div>
    </>
  );
};

export default Home;
