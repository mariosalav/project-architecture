import type React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ButtonStyles } from './Button.styles';
import { type ButtonProps } from './Button.model';
import { COLORS_THEME } from '../../../src/themes/colors';

const StyledButton = styled.button<ButtonProps>`
  ${ButtonStyles}
`;

StyledButton.defaultProps = {
  theme: COLORS_THEME,
};

const Button: React.FC<ButtonProps> = ({ text, disabled, onClick, $buttonType, $class }) => {
  return (
    <ThemeProvider theme={COLORS_THEME}>
      <StyledButton
        type="button"
        className={$class}
        $buttonType={$buttonType}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </StyledButton>
    </ThemeProvider>
  );
};

export default Button;
