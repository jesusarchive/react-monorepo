import React from 'react';
import { FieldError } from 'react-hook-form';
import FormError from './form-error';

export type FormFieldProps = {
  children: React.ReactNode;
  error?: FieldError;
};

export default function FormField({ children, error }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      {children}
      <FormError error={error} />
    </div>
  );
}
