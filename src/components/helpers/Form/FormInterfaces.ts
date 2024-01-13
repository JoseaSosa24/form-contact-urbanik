export interface FormInputProps {
    label: string;
    name: string;
    typeField: string;
    placeHolder: string;
    required?: boolean;
  }
  
  export interface FormTextareaProps {
    label: string;
    name: string;
    required?: boolean;
    placeHolder: string;
  }
  
  export interface TextFieldProps {
    name: string;
    placeholder: string;
    typeField: string;
  }
  