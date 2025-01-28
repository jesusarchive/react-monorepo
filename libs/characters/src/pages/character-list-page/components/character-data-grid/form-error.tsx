import type { FieldError } from 'react-hook-form';

export default function FormError(props: { error?: FieldError }) {
  return props.error && <p>{props.error.message as string}</p>;
}
