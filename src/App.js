import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import './App.css';
import exam1Image from './images/exam1.jpg';
import exam2Image from './images/exam2.jpg';
import exam3Image from './images/exam3.jpg';
import exam4Image from './images/exam4.jpg';

function App() {
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);
  const [vantaEnabled, setVantaEnabled] = useState(true);
  const [expandedCards, setExpandedCards] = useState({});

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

  const toggleCard = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const projects = [
    {
      id: 1,
      title: 'Mobile-friendly website without Bootstrap',
      shortDescription: 'I developed a fully responsive website using only HTML and pure CSS, without relying on frameworks like Bootstrap.',
      fullDescription: 'I developed a fully responsive website using only HTML and pure CSS, without relying on frameworks like Bootstrap. This project showcases my ability to create clean, functional, and responsive designs from scratch, optimized for smooth user experiences across all devices.',
      image: exam1Image,

      demoLink: 'https://demo-ecommerce.com',
      codeLink: 'https://github.com/PhotoEditor-coder/ecommerce-platform',
    },
    {
      id: 2,
      title: 'Shopping list task manager',
      shortDescription: 'I built a simple and intuitive application that allows users to manage a shopping list.',
      fullDescription: 'I built a simple and intuitive application that allows users to manage a shopping list. It includes features like adding, removing, and marking items, making it easy to stay organized with a clean and user-friendly interface.',
      image: exam2Image,
      demoLink: 'https://cbenavides.dev',
      codeLink: 'https://github.com/PhotoEditor-coder/portfolio',
    },
    {
      id: 3,
      title: 'Webshop built with Angular',
      shortDescription: 'I created an online store using Angular, implementing dynamic components and a Single Page Application (SPA) architecture.',
      fullDescription: 'I created an online store using Angular, implementing dynamic components and a Single Page Application (SPA) architecture. This project highlights my skills in working with modern frameworks, building reusable components, and managing data flow across views.',
      image: exam3Image,
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 4,
      title: 'Photographer Website – Vanilla JavaScript',
      shortDescription: 'I developed a fully responsive website for a professional photographer using only Vanilla JavaScript, HTML, and custom CSS.',
      fullDescription: 'I developed a fully responsive website for a professional photographer using only Vanilla JavaScript, HTML, and custom CSS. The site features a landing section, dynamic portfolio gallery, biography, testimonials, client showcase, social media icons, and a contact page. Designed with a strong visual focus, it aims to highlight the photographer work and make it easy for potential clients to get in touch across all devices.',
      image: exam4Image,
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 5,
      title: 'Big Library Web Application (PHP & MySQL)',
      shortDescription: 'I built a full-stack web application that manages a digital library of books, CDs, and DVDs.',
      fullDescription: `I built a full-stack web application that manages a digital library of books, CDs, and DVDs.
The system allows users to view, search, and filter media entries, as well as add new items through a responsive front-end form. It includes:

- Full CRUD operations using PHP and MySQL
- Search functionality by title and author
- Media detail view with full metadata
- Publisher-specific media filtering
- Bootstrap-enhanced user interface
- GitHub repository with organized code and database

This project showcases my skills in both front-end and back-end development, as well as working with databases and dynamic content rendering.`,
      image: 'https://source.unsplash.com/featured/?library',
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 6,
      title: 'Adopt a Pet Platform (PHP & MySQL)',
      shortDescription: 'I developed a full-stack animal adoption platform using PHP and MySQL to connect users with animals in need of a home.',
      fullDescription: `I developed a full-stack animal adoption platform using PHP and MySQL to connect users with animals in need of a home. The system includes:

- Registration and login system with separate roles (users and admins)
- Display of all animals with filters for senior pets (8+ years)
- Detailed view for each animal with photo, age, size, vaccination status, and location
- Admin dashboard for full CRUD management of animal data
- Users can view pet profiles and adopt animals through a "Take me home" feature
- Adoption records saved in a dedicated table with timestamps

This project showcases my ability to manage user permissions, structure databases with foreign keys, and build real-world web applications with practical social impact.`,
      image: 'https://source.unsplash.com/featured/?pets',
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 7,
      title: 'Event Management Web Application (Symfony Framework)',
      shortDescription: 'Developed a responsive web application for a global event management company using the Symfony framework.',
      fullDescription: `Developed a responsive web application for a global event management company using the Symfony framework. The platform allows full CRUD operations for events, including filtering by event type (music, sport, theater, etc.). Each event includes detailed information such as date, time, description, image, location, contact details, and URL. The interface features a clean, mobile-friendly design built with Bootstrap, using custom HTML/CSS instead of Twig form themes.`,
      image: 'https://source.unsplash.com/featured/?pets',
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 8,
      title: 'E-commerce Web Application',
      shortDescription: 'Built a fully functional online store featuring user registration, product catalog browsing, shopping cart management, and checkout.',
      fullDescription: `Built a fully functional online store featuring user registration, product catalog browsing, shopping cart management, and checkout with email notifications. The system includes a complete admin panel for product and user management, sales statistics, and category organization. Integrated Google Maps for business location, with optional features like PayPal payments, profile picture uploads, and live chat support. Designed to provide a seamless user experience and mirror the essential features of platforms like Amazon.`,
      image: 'https://source.unsplash.com/featured/?pets',
      demoLink: '#',
      codeLink: '#'
    }
  ];

  return (
    <div
      ref={vantaRef}
      className={`vanta-background ${!vantaEnabled ? 'fondo-estatico' : ''}`}
      style={{
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        color: 'white',
        overflow: 'hidden',
        backgroundColor: !vantaEnabled ? '#0f1115' : 'transparent',
        background: !vantaEnabled ? 'linear-gradient(135deg, #0f1115 0%, #1a1f26 50%, #0f1115 100%)' : 'transparent'
      }}
    >
      <div className="vanta-toggle" style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 1000
      }}>
        <button
          onClick={() => setVantaEnabled((prev) => !prev)}
          style={{
            background: 'rgba(0, 255, 247, 0.8)',
            border: 'none',
            color: 'black',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          {vantaEnabled ? 'Disable Background' : 'Enable Background'}
        </button>
      </div>

      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 10
      }}>
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            padding: '40px 0',
            marginBottom: '40px'
          }}
        >
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '10px',
            color: 'white'
          }}>Cristian Moreno</h1>
          <p className="tagline" style={{
            fontSize: '1.2rem',
            color: '#00fff7',
            marginBottom: '30px'
          }}>Full Stack Web Developer</p>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '30px'
            }}
          >
            <a href="#projects" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.1rem',
              transition: 'color 0.3s'
            }}>Projects</a>
            <a href="#about" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.1rem',
              transition: 'color 0.3s'
            }}>About Me</a>
            <a href="#contact" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.1rem',
              transition: 'color 0.3s'
            }}>Contact</a>
          </motion.nav>
        </motion.header>

        <motion.section
          id="hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '20px',
            color: 'white'
          }}>Hello! Welcome to my portfolio</h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#cccccc'
          }}>Passionate about web development, crafting efficient and modern solutions.</p>
        </motion.section>

        <motion.section
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '60px' }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '40px',
            color: 'white'
          }}>Projects</h2>
          <div className="cards" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {projects.map((project, index) => (
              <motion.div
                className="card"
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-image"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ padding: '20px' }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    marginBottom: '15px',
                    color: 'white'
                  }}>{project.title}</h3>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={expandedCards[project.id] ? 'expanded' : 'collapsed'}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p style={{
                        color: '#cccccc',
                        lineHeight: '1.6',
                        marginBottom: '15px',
                        whiteSpace: 'pre-line'
                      }}>
                        {expandedCards[project.id] ? project.fullDescription : project.shortDescription}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  <div style={{ marginBottom: '15px' }}>
                    <button
                      onClick={() => toggleCard(project.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#00fff7',
                        cursor: 'pointer',
                        fontSize: '14px',
                        textDecoration: 'underline',
                        marginBottom: '15px'
                      }}
                    >
                      {expandedCards[project.id] ? 'Show Less' : 'Show More'}
                    </button>
                  </div>

                  <div className="card-buttons" style={{
                    display: 'flex',
                    gap: '10px'
                  }}>
                    <a
                      href={project.demoLink}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        backgroundColor: '#00fff7',
                        color: 'black',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        flex: 1,
                        textAlign: 'center'
                      }}
                    >
                      View Demo
                    </a>
                    <a
                      href={project.codeLink}
                      className="btn outline"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        border: '2px solid #00fff7',
                        color: '#00fff7',
                        backgroundColor: 'transparent',
                        padding: '8px 18px',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        flex: 1,
                        textAlign: 'center'
                      }}
                    >
                      View Code
                    </a>
                  </div>
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
          style={{ marginBottom: '60px' }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '20px',
            color: 'white'
          }}>About Me</h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#cccccc',
            lineHeight: '1.6'
          }}>
            I'm a multilingual Full Stack Web Developer and IT Support Specialist with hands-on
            experience delivering responsive, dynamic web applications. My background in photography,
            digital media, and customer service makes me highly adaptable in fast-paced environments.
          </p>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '60px' }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '20px',
            color: 'white'
          }}>Contact</h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#cccccc',
            marginBottom: '10px'
          }}>
            Email: <a href="mailto:benavidesmoreno1@gmail.com" style={{
              color: '#00fff7',
              textDecoration: 'none'
            }}>benavidesmoreno1@gmail.com</a>
          </p>
          <p style={{
            fontSize: '1.1rem',
            color: '#cccccc',
            marginBottom: '10px'
          }}>
            GitHub: <a href="https://github.com/PhotoEditor-coder" target="_blank" rel="noreferrer" style={{
              color: '#00fff7',
              textDecoration: 'none'
            }}>PhotoEditor-coder</a>
          </p>
          <p style={{
            fontSize: '1.1rem',
            color: '#cccccc'
          }}>
            LinkedIn: <a href="https://www.linkedin.com/in/cbenavides-dev/" target="_blank" rel="noreferrer" style={{
              color: '#00fff7',
              textDecoration: 'none'
            }}>/in/cbenavides-dev</a>
          </p>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{
            textAlign: 'center',
            color: '#888',
            padding: '20px 0'
          }}
        >
          © 2025 Cristian Moreno – Web Portfolio
        </motion.footer>
      </div>
    </div>
  );
}

export default App;
