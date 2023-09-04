import { type DefaultTheme, css } from 'styled-components';
import { type ButtonType, type ButtonProps } from './Button.model';

export const ButtonStyles = css<ButtonProps>(({ theme, $buttonType }) => {
  return `
  display: inline-block;
  cursor: pointer;
  background-color: ${setColor(theme, $buttonType)};
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: ${setColor(theme, 'white')};
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  padding: 10px 16px;
  position: relative;
  text-align: center;
`;
});

function setColor(theme: DefaultTheme, buttonColor: ButtonType | string): string {
  return theme[buttonColor];
}
