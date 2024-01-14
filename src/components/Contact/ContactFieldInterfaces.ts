export interface ContactFormValues {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  terms: boolean;
  [key: string]: unknown;
}
