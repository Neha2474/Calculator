import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('displays the calculated result', () => {
  render(<App />);

  fireEvent.click(screen.getByDisplayValue('7'));
  fireEvent.click(screen.getByDisplayValue('+'));
  fireEvent.click(screen.getByDisplayValue('3'));
  fireEvent.click(screen.getByDisplayValue('='));

  expect(screen.getByLabelText('Calculator display')).toHaveValue('10');
});
