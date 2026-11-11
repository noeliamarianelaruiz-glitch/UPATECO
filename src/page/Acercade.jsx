import './Home.css';

function Acercade() {
  return (
    <main className="inicio-upateco">
      <section className="inicio-upateco-presentacion" aria-labelledby="universidad-titulo">
        <p className="inicio-upateco-etiqueta">SALTA · EDUCACIÓN PÚBLICA</p>
        <h1 id="universidad-titulo">La universidad</h1>
        <p className="inicio-upateco-bajada">
          UPATECO: Universidad Provincial de Administración, Tecnología y Oficios.
        </p>
        <p className="inicio-upateco-descripcion">
          Una institución pública de Salta que ofrece propuestas de formación
          vinculadas con la tecnología, la administración y los oficios,
          acercando oportunidades de aprendizaje a la comunidad.
        </p>
      </section>
    </main>
  );
}

export default Acercade;
