import { css } from 'styled-components';
import { InputProps } from './Input.model';

export const inputWrapperStyles = css<InputProps>(({ $floatingLabel }) => {
  return `
    ${
      $floatingLabel
        ? 'position: relative;'
        : `
        `
    }
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  `;
});

export const inputStyles = css<InputProps>(({ disabled, $error, success, $floatingLabel }) => {
  return `
    font-size: 16px;
    color: #353637;
    width: 100%;
    height: calc(3.5em + 2px);
    background: #fff;
    border: 2px solid ${
      disabled ? '#e4e3ea' : $error ? '#a9150b' : success ? '#067d68' : '#353637'
    };
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    font-family: inherit;

    &::placeholder {
      font-size: 16px;
    }

    ${
      $floatingLabel
        ? `
      &:focus{
        border: solid 2px #1b116e;
        outline:none;
        ~ .control-label{
          top: -8px;
          font-size: 16px;
        }
      }

      &::placeholder {
        opacity: 0;
        transition: inherit;
      }

      &::placeholder-shown {
        top: -8px;
        font-size: 14px;
      }

      &:focus::placeholder {
        opacity: 1;
      }

      &:not(:placeholder-shown) + .control-label,
      &:focus + .control-label {
        top: -8px;
        font-size: 16px;
      }
    
    `
        : ''
    }

`;
});

export const labelStyles = css<InputProps>(({ disabled, $floatingLabel }) => {
  return `
    color: ${disabled ? '#e4e3ea' : '#080808'};
    ${$floatingLabel ? 'position: absolute;' : ''}
    order: -1;
    left: 14px;
    top: 17px;
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
