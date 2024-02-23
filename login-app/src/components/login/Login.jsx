import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(props) {
  const [User, setUser] = useState({
    nameC: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();

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

  const fetchLogin = async () => {
    const newData = await fetch("/apiemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(User),
    }).then((res) => res.json());

    if (newData.length > 0) {
      localStorage.setItem("nome", newData[0].Nome);
      navigate(`/home`);

      //localStorage.setItem("login", "1");
    } else {
      alert("Dados de login incorretos. Tente outra vez!");
    }
    console.log(newData);
  };

  function loginUser(event) {
    event.preventDefault();
    localStorage.clear();
    fetchLogin();
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
