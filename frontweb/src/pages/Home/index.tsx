import { Link } from "react-router-dom";
import ButtonIcon from "components/ButtonIcon";

import "./styles.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content-container">
          <h1>Desafio Github API</h1>
          <p>DevSuperior - Escola de programação</p>
          <Link to="/githubsearch">
            <ButtonIcon text="Começar" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
