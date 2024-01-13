import { HeaderForm } from "../helpers/Form/HeaderForm";
import { ContactForm } from "./ContactForm";
import './Contact.scss'

export const Contact = () => {
    return (
    <>
    <HeaderForm
        className="contacto"
        id="contacto"
        title="Contacto"
        paragraph="Si estás interesado en conocer más sobre nuestros productos o servicios, no dudes en contactarnos."
      />
      <ContactForm />
    </>
      
    );
  };
  