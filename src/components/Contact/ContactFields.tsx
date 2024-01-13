
import { Field, ErrorMessage } from "formik";
import { Checkbox, TextField } from "../../components/helpers/Form/Form";

export const ContactFields = () => (
  <>
    <TextField name="fullName" placeholder="Nombre completo" typeField="text" />
    <TextField name="entity" placeholder="Entidad" typeField="text" />
    <TextField name="email" placeholder="Correo" typeField="email" />
    <TextField name="phone" placeholder="Celular" typeField="tel" />
    <div className="form-text-area">
      <Field as="textarea" name="message" placeholder="Mensaje" />
      <ErrorMessage className="mensaje" name="message" component="p" />
    </div>
    <Checkbox
      name="terms"
      label="Acepto los Términos, Condiciones y Políticas de"
      link="https://urbanik-hub.com/termsandcondition"
    />
    <ErrorMessage className="mensaje" name="terms" component="p" />
  </>
);
