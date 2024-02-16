import "./Login-css.css";

function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center 100-w vh-100 ">
      <div className=" rounded bg-light  p-5 shadow-lg">
        <form>
          <h1>
            <strong>Login </strong>
          </h1>
          <h2>Faça login para entrar </h2>
          <div className="form-floating mb-3 mt-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="nome@exemplo.com"
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div>
            <button className=" btn btn-primary w-100 py-2" type="submit">
              Entrar
            </button>
          </div>
          <p className=" mt-3">
            Ainda não tem conta? <a href=""> Registe-se aqui!</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
