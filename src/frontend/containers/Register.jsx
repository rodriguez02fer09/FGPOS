import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import '../assets/styles/containers/Register.scss';

const Register = (props) => {
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
    props.registerRequest(form, '/login');
  };

  return (
    <section className="register_container">
      {/* <img className="img" src={logo} alt="user" /> */}
      <h2>Crea tu cuenta</h2>
      <h5>¡Y maneja tus productos como nunca antes lo imaginaste!</h5>
      <form className="register_container--form" onSubmit={handleSubmit}>
        <input
          type="Nombre"
          placeholder="Nombre de tu negocio"
          onChange={handleInput}
          required
        />
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
          Crear cuenta
        </button>
      </form>
      <p className="register__container--login">
        ¿Ya tienes una cuenta?
        {' '}
        <span role="listitem" onClick={() => props.history.push('/login')}>Inicia sesión</span>
      </p>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
