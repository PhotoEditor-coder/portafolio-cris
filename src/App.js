import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import './App.css';

function App() {
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);
  const [vantaEnabled, setVantaEnabled] = useState(true);

  useEffect(() => {
    if (vantaEnabled && vantaRef.current && !vantaEffectRef.current && window.VANTA) {
      vantaEffectRef.current = window.VANTA.NET({
        el: vantaRef.current,
        THREE: THREE,
        color: 0x00fff7,
        backgroundColor: 0x0f1115,
        points: 12.0,
        maxDistance: 20.0,
        spacing: 15.0,
      });
    }

    if (!vantaEnabled && vantaEffectRef.current) {
      vantaEffectRef.current.destroy();
      vantaEffectRef.current = null;
    }

    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
    };
  }, [vantaEnabled]);

  return (
  <div
  ref={vantaRef}
  className={`vanta-background ${!vantaEnabled ? 'fondo-estatico' : ''}`}
>
  <div className="vanta-toggle">
    <button onClick={() => setVantaEnabled((prev) => !prev)}>
      {vantaEnabled ? 'Desactivar fondo' : 'Activar fondo'}
    </button>
  </div>


      <div className="container">
        {/* tu contenido animado con Framer Motion */}
        {/* ... header, hero, sections, etc. */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Cristian Moreno</h1>
          <p className="tagline">Desarrollador Fullstack Web</p>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a href="#projects">Proyectos</a>
            <a href="#about">Sobre mí</a>
            <a href="#contact">Contacto</a>
          </motion.nav>
        </motion.header>

        <motion.section
          id="hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <h2>¡Hola! Bienvenido a mi portafolio</h2>
          <p>Apasionado por el desarrollo web, creando soluciones eficientes y modernas.</p>
        </motion.section>

        <motion.section
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Proyectos</h2>
          <div className="cards">
            {[1, 2, 3].map((n) => (
              <motion.div
                className="card"
                key={n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: n * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="img-placeholder">Imagen {n}</div>
                <h3>Proyecto {n}</h3>
                <p>Descripción breve del proyecto y tecnologías utilizadas.</p>
                <div className="card-buttons">
                  <a href="#" className="btn">Ver demo</a>
                  <a href="#" className="btn outline">Ver código</a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="about"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Sobre mí</h2>
          <p>
            I’m a multilingual Full Stack Web Developer and IT Support Specialist with hands-on experience delivering responsive, dynamic web applications. My diverse background in photography, digital media, and international customer service makes me highly adaptable and effective in fast-paced environments.
          </p>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Contacto</h2>
          <p>Email: <a href="mailto:correo@ejemplo.com">benavidesmoreno1@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/PhotoEditor-coder" target="_blank" rel="noreferrer">PhotoEditor-coder</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/cbenavides-dev/" target="_blank" rel="noreferrer">/in/cbenavides-dev</a></p>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          © 2025 Cristian Moreno – Portafolio Web
        </motion.footer>
      </div>
    </div>
  );
}

export default App;
