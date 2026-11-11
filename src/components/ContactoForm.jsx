import { useState } from 'react';
import emailjs from '@emailjs/browser';

const configuracionEmailJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
const DESTINATARIO = 'NOELIA.MARIANELA.RUIZ@GMAIL.COM';

function ContactoFormulario() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });
  const [estado, setEstado] = useState({ tipo: 'idle', mensaje: '' });
  const emailJSConfigurado = Object.values(configuracionEmailJS).every(Boolean);

  const manejarCambios = (evento) => {
    setFormulario({
      ...formulario,
      [evento.target.name]: evento.target.value,
    });
    setEstado({ tipo: 'idle', mensaje: '' });
  };

  const enviarFormulario = async (evento) => {
    evento.preventDefault();

    if (estado.tipo === 'enviando') return;

    if (!emailJSConfigurado) {
      setEstado({
        tipo: 'error',
        mensaje: 'Falta configurar EmailJS. Completá las variables indicadas en .env.example.',
      });
      return;
    }

    setEstado({ tipo: 'enviando', mensaje: '' });

    try {
      await emailjs.send(
        configuracionEmailJS.serviceId,
        configuracionEmailJS.templateId,
        {
          to_email: DESTINATARIO,
          from_name: formulario.nombre,
          reply_to: formulario.email,
          message: formulario.mensaje,
        },
        configuracionEmailJS.publicKey,
      );

      setFormulario({ nombre: '', email: '', mensaje: '' });
      setEstado({ tipo: 'ok', mensaje: '¡Mensaje enviado con éxito!' });
    } catch (error) {
      console.error('Error al enviar el mensaje con EmailJS:', error);
      setEstado({
        tipo: 'error',
        mensaje: 'No se pudo enviar el mensaje. Revisá la configuración de EmailJS e intentá nuevamente.',
      });
    }
  };

  return (
    <form className="contacto-formulario" onSubmit={enviarFormulario}>
      <div className="contacto-campo">
        <label htmlFor="contacto-nombre">Tu nombre</label>
        <input
          id="contacto-nombre"
          type="text"
          name="nombre"
          value={formulario.nombre}
          onChange={manejarCambios}
          placeholder="Tu nombre completo"
          autoComplete="name"
          required
        />
      </div>

      <div className="contacto-campo">
        <label htmlFor="contacto-email">Tu correo</label>
        <input
          id="contacto-email"
          type="email"
          name="email"
          value={formulario.email}
          onChange={manejarCambios}
          placeholder="nombre@correo.com"
          autoComplete="email"
          required
        />
      </div>

      <div className="contacto-campo">
        <label htmlFor="contacto-mensaje">Mensaje</label>
        <textarea
          id="contacto-mensaje"
          name="mensaje"
          value={formulario.mensaje}
          onChange={manejarCambios}
          placeholder="Escribí tu consulta aquí..."
          rows={5}
          required
        />
      </div>

      <button className="contacto-enviar" type="submit" disabled={estado.tipo === 'enviando'}>
        {estado.tipo === 'enviando' ? 'Enviando...' : 'Enviar mensaje'}
      </button>

      {estado.mensaje && (
        <p className={`contacto-estado ${estado.tipo}`} role="status" aria-live="polite">
          {estado.mensaje}
        </p>
      )}
    </form>
  );
}

export default ContactoFormulario;
