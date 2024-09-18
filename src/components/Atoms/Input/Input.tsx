'use client';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from './Input.module.scss';
export type InputProps = {
  type?: 'text' | 'email' | 'password' | 'number'; // Añadimos diferentes tipos de input
  placeholder?: string; // Placeholder personalizado
  label: string; // Etiqueta personalizada (requerida)
  value?: string; // Valor del input
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Función para manejar cambios
  isInvalid?: boolean; // Para estilos condicionales de invalidación
  feedback?: string; // Mensaje de retroalimentación para invalidación
  [key: string]: any; // Permite cualquier otra propiedad
};

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  label,
  value,
  onChange,
  isInvalid = false,
  feedback,
  className,
  ...props
}) => {
  return (
    <FloatingLabel
      controlId="floatingInput"
      label={label}
      className={`mb-3 ${styles.floatingLabel}`} // Aplica clases de estilo si es necesario
    >
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        isInvalid={isInvalid}
        {...props}
        className={className}
      />
      {isInvalid && feedback && (
        <Form.Control.Feedback type="invalid">{feedback}</Form.Control.Feedback>
      )}
    </FloatingLabel>
  );
};

export default Input;
