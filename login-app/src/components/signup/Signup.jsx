import React, { useState } from "react";
function Signup(props) {
  const [User, setUser] = useState({
    nameC: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setUser((prevValue) => {
      if (name === "nameC") {
        return {
          nameC: value,
          email: prevValue.email,
          password: prevValue.password,
        };
      } else if (name === "email") {
        return {
          nameC: prevValue.nameC,
          email: value,
          password: prevValue.password,
        };
      } else if (name === "password") {
        return {
          nameC: prevValue.nameC,
          email: prevValue.email,
          password: value,
        };
      }
    });
  }

  function SignUpUser(event) {
    props.onAddUser(User);
    event.preventDefault();
  }

  return (
    <div className="container d-flex justify-content-center align-items-center 100-w vh-100 ">
      <div className=" rounded bg-light  p-5 shadow-lg">
        <form>
          <h1>
            <strong>Registar </strong>
          </h1>
          <h2>Registe-se para entrar </h2>
          <div className="form-floating mb-3 mt-3">
            <input
              type="text"
              name="nameC"
              className="form-control"
              onChange={handleChange}
              value={User.nameC}
              placeholder="Nome"
            />
            <label htmlFor="floatingNome">Nome Completo</label>
          </div>
          <div className="form-floating mb-3 mt-3">
            <input
              name="email"
              type="email"
              className="form-control"
              onChange={handleChange}
              value={User.email}
              placeholder="nome@exemplo.com"
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={handleChange}
              value={User.password}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div>
            <button
              className=" btn btn-primary w-100 py-2"
              onClick={SignUpUser}
              type="submit"
            >
              Registar
            </button>
          </div>
          <p className=" mt-3">
            Já tem conta? <a href="/Login"> Faça login aqui! </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
