import { SubmitButtonProps } from './FormInterfaces'


export const SubmitButton = ({ isSubmitting, buttonText }: SubmitButtonProps) => (
    <button type="submit" disabled={isSubmitting}>
      {buttonText}
    </button>
  );