import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';
import { connect } from 'react-redux';
import { RegisterRequest } from '../actions/index';
import logo from '../assets/Images/logopos.png';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitForm(event) {
    event.preventDefault();
    const { RegisterRequest } = this.props;
    RegisterRequest(this.state);
    // this.props.history.push("/");
  }

  render() {
    return (
      <>
        <section className="container_registro">
          <section className="container-r">
            <img className="img" src={logo} alt="user" />
            <h2>¡Crea tu cuenta!</h2>
            <form className="registro_container--form">
              <input className="input" type="text" placeholder="Correo" />
              <input
                className="input"
                type="password"
                placeholder="Contraseña"
                onChange={this.handleChange}
              />
              <input
                className="input"
                type="Nombre"
                placeholder="Nombre de tu Negocio"
                onChange={this.handleChange}
              />
              <button className="button" onClick={this.submitForm} type="button">
                Crear tu cuenta
              </button>
            </form>
            <section className="footer_register">
              <a href="/">Términos de uso</a>
              <a href="/">Declaración de privacidad</a>
              <a href="/">Centro de ayuda</a>
              <p className="login__container--register">
                ¿Ya tienes una cuenta?
                {' '}
                <Link to="/login">Ingresar</Link>
              </p>
            </section>
          </section>
        </section>
        <section className="container_info" />
      </>
    );
  }
}

const mapDispatchToProps = {
  RegisterRequest,
};

export default connect(
  null,
  mapDispatchToProps,
)(Register);
