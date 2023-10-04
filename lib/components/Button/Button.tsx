import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { COLORS_THEME } from '@themes/colors';
import { ButtonStyles } from './Button.styles';
import { ButtonProps } from './Button.model';

import '@common/icons';

const StyledButton = styled.button<ButtonProps>`
  ${ButtonStyles}
`;

StyledButton.defaultProps = {
  theme: COLORS_THEME,
};

const Button: React.FC<ButtonProps> = ({
  text,
  disabled,
  onClick,
  $buttonType,
  $class,
  iconName,
}) => {
  const onlyIconClass = text === undefined && iconName !== undefined ? 'only-icon' : '';
  const buttonContent = (
    <div className={`button-content ${onlyIconClass}`}>
      {iconName !== undefined && <FontAwesomeIcon icon={iconName} />}
      {text}
    </div>
  );

  return (
    <ThemeProvider theme={COLORS_THEME}>
      <StyledButton
        type="button"
        className={$class}
        $buttonType={$buttonType}
        disabled={disabled}
        onClick={onClick}
      >
        {buttonContent}
      </StyledButton>
    </ThemeProvider>
  );
};

export default Button;
