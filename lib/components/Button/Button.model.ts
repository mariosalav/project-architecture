import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { MouseEventHandler } from 'react';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | 'link';
  $buttonType: ButtonType;
  $class?: string;
  text?: string;
  iconName?: IconProp;
  disabled?: boolean;
  render?: () => React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  WARNING = 'warning',
  ERROR = 'error',
}
