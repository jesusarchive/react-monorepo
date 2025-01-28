import React from 'react';
import { FieldError } from 'react-hook-form';
import FormError from './form-error';

export default function FormField({
  children,
  error,
}: {
  children: React.ReactNode;
  error?: FieldError;
}) {
  return (
    <div className="flex flex-col gap-2">
      {children}
      <FormError error={error} />
    </div>
  );
}
