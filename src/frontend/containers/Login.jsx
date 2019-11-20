import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
import '../assets/styles/containers/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // props.loginUser(form, '/');
  };

  return (
    <section className="login_container">
      <h2>Inicia sesión</h2>
      <section className="login__container--social-media">
        <p className="twitter-login">
          <i className="fab fa-twitter" />
          &nbsp;Inicia sesión con Twitter
        </p>
        <p className="google-login">
          <i className="fab fa-google" />
          &nbsp;Inicia sesión con Google
        </p>
      </section>
      <hr />
      <form className="login_container--form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
          onChange={handleInput}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={handleInput}
          required
        />
        <button className="submit" type="submit">
          Iniciar sesión
        </button>
      </form>

      <p className="login__container--register">
        ¿No tienes una cuenta?
        {' '}
        <span role="listitem" onClick={() => props.history.push('/register')}>Regístrate</span>
      </p>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
