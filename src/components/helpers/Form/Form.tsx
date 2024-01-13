import { ErrorMessage, Field } from 'formik';
import {FormTextareaProps, TextFieldProps } from './FormInterfaces';

export const FormTextarea = ({ label, name, placeHolder }: FormTextareaProps) => (
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
