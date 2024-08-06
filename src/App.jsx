import React, { useRef } from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './styles/styles.css';

const App = () => {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Menu headerRef={headerRef} aboutRef={aboutRef} contactRef={contactRef} />
      <main>
        <header className='inicio' ref={headerRef}>
          <img src="./images/logo.png" alt="" />
          <h1 className='title-header'>El mejor helado al mejor precio :)</h1>
          <button className='button-header'>Pedir ahora</button>
        </header>
        <section className='history'>
          <img src="./images/falling-icecream.png" alt="" srcset="" />
          <div className="h1-p">
          <h1>
            La historia de la bocha de helado
          </h1>
          <p>
          Había una vez un heladero llamado Laucha, conocido en su pueblo por su amabilidad y buen humor. Laucha siempre había soñado con crear los helados más deliciosos, pero estaba cansado de los sabores industriales que compraba para vender.

Un día, decidió cambiar las cosas y comenzó a hacer helado casero en su pequeña cocina. Utilizó ingredientes frescos y naturales, experimentando con distintas combinaciones hasta encontrar las más deliciosas. Su dedicación y pasión por el helado se reflejaban en cada nueva creación.

Laucha decidió llevar sus helados caseros a la plaza del pueblo. Al principio, los vecinos eran escépticos, pero su curiosidad los llevó a probar los nuevos sabores. En poco tiempo, los helados de Laucha se convirtieron en un éxito. Los niños y adultos formaban largas filas para disfrutar de esos helados que sabían a hogar y cariño.

Gracias a su ingenio y dedicación, Laucha transformó su carrito de helados en un lugar de encuentro y alegría. Su negocio creció, y él continuó creando nuevos sabores, repartiendo felicidad con cada cono. Así, Laucha demostró que con pasión y esfuerzo, los sueños pueden hacerse realidad, llevando sonrisas a todos en su querido pueblo.
          </p>
          </div>
        </section>
        <section>
          <img src="./images/ice-cream.png" alt="" />
          <div className='title-text'>
            <p className='news'>NOVEDADES</p>
            <h1>¡Nuevo ChocoCream!</h1>
            <p>Descubre el placer inigualable del ChocoCream. Este exquisito cono dulce combina el suave y cremoso sabor de la crema americana con un corazón de chocolate fundente.</p>
          </div>
        </section>
        <section className="about" id="about" ref={aboutRef}>
          <div className="about-card">
            <h1 className='about-card-title'>¿Dónde encontrarnos?</h1>
            <p className="about-card-text">San Nicolás de los Arroyos, Calle 123 <br />10:00 - 13:00 y 16:30 - 24:00</p>
            <button className='about-card-button'>Muestrame en maps</button>
          </div>
          <div className="about-card">
            <h1 className='about-card-title'>Nuestras redes sociales</h1>
            <div className="socials">
              <button className='about-card-button-s'><i className="fab fa-whatsapp"></i></button>
              <button className='about-card-button-s'><i className="fab fa-facebook"></i></button>
              <button className='about-card-button-s'><i className="fab fa-instagram"></i></button>
            </div>
          </div>
        </section>
        <section id="contact" ref={contactRef}>
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
