/**
 * Asynchronously loads the component for LoginPage
 */

import { lazyLoad } from 'utils/loadable';

export const Guncover = lazyLoad(
  () => import('./Guncover'),
  module => module.Guncover,
);
