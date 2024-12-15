import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders a button and triggers click event', () => {
  const onClickMock = jest.fn(); // Mock function
  render(<Button onClick={onClickMock}>Click Me</Button>);

  // Check if the button is rendered
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();

  // Simulate click and verify event handler is called
  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
