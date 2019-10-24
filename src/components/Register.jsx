import React from "react";
import "../assets/styles/components/Register.scss";
import { connect } from "react-redux";
import { RegisterRequest } from "../actions";
import logo from "../assets/images/logopos.png";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitForm(event) {
    event.preventDefault();
    this.props.RegisterRequest(this.state);
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
              <button className="button" onClick={this.submitForm}>
                Crear tu cuenta
              </button>
            </form>
            <section className="footer_register">
              <a href="/">Términos de uso</a>
              <a href="/">Declaración de privacidad</a>
              <a href="/">Centro de ayuda</a>
              <p className="login__container--register">
                ¿Ya tienes una cuenta? <a href="">Ingresar</a>
              </p>
            </section>
          </section>
        </section>
        <section className="container_info"></section>
      </>
    );
  }
}

const mapDispatchToProps = {
  RegisterRequest
};

export default connect(
  null,
  mapDispatchToProps
)(Register);
