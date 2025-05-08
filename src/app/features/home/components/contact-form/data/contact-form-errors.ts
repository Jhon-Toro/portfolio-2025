import { ErrorMessages } from "../interfaces/error-messages/ErrorMessages.interfaces";

export const ERROR_MESSAGES: ErrorMessages = {
  name: {
    required: 'El nombre es obligatorio',
    invalidName: 'El nombre solo puede contener letras, espacios o guiones',
  },
  email: {
    required: 'El correo es obligatorio',
    email: 'Debe ingresar un correo electrónico válido',
  },
  message: {
    required: 'El mensaje es obligatorio',
    minlength: 'El mensaje debe tener al menos 10 caracteres',
    maxlength: 'El mensaje no puede exceder 500 caracteres',
    invalidMessage: 'El mensaje contiene caracteres no permitidos',
  },
  subject: {
    required: 'El Asunto es obligatorio',
    invalidAffair: 'El Asunto solo puede contener letras, espacios o guiones',
  }
};
