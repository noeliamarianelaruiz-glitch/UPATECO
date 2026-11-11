React  En grupo 

## Formulario de contacto

El envío del formulario de la portada se realiza con EmailJS. Copiá `.env.example` a `.env` y completá las credenciales de tu servicio:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

En la plantilla de EmailJS configurá **To Email** como `{{to_email}}` y usá `from_name`, `reply_to` y `message` para mostrar el nombre, correo de respuesta y mensaje. El formulario envía los mensajes a `NOELIA.MARIANELA.RUIZ@GMAIL.COM`.