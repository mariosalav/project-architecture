import { render, screen } from '@testing-library/react';
import { ButtonType } from '../Button.model';
import Button from '../Button';

describe('Button', () => {
  test('primary button', () => {
    render(<Button $buttonType={ButtonType.PRIMARY} />);

    const button = screen.getByRole('button');

    expect(button).toHaveStyleRule('background-color', '#195DE6');
  });
});
