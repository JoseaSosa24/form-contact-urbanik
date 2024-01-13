import { Resend } from 'resend';

const resend = new Resend('re_cpREbhPB_2wYLFXZhGpj4xRNp3P81F68G');

interface EmailData {
    from: string;
    to: string[]; 
    subject: string;
    html: string;
  }

export const sendEmail = async (emailData: EmailData) => {
  
    const { data, error } = await resend.emails.send(emailData);
  
    if (error) {
      throw new Error(`Error al enviar el correo: ${error}`);
    }
  
    return data;
  };
  