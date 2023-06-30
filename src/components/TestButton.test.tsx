import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { TestButton } from './TestButton';

test('ボタンをクリックするとON/OFFの表示が切り替わる', async () => {
  const user = userEvent.setup();
  render(<TestButton />);
  const testButton = screen.getByRole('button');
  expect(testButton).toHaveTextContent('OFF');
  await user.click(testButton);
  expect(testButton).toHaveTextContent('ON');
});
