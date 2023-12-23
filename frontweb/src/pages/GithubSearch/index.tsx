import { useState } from "react";
import axios from "axios";

import "./styles.css";
import ResultCard from "components/ResultCard";

type FormData = {
  github: string;
};

type Github = {
  avatar_url: string;
  html_url: string;
  location: string;
  followers: string;
  name: string;
};

const GithubSearch = () => {
  const [github, setGitHub] = useState<Github>();

  const [formData, setFormData] = useState<FormData>({
    github: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.github}`)
      .then((response) => {
        setGitHub(response.data);
      })
      .catch((error) => {
        setGitHub(undefined);
        console.log(error);
      });
  };

  return (
    <div className="github-search-container">
      <div className="github-search-card">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="github"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {github && (
        <>
          <div className="github-result-card">
            <div className="github-image-container">
              <img src={github.avatar_url} alt="" />
            </div>

            <div className="github-result-card-info">
              <h3>Informações</h3>
              <ResultCard title="Perfil:" description={github.html_url} />
              <ResultCard title="Seguidores:" description={github.followers} />
              <ResultCard title="Localidade:" description={github.location} />
              <ResultCard title="Nome:" description={github.name} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GithubSearch;
