import type { FieldError } from 'react-hook-form';

type FormErrorProps = {
  error?: FieldError;
};

export default function FormError({ error }: FormErrorProps) {
  if (!error?.message) {
    return null;
  }

  return <p className="text-red-500">{error.message}</p>;
}
