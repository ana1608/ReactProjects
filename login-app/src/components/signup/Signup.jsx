import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [User, setUser] = useState({
    nameC: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    sessionStorage.setItem("session", false);
  }, []);

  let navigate = useNavigate();

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

  const [errors, setErrors] = useState({});

  const isFormValid = Object.keys(errors).length === 0;
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!User.nameC) {
      newErrors.nomec = "O nome é obrigatório";
      isValid = false;
    }

    if (!User.email) {
      newErrors.email = "O email é obrigatório";
      isValid = false;
    }

    if (!User.password) {
      newErrors.password = "A password é obrigatória";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const fetchData = async () => {
    try {
      // eslint-disable-next-line
      const newData = await fetch("/apiadd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(User),
      }).then((res) => res.text());

      alert("Utilizador registado com sucesso!");
      navigate(`/login`);
    } catch (error) {
      alert("Utilizador não adicionado tente novamente!");
    }
  };

  const fetchEmail = async () => {
    try {
      const newData = await fetch("/apiemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(User),
      }).then((res) => res.text());

      if (newData.length > 2) {
        alert("Esse utilizador já existe! Faça login ou utilize outro email!");
      } else {
        fetchData();
      }
    } catch (error) {
      alert("Ocorreu um erro :( Por favor, tente novamente!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      fetchEmail();
    } else {
      alert("Por favor, verifique se inseriu os seus dados corretamente!");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center 100-w vh-100 ">
      <div className=" rounded bg-light  p-5 shadow-lg">
        <form onSubmit={handleSubmit}>
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
              maxLength={20}
              required
            />
            {errors.nameC && <div className="error">{errors.nameC}</div>}
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
              required
            />
            {errors.email && <div className="error">{errors.email}</div>}
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
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Mínimo de 8 caracteres, pelo menos uma letra maiúscula, uma letra minúscula e um número"
              required
            />
            {errors.password && <div className="error">{errors.password}</div>}
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div>
            <button
              className=" btn btn-primary w-100 py-2"
              type="submit"
              disabled={!isFormValid}
            >
              Registar
            </button>
          </div>
          <p className=" mt-3">
            Já tem conta? <a href="/login"> Faça login aqui! </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
