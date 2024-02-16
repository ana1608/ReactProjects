import "./Home-css.css";
import { ImHappy } from "react-icons/im";

function Sobreti() {
  return (
    <div className="container d-flex justify-content-center align-items-center 100-w vh-100 ">
      <div className=" rounded bg-light  p-5 shadow-lg">
        <form>
          <h1>
            <strong>
              Sobre ti <ImHappy />
            </strong>
          </h1>

          <div className="mt-3">
            <p>O teu primeiro nome:</p>
            <p>O teu penultimo nome:</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sobreti;
