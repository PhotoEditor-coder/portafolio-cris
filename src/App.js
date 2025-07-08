import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Luis Ramírez</h1>
        <p className="tagline">Desarrollador Fullstack Web</p>
        <nav>
          <a href="#projects">Proyectos</a>
          <a href="#about">Sobre mí</a>
          <a href="#contact">Contacto</a>
        </nav>
      </header>

      <section id="hero">
        <h2>¡Hola! Bienvenido a mi portafolio</h2>
        <p>Apasionado por el desarrollo web, creando soluciones eficientes y modernas.</p>
      </section>

      <section id="projects">
        <h2>Proyectos</h2>
        <div className="cards">
          {[1, 2, 3].map((n) => (
            <div className="card" key={n}>
              <div className="img-placeholder">Imagen {n}</div>
              <h3>Proyecto {n}</h3>
              <p>Descripción breve del proyecto y tecnologías utilizadas.</p>
              <div className="card-buttons">
                <a href="#" className="btn">Ver demo</a>
                <a href="#" className="btn outline">Ver código</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about">
        <h2>Sobre mí</h2>
        <p>Soy un desarrollador web fullstack con conocimientos en React, PHP, MySQL, y Node.js. Me gusta crear código limpio, funcional y bien estructurado.</p>
      </section>

      <section id="contact">
        <h2>Contacto</h2>
        <p>Email: <a href="mailto:correo@ejemplo.com">correo@ejemplo.com</a></p>
        <p>GitHub: <a href="https://github.com/luisramirez" target="_blank" rel="noreferrer">luisramirez</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/luisramirez" target="_blank" rel="noreferrer">/in/luisramirez</a></p>
      </section>

      <footer>
        © 2025 Luis Ramírez – Portafolio Web
      </footer>
    </div>
  );
}

export default App;
