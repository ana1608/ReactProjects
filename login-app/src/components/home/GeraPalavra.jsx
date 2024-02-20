import { ImArrowLeft2 } from "react-icons/im";
import { ImCool } from "react-icons/im";

function Sobreti() {
  return (
    <div className="container d-flex justify-content-center align-items-center 100-w vh-100 ">
      <div className=" rounded bg-light  shadow-lg ">
        <div className="m-2">
          <button className="textoB btn btn-light text-start" type="submit">
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
                id="floatingInput"
                placeholder="nome@exemplo.com"
              />
              <label htmlFor="floatingInput">Número</label>
            </div>

            <div className="mt-3">
              <button className=" btn btn-primary w-100 py-2" type="submit">
                Gerar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sobreti;
