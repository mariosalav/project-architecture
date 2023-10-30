import { ChangeEventHandler } from 'react';

export interface InputProps {
  id?: string;
  $class?: string;
  $floatingLabel?: boolean;
  type?: string;
  label?: string;
  $error?: boolean;
  success?: boolean;
  message?: string;
  disabled?: boolean;
  placeholder?: string;
  render?: () => React.ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
