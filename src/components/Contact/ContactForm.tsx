import { useState } from "react";
import { Formik, Form } from "formik";
import { ContactFields } from "./ContactFields";

import { ContactFormValues } from "./ContactFieldInterfaces";
import { ContactValidation } from "./ContactValidation";
import { SubmitButton } from "../helpers/Form/SubmitButton";


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
        }}
        validationSchema={ContactValidation}
        onSubmit={(_values: ContactFormValues, { setSubmitting, resetForm }) => {
          setConfirmMessage(true);
          resetForm();
          setTimeout(() => {
            setConfirmMessage(false);
            setSubmitting(false);
          }, 5000);
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