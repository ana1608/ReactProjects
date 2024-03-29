import { ImHeart } from "react-icons/im";
import { ImArrowLeft2 } from "react-icons/im";
function Sobreti() {
  return (
    <div className="container d-flex justify-content-center align-items-center 100-w vh-100 ">
      <div className=" rounded bg-light  shadow-lg">
        <div className="m-2">
          <button className=" btn btn-light textoB text-start" type="submit">
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
              <p>O teu primeiro nome:</p>
              <p>O teu penúltimo nome:</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sobreti;
