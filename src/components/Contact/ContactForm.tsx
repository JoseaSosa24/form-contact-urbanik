import { useState } from "react";
import { Formik, Form } from "formik";
import { ContactFields } from "./ContactFields";

import { ContactFormValues } from "./ContactFieldInterfaces";
import { ContactValidation } from "./ContactValidation";
import { SubmitButton } from "../helpers/Form/SubmitButton";
import { sendEmail } from "../../utils/EmailService";



export const ContactForm = () => {
    const [confirmMessage, setConfirmMessage] = useState(false);
  
    return (
      <Formik
        initialValues={{
          fullName: "",
          entity: "",
          email: "",
          phone: "",
          message: "",
          terms: false
        }}
        validationSchema={ContactValidation}
        onSubmit={async (values: ContactFormValues, { setSubmitting, resetForm }) => {
          try {
          
            await sendEmail({
             
              from: 'Acme <onboarding@resend.dev>',
              to: [values.email, 'josea_1998@hotmail.com'], 
              subject: 'Correo de prueba de llegada',
              html: `<p>Nombre: ${values.fullName}</p>
                     <p>Email: ${values.email}</p>
                     <p>Teléfono: ${values.phone}</p>
                     <p>Mensaje: ${values.message}</p>`,
            });
        
            // Continúa con tu lógica de éxito
            setConfirmMessage(true);
            resetForm();
            setTimeout(() => {
              setConfirmMessage(false);
              setSubmitting(false);
            }, 5000);
          } catch (error) {
            console.error('Error al enviar el correo', error);
            
          }
        }}
        
      >
        {(formikProps) => (
          <Form className="form">
            <ContactFields />
            <SubmitButton
              isSubmitting={formikProps.isSubmitting}
              buttonText="Enviar"
            />
  
            {confirmMessage && (
              <section className="d-flex justify-content-center mb-1">
                <p className="textExito text-success fw-bold">
                  ¡Datos enviados correctamente!
                </p>
              </section>
            )}
          </Form>
        )}
      </Formik>
    );
  };