//import { ContactForm } from "../../Contact/ContactForm";
import { HeaderFormProps } from "./FormInterfaces"; 

export const HeaderForm = ({className,id,title,paragraph,}: HeaderFormProps) => {
 return(
 <section className={className} id={id}>
    <h2 className="form-title">{title}</h2>
    <p className="form-parrafo" id="form-parrafo">
      {paragraph}
    </p>
  </section>
  ) 
    
  

}; 