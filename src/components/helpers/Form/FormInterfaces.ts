export interface HeaderFormProps {
  className: string;
  id: string;
  title: string;
  paragraph: string
}

export interface TextFieldProps {
  name: string;
  placeholder: string;
  typeField: string;
}
  export interface FormTextareaProps {
    label: string;
    name: string;
    required?: boolean;
    placeHolder: string;
  }
  
  export interface SubmitButtonProps {
    isSubmitting: boolean;
    buttonText: string;
  }

export interface CheckboxProps {
  name: string;
  label: string;
  link: string
}

  