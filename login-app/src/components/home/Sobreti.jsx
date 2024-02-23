import React, { useState, useEffect } from "react";
import { ImHeart } from "react-icons/im";
import { ImArrowLeft2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
function Sobreti() {
  let navigate = useNavigate();
  const [nome, setnome] = useState({
    Fnome: "",
    Pnome: "",
  });

  const routeChange = () => {
    let path = `/home`;
    navigate(path);
  };

  useEffect(() => {
    if (sessionStorage.getItem("session") === "false") {
      setTimeout(() => navigate(`/login`));
    } else {
      var names = sessionStorage.getItem("nome");
      var arrNames = names.split(/\s+/);

      if (arrNames.length <= 2) {
        let newname = { Fnome: arrNames[0], Pnome: arrNames[0] };
        setnome(newname);
      } else {
        let newname = {
          Fnome: arrNames[0],
          Pnome: arrNames[arrNames.length - 2],
        };
        setnome(newname);
      }
    }
  }, [navigate]);

  return (
    <div className="container d-flex justify-content-center align-items-center 100-w vh-100 ">
      <div className=" rounded bg-light  shadow-lg">
        <div className="m-2">
          <button
            className=" btn btn-light textoB text-start"
            onClick={routeChange}
          >
            <ImArrowLeft2 />
          </button>
        </div>
        <div className="pb-5 pe-5 ps-5">
          <form>
            <h1>
              <strong>
                Sobre ti <ImHeart />
              </strong>
            </h1>

            <div className="mt-4">
              <p>O teu primeiro nome: {nome.Fnome}</p>
              <p>O teu penúltimo nome: {nome.Pnome}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sobreti;
