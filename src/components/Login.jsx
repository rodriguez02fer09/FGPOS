import React from 'react';
import '../assets/styles/Login.scss';

 class Login extends React.Component{
    render(){
        return (
            <section className="login_container">
      <section className="login">
        <h2>Iniciar Sesiòn</h2>
        <form className="login__container--form">
          <input className="input" type="text" placeholder="Correo" />
          <input className="input" type="password" placeholder="Contraseña" />
          <button className="button">Iniciar sesión</button>
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
            />Iniciar seciòn con google
          </div>
          <div>
            <img
              src="https://img.icons8.com/color/48/000000/twitter.png"
              alt="twitter"
            />Iniciar seciòn con twitter
          </div>
        </section>

        <p className="login__container--register">
          No tienes ninguna cuenta <a href="">Regístrate</a>
        </p>
      </section>
    </section>
        )
    }
 }

 export default Login;
  