import { TestButton } from '@/components/TestButton';
import { render } from '@testing-library/react';
test('描画されてすぐはOFFと表示されている', () => {
  const view = render(<TestButton />);
  expect(view.container).toMatchSnapshot();
});
