import React, { useState } from "react";

function Login(props) {
  const [User, setUser] = useState({
    nameC: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setUser((prevValue) => {
      if (name === "email") {
        return {
          email: value,
          password: prevValue.password,
        };
      } else if (name === "password") {
        return {
          email: prevValue.email,
          password: value,
        };
      }
    });
  }

  function loginUser(event) {
    props.onGetUser(User);
    event.preventDefault();
  }

  return (
    <div className="container d-flex justify-content-center align-items-center 100-w vh-100 ">
      <div className=" rounded bg-light  p-5 shadow-lg">
        <form>
          <h1 className="">
            <strong>Login </strong>
          </h1>
          <h2>Faça login para entrar </h2>
          <div className="form-floating mb-3 mt-3">
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={handleChange}
              value={User.email}
              placeholder="nome@exemplo.com"
            />
            <label htmlFor="floatingemail">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="password"
              onChange={handleChange}
              value={User.password}
            />
            <label htmlFor="floatingpassword">Password</label>
          </div>

          <div>
            <button
              className=" btn btn-primary w-100 py-2"
              type="submit"
              onClick={loginUser}
            >
              Entrar
            </button>
          </div>
          <p className=" mt-3">
            Ainda não tem conta? <a href="/signUp"> Registe-se aqui!</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
