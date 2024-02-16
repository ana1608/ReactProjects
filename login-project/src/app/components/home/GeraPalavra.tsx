import "./Home-css.css";
import { ImHappy } from "react-icons/im";

function Sobreti() {
  return (
    <div className="container d-flex justify-content-center align-items-center 100-w vh-100 ">
      <div className=" rounded bg-light  p-5 shadow-lg">
        <form>
          <h1>
            <strong>
              Gera palavras! <ImHappy />
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
        </form>
      </div>
    </div>
  );
}

export default Sobreti;
