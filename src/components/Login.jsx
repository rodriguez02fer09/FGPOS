import React from "react";
import { connect } from "react-redux";

import { LoginRequest } from "../actions";

import "../assets/styles/components/Login.scss";

class Login extends React.Component {
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
    this.props.LoginRequest(this.state);
    // this.props.history.push("/");
  }

  render() {
    return (
      <section className="login_container">
        <section className="login">
          <h2>Iniciar Sesión</h2>
          <form className="login__container--form">
            <input
              className="input"
              type="text"
              name="email"
              placeholder="Correo"
              onChange={this.handleChange}
            />
            <input
              className="input"
              name="password"
              type="password"
              placeholder="Contraseña"
              onChange={this.handleChange}
            />
            <button className="button" onClick={this.submitForm}>
              Iniciar sesión
            </button>
            <div className="login__container--remember-me">
              <label htmlFor="cbox1">
                <input type="checkbox" name="" id="cbox1" value="checkbos" />
                Recuérdame
              </label>
              <a href="/">Olvidé mi contraseña</a>
            </div>
          </form>
          <section className="login__container--social-media">
            <div>
              <img
                src="https://img.icons8.com/ios/50/000000/google-plus.png"
                alt="google"
              />
              Iniciar seciòn con google
            </div>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/twitter.png"
                alt="twitter"
              />
              Iniciar seciòn con twitter
            </div>
          </section>

          <p className="login__container--register">
            No tienes ninguna cuenta <a href="">Regístrate</a>
          </p>
        </section>
      </section>
    );
  }
}

const mapDispatchToProps = {
  LoginRequest
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
