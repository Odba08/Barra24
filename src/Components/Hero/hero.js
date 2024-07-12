import "./hero.scss";
import { useState, useRef } from "react";

import photo from "../../Assets/img/photo.jpg";
import logo from "../../Assets/img/logo-full.svg";
import finger from "../../Assets/icons/fingerprint-solid.svg";
import bars from "../../Assets/icons/bars-solid.svg";
import emailjs from '@emailjs/browser';
import App from "../slider/App";



function Hero() {
    
const [sidePanelOpen, setSidePanelOpen] = useState(false);
const form = useRef();
const [message, setMessage] = useState('');

const sendEmail = (e) => {

  e.preventDefault();

  const serviceId = 'service_h0xb9ua';
  const templateId = 'template_bukdjk6';
  const publicKey = 'XRmSLdGaZmvIiOkOI';

  const templateParams = {
    message: message,
  };
  
  emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('Mensaje enviado correctamente!', response);
      setMessage('');
    }, (error) => {
      console.log(error.text);
    });
 
  }


  return (
    <div className="hero">
      <header>
        <nav>
          <div class="leftchanel">
            <div class="navbar">
              <a href="/">
                <img src={logo} alt="Logo" class="logo" />
              </a>
              <img src={bars} alt="icon" class="open" onClick={() => setSidePanelOpen(true)} />
            </div>
            <div class="sidenav" id="mySidepanel" style={{width: sidePanelOpen ? '150px' : '0'}}>
            <button className="closebtn" onClick={() => setSidePanelOpen(false)}> x </button>

              <div class="minsidnav">
                <a href="/">Servicio</a>
                <a href="/">Contacto</a>
                <a href="/">EN/ES</a>
              </div>
            </div>
          </div>
          <div class="rightchanel">
            <div class="sidecontent">
              <div class="first">
                <a href="/" id="servicio">
                  Servicio
                </a>
              </div>
              <div class="second">
                <a href="/" id="contacto">
                  Contacto
                </a>
              </div>
              <div class="third">
                <a href="/" id="idioma">
                  EN/ES
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div class="container">
        <div class="left">
          <main>
            <section>
              <div class="hero">
                <div class="info">
                  <h1>
                    La<span class="solution"> solución</span> es un clic.
                  </h1>
                  <p class="text">
                    Soluciones tecnológicas, tu empresa compite alto, y nuestros
                    expertos confían en tus sueños.
                  </p>
                </div>

                <div class="contact">
                  <p class="text">
                    Contacta con expertos, y agenda proyectos para optimizar el
                    funcionamiento de los sistemas de tu empresa.
                  </p>
                </div>

                <div class="formulario">
                  <form action="" ref={form} class="form" onSubmit={sendEmail}>
                    <input
                      type="email"
                      id="input"
                      placeholder="Recibe un correo por parte de nosotros"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="submit" id="button">
                      Enviame un mail
                    </button>
                  </form>
                </div>

                <div class="solutions">
                  {/* <img src={finger} alt="Simbolo del servicio" id="dedo" />
                  <h4>Sistemas de control de acceso</h4> */}

                  <App />
                </div>

                <div class="actions">
                  <a href="/" class="actionstext">
                    Contacta con un asesor
                  </a>
                  <a href="/" class="actionstext">
                    Conoce nuestros servicios
                  </a>
                </div>

                <div class="socials">
                  <img src="" alt="" />
                </div>
              </div>
            </section>
          </main>
        </div>

        <div class="RightContainer">
          <div class="right">
            <div class="relleno"></div>

            <div class="image">
              <div class="ringcontainer">
                <div class="ext-ring">
                  <div class="int-ring"></div>

                  <img src={photo} alt="" />
                </div>
              </div>

              <div class="image-rectangle">
                <div class="ext-ring">
                  <div class="int-ring"></div>

                  <img src={photo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default Hero;
