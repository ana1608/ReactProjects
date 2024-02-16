import "./Home-css.css";
import { ImHappy } from "react-icons/im";

function Home() {
  return (
    <div className="container d-flex justify-content-center align-items-center 100-w vh-100 ">
      <div className=" rounded bg-light  p-5 shadow-lg">
        <form>
          <h1>
            <strong>
              Bem-vindo! <ImHappy />
            </strong>
          </h1>
          <h2>Escolhe uma das opções abaixo </h2>

          <div className="mt-4">
            <button className=" btn btn-primary w-100 py-2" type="submit">
              Sobre ti
            </button>
          </div>

          <div className="mt-3">
            <button className=" btn btn-primary w-100 py-2" type="submit">
              Gerador de palavras
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
