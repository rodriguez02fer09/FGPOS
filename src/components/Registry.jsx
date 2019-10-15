import React from "react";
import "../assets/styles/components/Registry.scss";

class Registry extends React.Component {
  render() {
    return (
      <div>
        <section class="container_registro">
          <section className="container">
            <img className="img" src="logopos.png" alt="user" />
            <h2>¡Crea tu cuenta!</h2>
            <form className="registro_container--form">
              <input className="input" type="text" placeholder="Correo" />
              <input
                className="input"
                type="password"
                placeholder="Contraseña"
              />
              <input
                className="input"
                type="Nombre"
                placeholder="Nombre de tu Negocio"
              />
              <button className="button">Crear tu cuenta</button>
            </form>
            <section className="footer">
              <a href="/">Términos de uso</a>
              <a href="/">Declaración de privacidad</a>
              <a href="/">Centro de ayuda</a>
              <p className="login__container--register">
                ¿Ya tienes una cuenta? <a href="">Ingresar</a>
              </p>
            </section>
          </section>
        </section>
        <section class="container_info"></section>
      </div>
    );
  }
}
export default Registry;
