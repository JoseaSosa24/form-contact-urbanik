import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { TextField } from "../../components/helpers/Form/Form";
import { ContactFormValues } from "./ContactField";

const ContactForm = () => {
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
            validationSchema={Yup.object().shape({
                fullName: Yup.string()
                    .required("El nombre completo es requerido")
                    .min(2, "Nombre muy corto")
                    .max(50, "Nombre muy largo")
                    .matches(
                        /^[a-zA-Z\s]+$/,
                        "Solo se permiten letras y espacios en el nombre"
                    ),
                entity: Yup.string().required("La entidad es requerida"),
                email: Yup.string()
                    .email("Ingresa un correo válido")
                    .required("El correo es requerido"),
                phone: Yup.string()
                    .matches(/^\d{10}$/, "Celular debe tener 10 dígitos numéricos")
                    .required("El celular es requerido"),
                message: Yup.string()
                    .required("El mensaje es requerido")
                    .min(10, "El mensaje es muy corto"),
            })}

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
                    {confirmMessage && (
                        <div className="confirm-message">
                            El mensaje se ha enviado exitosamente
                        </div>
                    )}
                    <p className="form-parrafo" id="form-parrafo">
                        Estamos comprometidos a crear experiencias educativas y comerciales
                        únicas, utilizando la mejor tecnología 4.0 y software de última
                        generación. Si estás interesado en conocer más sobre nuestros
                        productos o servicios, no dudes en contactarnos.
                    </p>
                    <TextField
                        name="fullName"
                        placeholder="Nombre completo"
                        typeField="text"
                    />
                    <TextField name="entity" placeholder="Entidad" typeField="text" />
                    <TextField name="email" placeholder="Correo" typeField="email" />
                    <TextField name="phone" placeholder="Celular" typeField="tel" />
                    <div className="form-text-area">
                        <Field as="textarea" name="message" placeholder="Mensaje" />
                        <ErrorMessage className="mensaje" name="message" component="p" />
                    </div>
                    <button type="submit" disabled={formikProps.isSubmitting}>
                        Enviar
                    </button>
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

export const Contact = () => {
    return (
        <section className="contacto" id="contacto">
            <div className="form-container">
                <h2 className="form-title">Contacto</h2>
                <ContactForm />
            </div>
        </section>
    );
};
