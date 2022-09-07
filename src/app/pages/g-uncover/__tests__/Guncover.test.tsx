import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { Guncover } from '../Loadable';

const renderer = createRenderer();

describe('<Guncover />', () => {
  it('should render', () => {
    renderer.render(<Guncover />);
  });
});
