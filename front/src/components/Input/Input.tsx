import React from "react";

export const TextInput = (
  {
    value,
    onChange,
    placeholder,
  }: {
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
  },
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>
) => (
  <input
    className="input is-medium"
    placeholder={placeholder}
    type="text"
    value={value}
    onChange={onChange}
    {...props}
  />
);
