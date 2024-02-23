import { ImHappy } from "react-icons/im";
import { SlLogin } from "react-icons/sl";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  useEffect(() => {
    if (sessionStorage.getItem("session") === "false") {
      setTimeout(() => navigate(`/login`));
    }
  });

  let navigate = useNavigate();

  function routeChangeGP() {
    let path = `/geraPalavra`;
    routeChange(path);
  }

  function routeChangeST() {
    let path = `/sobreTi`;
    routeChange(path);
  }

  function routeChangeOut() {
    sessionStorage.clear();
    sessionStorage.setItem("session", false);
    let path = `/login`;
    routeChange(path);
  }

  const routeChange = (path) => {
    navigate(path);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center 100-w vh-100 ">
      <div className=" rounded bg-light   shadow-lg">
        <div className="m-2 d-flex justify-content-end">
          <button className=" btn btn-light textoB" onClick={routeChangeOut}>
            <SlLogin /> <strong>Sair</strong>
          </button>
        </div>
        <div className="pb-5 pe-5 ps-5">
          <h1>
            <strong>
              Bem-vindo! <ImHappy />
            </strong>
          </h1>
          <h2>Escolha uma das opções abaixo </h2>

          <div className="mt-4">
            <button
              className=" btn btn-primary w-100 py-2"
              onClick={routeChangeST}
            >
              Sobre ti
            </button>
          </div>

          <div className="mt-3">
            <button
              className=" btn btn-primary w-100 py-2"
              onClick={routeChangeGP}
            >
              Gerador de palavras
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
