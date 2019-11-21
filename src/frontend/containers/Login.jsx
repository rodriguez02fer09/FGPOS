import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
import '../assets/styles/containers/Login.scss';

const Login = ({ loginRequest, loadingAuth, history }) => {
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
    loginRequest(form);
  };

  return (
    <section className="login_container no-select">
      <h2>Inicia sesión</h2>
      {!loadingAuth && (
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
      )}
      <hr />
      <form className="login_container--form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Correo"
          onChange={handleInput}
          disabled={loadingAuth}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleInput}
          disabled={loadingAuth}
          required
        />
        {!loadingAuth && (
          <button className="submit" type="submit">
            Iniciar sesión
          </button>
        )}
        {loadingAuth && <i className="fas fa-spin fa-spinner fa-lg color-secondary" />}
      </form>

      <p className="login__container--register">
        ¿No tienes una cuenta?&nbsp;
        <span role="listitem" onClick={() => history.push('/register')}>Regístrate</span>
      </p>
    </section>
  );
};

const mapStateToProps = ({ loadingAuth }) => {
  return {
    loadingAuth,
  };
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
