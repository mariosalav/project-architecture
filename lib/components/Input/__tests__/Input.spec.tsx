import { render, screen } from '@testing-library/react';
import Input from '../Input';

describe('Input', () => {
  test('should render', () => {
    render(<Input />);

    const input = screen.getByRole('textbox');

    expect(input).toBeDefined();
  });

  test('should render', () => {
    render(<Input />);

    const input = screen.getByRole('textbox');

    expect(input).toBeDefined();
  });

  test('should have floating label', () => {
    render(<Input label="Test label" $floatingLabel />);

    const input = screen.getByRole('textbox');
    input.focus();

    const label = screen.getByText(/Test label/).parentElement;

    expect(label).toHaveStyleRule('position', 'absolute');
  });

  test('should show message', () => {
    const message = 'valid name!';
    render(<Input message={message} />);

    const messageContainer = screen.getByText(message);

    expect(messageContainer).toHaveTextContent(message);
  });

  test('should change color border to error color', () => {
    render(<Input $error />);
    const input = screen.getByRole('textbox');

    expect(input).toHaveStyleRule('border', '2px solid #a9150b');
  });

  test('should change color border to success color', () => {
    render(<Input success />);
    const input = screen.getByRole('textbox');

    expect(input).toHaveStyleRule('border', '2px solid #067d68');
  });
});
