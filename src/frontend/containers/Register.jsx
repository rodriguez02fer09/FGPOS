import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import '../assets/styles/containers/Register.scss';

const Register = ({ registerRequest, loadingAuth, history }) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerRequest(form);
  };

  return (
    <section className="register_container no-select">
      <h2>Crea tu cuenta</h2>
      <h5>¡Y maneja tus productos como nunca antes lo imaginaste!</h5>
      <form className="register_container--form" onSubmit={handleSubmit}>
        <input
          type="Nombre"
          name="name"
          placeholder="Nombre de tu negocio"
          onChange={handleInput}
          disabled={loadingAuth}
          required
        />
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
            Crear cuenta
          </button>
        )}
        {loadingAuth && <i className="fas fa-spin fa-spinner fa-lg color-secondary" />}
      </form>
      <p className="register__container--login">
        ¿Ya tienes una cuenta?&nbsp;
        <span role="listitem" onClick={() => history.push('/login')}>Inicia sesión</span>
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
  registerRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
