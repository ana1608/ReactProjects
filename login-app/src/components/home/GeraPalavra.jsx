import { ImArrowLeft2 } from "react-icons/im";
import { ImCool } from "react-icons/im";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Sobreti() {
  useEffect(() => {
    if (sessionStorage.getItem("session") === "false") {
      setTimeout(() => navigate(`/login`));
    }
  });

  const [numero, setNumero] = useState(0);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/home`;
    navigate(path);
  };

  const [Stringlist, setStringlist] = useState([]);
  function gerar(event) {
    setStringlist("");
    var intnumero = Math.floor(numero);
    var palavra = "";
    for (let i = 0; i < intnumero; i++) {
      palavra = "";
      for (let j = 0; j < 10; j++) {
        if (j === 1) {
          palavra += "A";
        } else if (j === 8) {
          palavra += "B";
        } else {
          palavra += Math.random().toString(36)[2];
        }
      }

      if (Stringlist.includes(palavra)) {
        intnumero++;
      } else {
        let x = palavra;
        setStringlist((prevPalavra) => {
          return [...prevPalavra, x];
        });
      }
    }

    event.preventDefault();
  }

  function handleChange(event) {
    setNumero(event.target.value);
  }

  return (
    <div className="container d-flex justify-content-center align-items-center 100-w vh-100 ">
      <div className=" rounded bg-light  shadow-lg ">
        <div className="m-2">
          <button
            className="textoB btn btn-light text-start"
            onClick={routeChange}
          >
            <ImArrowLeft2 />
          </button>
        </div>
        <div className="pb-5 pe-5 ps-5">
          <form>
            <h1>
              <strong>
                Gera palavras! <ImCool />
              </strong>
            </h1>
            <h2>Insere um número abaixo </h2>

            <div className="form-floating mb-3 mt-3">
              <input
                type="number"
                className="form-control"
                placeholder="Insira um número"
                value={numero}
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Número</label>
            </div>

            <div className="mt-3">
              <button className=" btn btn-primary w-100 py-2" onClick={gerar}>
                Gerar
              </button>
            </div>
          </form>

          <div className="mt-3">
            <ul
              className="list-group"
              data-bs-spy="scroll"
              tabIndex="0"
              style={{ overflowY: "scroll", height: "170px" }}
            >
              {Stringlist.map((item, index) => {
                return (
                  <li className="list-group-item" key={index}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobreti;
