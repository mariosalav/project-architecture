import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { COLORS_THEME } from '@themes/colors';
import { buttonStyles } from './Button.styles';
import { ButtonProps } from './Button.model';

import '@common/icons';

const StyledButton = styled.button<ButtonProps>`
  ${buttonStyles}
`;

StyledButton.defaultProps = {
  theme: COLORS_THEME,
};

const Button: React.FC<ButtonProps> = ({ text, iconName, ...props }) => {
  const onlyIconClass = !text && iconName ? 'only-icon' : '';
  const buttonContent = (
    <div className={`button-content ${onlyIconClass}`}>
      {iconName && <FontAwesomeIcon icon={iconName} />}
      {text}
    </div>
  );

  return (
    <ThemeProvider theme={COLORS_THEME}>
      <StyledButton type="button" {...props}>
        {buttonContent}
      </StyledButton>
    </ThemeProvider>
  );
};

export default Button;
