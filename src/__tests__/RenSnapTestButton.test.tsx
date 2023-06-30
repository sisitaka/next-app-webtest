import { TestButton } from '@/components/TestButton';
// import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
test('描画されてすぐはOFFと表示されている', () => {
  const component = renderer.create(<TestButton />);
  expect(component).toMatchSnapshot()
});
