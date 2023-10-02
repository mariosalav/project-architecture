import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { MouseEventHandler } from 'react';

export interface ButtonProps {
  $buttonType: ButtonType;
  $class?: string;
  text?: string;
  iconName?: IconProp;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  WARNING = 'warning',
  ERROR = 'error',
}
