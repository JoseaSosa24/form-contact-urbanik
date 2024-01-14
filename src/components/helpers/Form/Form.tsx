import { ErrorMessage, Field } from "formik";
import {
  CheckboxProps,
  FormTextareaProps,
  TextFieldProps,
} from "./FormInterfaces";
import "./Form.scss";

export const FormTextarea = ({
  label,
  name,
  placeHolder,
}: FormTextareaProps) => (
  <div className="form-group">
    <label htmlFor={name} className="form-label">
      {label}
    </label>
    <Field
      component="textarea"
      className="form-textarea"
      id={name}
      name={name}
      placeholder={placeHolder}
    />
  </div>
);

export const TextField = ({ name, placeholder, typeField }: TextFieldProps) => (
  <div className="form-group">
    <Field type={typeField} name={name} placeholder={placeholder} />
    <ErrorMessage className="mensaje" name={name} component="p" />
  </div>
);

export const Checkbox = ({ name, label, link }: CheckboxProps) => (
  <div className="form-group">
    <div className="form-checkbox">
      <Field type="checkbox" name={name} id={name} className='checkbox'/>
      <label htmlFor={name} className={name}>
        {label}{" "}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            Urbanik-Hub
          </a>
        )}
      </label>
    </div>
  </div>
);
