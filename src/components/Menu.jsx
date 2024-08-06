import React, { useEffect, useState } from 'react';

const Menu = ({ headerRef, aboutRef, contactRef }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Referencia no válida:', ref);
    }
    if (isOpen) {
      toggleMenu(); // Cierra el menú solo si está abierto
    }
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="burger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="nav-links">
        <ul>
          <li><a href="#inicio" onClick={() => scrollToSection(headerRef)}>Inicio</a></li>
          <li><a href="#about" onClick={() => scrollToSection(contactRef)}>Nosotros</a></li>
          <li><a href="#contact" onClick={() => scrollToSection(aboutRef)}>Contacto</a></li>
        </ul>
      </div>
      <div className={`nav-overlay ${isOpen ? 'active' : ''}`}>
        <div className="close-btn" onClick={toggleMenu}>×</div>
        <ul>
          <li><a href="#inicio" onClick={() => scrollToSection(headerRef)}>Inicio</a></li>
          <li><a href="#about" onClick={() => scrollToSection(contactRef)}>Nosotros</a></li>
          <li><a href="#contact" onClick={() => scrollToSection(aboutRef)}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
