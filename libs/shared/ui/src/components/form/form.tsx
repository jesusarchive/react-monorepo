import React from 'react';

export type FormProps = React.ButtonHTMLAttributes<HTMLFormElement>;

export default function Form(props: FormProps) {
  return <form {...props} />;
}
