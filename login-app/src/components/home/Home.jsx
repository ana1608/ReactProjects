import { ImHappy } from "react-icons/im";
import { SlLogin } from "react-icons/sl";

function Home() {
  return (
    <div className="container d-flex justify-content-center align-items-center 100-w vh-100 ">
      <div className=" rounded bg-light   shadow-lg">
        <div className="m-2 d-flex justify-content-end">
          <button className=" btn btn-light textoB" type="submit">
            <SlLogin /> <strong>Sair</strong>
          </button>
        </div>
        <div className="pb-5 pe-5 ps-5">
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
    </div>
  );
}

export default Home;
