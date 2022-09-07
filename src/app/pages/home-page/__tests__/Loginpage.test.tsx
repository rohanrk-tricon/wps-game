import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { LoginPage } from '../Loadable';

const renderer = createRenderer();

describe('<LoginPage />', () => {
  it('should render', () => {
    renderer.render(<LoginPage />);
  });
});
