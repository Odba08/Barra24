import "./hero.scss";
import { useState, useRef } from "react";
import { translations } from "../translation"; 

import photo from "../../Assets/img/photo.jpg";
import logo from "../../Assets/img/logo-full.svg";
import bars from "../../Assets/icons/bars-solid.svg";
import emailjs from '@emailjs/browser';
import App from "../slider/App";

function Hero() {
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  
  // LÓGICA DE TRADUCCIÓN
  const [language, setLanguage] = useState('es'); 
  const t = translations[language]; 

  const toggleLanguage = (e) => {
    e.preventDefault(); 
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const form = useRef();
  const [message, setMessage] = useState('');
  
  const [emailStatus, setEmailStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (emailStatus === 'success') return;

    const serviceId = 'service_ewdgh8v';
    const templateId = 'template_h0ukis9';
    const publicKey = '_FfIfZqUPzki2OtXB';

    const templateParams = {
      email: message,      
      name: "Barra24-Website",  
      time: new Date().toLocaleString()
    };
  
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Mensaje enviado correctamente!', response);
        
        setEmailStatus('success');
        setMessage(''); 
        
        setTimeout(() => {
            setEmailStatus(null);
        }, 4000);

      }, (error) => {
        console.error('Error al enviar:', error.text);
        
        setEmailStatus('error');
        
        setTimeout(() => {
            setEmailStatus(null);
        }, 4000);
      });
  }

  return (
    <div className="hero">
      <header>
        <nav>
          <div className="leftchanel">
            <div className="navbar">
              <a href="/">
                <img src={logo} alt="Logo" className="logo" />
              </a>
              <img src={bars} alt="icon" className="open" onClick={() => setSidePanelOpen(true)} />
            </div>
            {/* MENÚ MÓVIL */}
            <div className="sidenav" id="mySidepanel" style={{width: sidePanelOpen ? '150px' : '0'}}>
            <button className="closebtn" onClick={() => setSidePanelOpen(false)}> x </button>

              <div className="minsidnav">
                <a href="/">{t.nav.service}</a>
                <a href="/">{t.nav.contact}</a>
                <a href="/" onClick={toggleLanguage}>{t.nav.lang}</a>
              </div>
            </div>
          </div>
          
          {/* MENÚ ESCRITORIO */}
          <div className="rightchanel">
            <div className="sidecontent">
              <div className="first">
                <a href="/" id="servicio">
                  {t.nav.service}
                </a>
              </div>
              <div className="second">
                <a href="/" id="contacto">
                  {t.nav.contact}
                </a>
              </div>
              <div className="third">
                <a href="/" id="idioma" onClick={toggleLanguage}>
                  {t.nav.lang}
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="left">
          <main>
            <section>
              <div className="hero">
                <div className="info">
                  <h1>
                    {t.hero.title_part1}<span className="solution">{t.hero.title_span}</span>{t.hero.title_part2}
                  </h1>
                  <p className="text">
                    {t.hero.subtitle}
                  </p>
                </div>

                <div className="contact">
                  <p className="text">
                    {t.hero.contact_text}
                  </p>
                </div>

                <div className="formulario">
                  <form action="" ref={form} className="form" onSubmit={sendEmail}>
                    <input
                      type="email"
                      id="input"
                      placeholder={t.hero.form_placeholder}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required // Agregado para validación básica de HTML
                    />
                    <button type="submit" id="button">
                      {t.hero.form_button}
                    </button>

                    {/* BLOQUE DE FEEDBACK VISUAL */}
                    {emailStatus === 'success' && (
                        <div className="status-message success">
                            <span>{t.hero.success_msg}</span>
                        </div>
                    )}

                    {emailStatus === 'error' && (
                        <div className="status-message error">
                            <span>{t.hero.error_msg}</span>
                        </div>
                    )}
                    
                  </form>
                </div>

                <div className="solutions">
                  <App />
                </div>

                <div className="actions">
                  <a href="/" className="actionstext">
                    {t.hero.action_contact}
                  </a>
                  <a href="/" className="actionstext">
                      {t.hero.action_know}
                  </a>
                </div>

                <div className="socials">
                  <img src="" alt="" />
                </div>
              </div>
            </section>
          </main>
        </div>

        <div className="RightContainer">
          <div className="right">
            <div className="relleno"></div>

            <div className="image">
              <div className="ringcontainer">
                <div className="ext-ring">
                  <div className="int-ring"></div>

                  <img src={photo} alt="" />
                </div>
              </div>

              <div className="image-rectangle">
                <div className="ext-ring">
                  <div className="int-ring"></div>

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