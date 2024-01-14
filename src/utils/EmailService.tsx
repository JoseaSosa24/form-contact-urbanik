import emailjs from '@emailjs/browser'; // Importa emailjs
import { ContactFormValues } from "../components/Contact/ContactFieldInterfaces";

  export const sendEmail = async (values: ContactFormValues) => {
    try {
      await emailjs.send(
        'service_nilgym8',
        'template_a9h1avh', 
        values, 
        'ugvzJY-afjBrGZYIp' 
      );
    } catch (error) {
      console.error('Error al enviar el correo', error);
    }
  };


