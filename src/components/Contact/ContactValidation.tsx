// ContactValidation.tsx
import * as Yup from 'yup';

export const ContactValidation = Yup.object().shape({
  fullName: Yup.string()
    .required('El nombre completo es requerido')
    .min(2, 'Nombre muy corto')
    .max(50, 'Nombre muy largo')
    .matches(/^[a-zA-Z\s]+$/, 'Solo se permiten letras y espacios en el nombre'),
  entity: Yup.string().required('La entidad es requerida'),
  email: Yup.string().email('Ingresa un correo válido').required('El correo es requerido'),
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Celular debe tener 10 dígitos numéricos')
    .required('El celular es requerido'),
  message: Yup.string().required('El mensaje es requerido').min(10, 'El mensaje es muy corto'),
  terms: Yup.boolean().oneOf([true], 'Debes aceptar los términos y condiciones'),
});
