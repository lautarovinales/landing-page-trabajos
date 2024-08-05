import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Styles from './styles/styles.css';


const App = () => {
  return (
    <div>
      <Menu />
      <main>
        <header>
          <img src="./images/logo.png" alt="" />
          <h1 className='title-header'>El mejor helado al mejor precio :)</h1>
          <button className='button-header'>Pedir ahora</button>
        </header>
        <section>
          <img src="./images/ice-cream.png" alt="" />
          <div className='title-text'>
            <p className='news'>NOVEDADES</p>
            <h1>¡Nuevo ChocoCream!</h1>
            <p>Descubre el placer inigualable del ChocoCream. Este exquisito cono dulce combina el suave y cremoso sabor de la crema americana con un corazón de chocolate fundente.</p>
          </div>
        </section>
        <section className='about'>
          <div className="about-card">
            <h1 className='about-card-title'>¿Dónde encontrarnos?</h1>
            <p className="about-card-text">San Nicolás de los Arroyos, Calle 123 <br />10:00 - 13:00 y 16:30 - 24:00</p>
            <button className='about-card-button'>Muestrame en maps</button>
          </div>
          <div className="about-card">
            <h1 className='about-card-title'>Nuestras redes sociales</h1>
            <div className="socials">
            <button className='about-card-button-s'><i class="fab fa-whatsapp"></i></button>
            <button className='about-card-button-s'><i class="fab fa-facebook"></i></button>
            <button className='about-card-button-s'><i class="fab fa-instagram"></i></button>
            </div>
          </div>
        </section>
        <section >
        <div className='title-text'>
            <p className='news'>NOVEDADES</p>
            <h1>¡Nuevo OreoCream!</h1>
            <p>Descubre el placer inigualable del OreoCream. Este exquisito cono dulce combina el suave y cremoso sabor de la crema de pistachos con las crocantes galletitas Oreo.</p>
          </div>
          <img src="./images/ice-cream-oreo.png" alt="" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
