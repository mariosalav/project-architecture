import { css } from 'styled-components';
import { InputProps } from './Input.model';

export const inputWrapperStyles = css<InputProps>(({ $floatingLabel }) => {
  return `
    ${
      $floatingLabel
        ? 'position: relative;'
        : `
      display: flex;
      flex-direction: column;
    `
    }
    margin-bottom: 20px;
  `;
});

export const inputStyles = css<InputProps>(({ disabled, $error, success, $floatingLabel }) => {
  return `
    color: #353637;
    width: 100%;
    height: calc(3.5rem + 2px);
    background: #fff;
    border: 2px solid ${
      disabled ? '#e4e3ea' : $error ? '#a9150b' : success ? '#067d68' : '#353637'
    };
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    font-family: inherit;

    &::placeholder {
      font-size: 1rem;
    }

    ${
      $floatingLabel
        ? `
      &:focus{
        border: solid 2px #1b116e;
        outline:none;
        ~ .control-label{
          top:0;
          font-size: 0.75rem;
        }
      }

      &::placeholder {
        opacity: 0;
        transition: inherit;
      }

      &::placeholder-shown {
        top: 0;
        font-size: 0.75rem;
      }

      &:focus::placeholder {
        opacity: 1;
      }

      &:not(:placeholder-shown) + label,
      &:focus + label {
        top: 0;
        font-size: 0.75rem;
      }
    
    `
        : ''
    }

`;
});

export const labelStyles = css<InputProps>(({ disabled, $floatingLabel }) => {
  return `
    font-size: 16px;
    color: ${disabled ? '#e4e3ea' : '#080808'};
    ${$floatingLabel ? 'position: absolute;' : ''}
    order: -1;
    left: 1rem;
    top: 1.5rem;
    padding-bottom: 6px;
    background:#fff;
    transition:0.2s ease all; 
`;
});

export const textStyles = css<InputProps>(({ disabled, $error }) => {
  return `
    color: ${disabled ? '#e4e3ea' : $error ? '#a9150b' : '#080808'};
    margin: 0px;
`;
});

export const messageStyles = css<InputProps>(() => {
  return `
    font-size: 14px;
    color: #a9150b8;
    padding-top: 4px;
`;
});
