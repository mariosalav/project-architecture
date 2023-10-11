import React from 'react';
import styled from 'styled-components';
import {
  inputStyles,
  inputWrapperStyles,
  labelStyles,
  messageStyles,
  textStyles,
} from './Input.styles';
import { InputProps } from './Input.model';

const StyledInput = styled.input<InputProps>`
  ${inputStyles}
`;

const StyledInputWrapper = styled.div<InputProps>`
  ${inputWrapperStyles}
`;

const StyledLabel = styled.label<InputProps>`
  ${labelStyles}
`;

const StyledText = styled.p<InputProps>`
  ${textStyles}
`;

const StyledMessage = styled.div<InputProps>`
  ${messageStyles}
`;

const Input: React.FC<InputProps> = ({
  id,
  type = 'text',
  label,
  $error,
  success,
  message,
  disabled,
  placeholder = '',
  onChange,
  $floatingLabel = false,
  ...props
}) => {
  return (
    <StyledInputWrapper $floatingLabel={$floatingLabel}>
      <StyledInput
        id={id}
        type={type}
        onChange={onChange}
        disabled={disabled}
        $error={$error}
        success={success}
        $floatingLabel={$floatingLabel}
        placeholder={placeholder}
        {...props}
      ></StyledInput>
      <StyledLabel
        htmlFor={id}
        className="control-label"
        $floatingLabel={$floatingLabel}
        disabled={disabled}
      >
        <StyledText disabled={disabled} $error={$error}>
          {label}
        </StyledText>
      </StyledLabel>
      {message && (
        <StyledMessage>
          <StyledText $error={$error}>{message}</StyledText>
        </StyledMessage>
      )}
    </StyledInputWrapper>
  );
};

export default Input;
