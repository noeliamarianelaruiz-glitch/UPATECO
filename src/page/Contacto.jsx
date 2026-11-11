import ContactoForm from '../components/ContactoForm';
import './Contacto.css';

const UBICACION_UPATECO = 'Universidad Provincial de Administración, Tecnología y Oficios, Salta, Argentina';

function Contacto() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(UBICACION_UPATECO)}&output=embed`;

  return (
    <main className="pagina-contacto">
      <header className="contacto-encabezado">
        <p className="contacto-etiqueta">ESTAMOS PARA AYUDARTE</p>
        <h1>Contactanos</h1>
        <p>Escribinos y te responderemos lo antes posible.</p>
      </header>

      <div className="contacto-contenido">
        <section className="contacto-panel" aria-labelledby="contacto-formulario-titulo">
          <h2 id="contacto-formulario-titulo">Envianos un mensaje</h2>
          <ContactoForm />
        </section>

        <section className="contacto-panel contacto-mapa-panel" aria-labelledby="contacto-mapa-titulo">
          <h2 id="contacto-mapa-titulo">Encontranos en UPATECO</h2>
          <iframe
            className="contacto-mapa"
            src={mapSrc}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de la Universidad UPATECO"
          />
        </section>
      </div>
    </main>
  );
}

export default Contacto;
