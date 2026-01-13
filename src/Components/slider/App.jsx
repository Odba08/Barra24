import React, { useState, useEffect } from 'react';
import './App.scss';

// --- IMÁGENES ESCRITORIO (Carpeta Carrusel) ---
import service1 from '../../Assets/img/Carrusel/service1.png';
import service2 from '../../Assets/img/Carrusel/service2.png';
import service3 from '../../Assets/img/Carrusel/service3.png';
import service4 from '../../Assets/img/Carrusel/service4.png';
import service5 from '../../Assets/img/Carrusel/service5.png';
import service6 from '../../Assets/img/Carrusel/service6.png';
import service7 from '../../Assets/img/Carrusel/service7.png';
import service8 from '../../Assets/img/Carrusel/service8.png';
import service9 from '../../Assets/img/Carrusel/service9.png';
import service10 from '../../Assets/img/Carrusel/service10.png';
import service11 from '../../Assets/img/Carrusel/service11.png';
import service12 from '../../Assets/img/Carrusel/service12.png';
import service13 from '../../Assets/img/Carrusel/service13.png';
import service14 from '../../Assets/img/Carrusel/service14.png';
import service15 from '../../Assets/img/Carrusel/service15.png';
import service16 from '../../Assets/img/Carrusel/service16.png';
import service17 from '../../Assets/img/Carrusel/service17.png';
import service18 from '../../Assets/img/Carrusel/service18.png';
import service19 from '../../Assets/img/Carrusel/service19.png';
import service20 from '../../Assets/img/Carrusel/service20.png';

// --- IMÁGENES MÓVIL (Carpeta img raiz) ---
// Asegúrate de que la extensión sea .png, si son .jpg cámbialo aquí
import mob1 from '../../Assets/img/1.jpg';
import mob2 from '../../Assets/img/2.jpg';
import mob3 from '../../Assets/img/3.jpg';
import mob4 from '../../Assets/img/4.jpg';
import mob5 from '../../Assets/img/5.jpg';

const desktopImages = [
  service1, service2, service3, service4, service5, service6, service7, service8,
  service9, service10, service11, service12, service13, service14, service15,
  service16, service17, service18, service19, service20
];

const mobileImages = [
  mob1, mob2, mob3, mob4, mob5
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Detectamos si es móvil al inicio (menor a 869px coincide con tu CSS)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 869);

  // Listener para cambio de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 869);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Seleccionamos qué array usar dinámicamente
  const currentImages = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const interval = setInterval(() => {
      // Usamos currentImages.length para que funcione con ambos arrays
      setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImages]); // Se reinicia si cambia de móvil a desktop

  return (
    <div className="carousel-container">
      <div className="carousel">
        {currentImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`carousel-${isMobile ? 'mobile' : 'desktop'}-${index + 1}`}
            className={index === currentIndex ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  );
}

export default App;