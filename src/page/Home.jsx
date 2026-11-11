import Contacto from './Contacto';
import './Home.css';

function Home() {
  return (
    <>
      <main className="inicio-upateco">
        <section className="inicio-upateco-presentacion" aria-labelledby="inicio-upateco-titulo">
          <p className="inicio-upateco-etiqueta">SALTA · EDUCACIÓN PÚBLICA</p>
          <h1 id="inicio-upateco-titulo">UPATECO</h1>
          <p className="inicio-upateco-bajada">
            Universidad Provincial de Administración, Tecnología y Oficios.
          </p>
          <p className="inicio-upateco-descripcion">
            Una institución pública de Salta que ofrece propuestas de formación
            vinculadas con la tecnología, la administración y los oficios,
            acercando oportunidades de aprendizaje a la comunidad.
          </p>
        </section>
      </main>
      <Contacto />
    </>
  );
}

export default Home;
