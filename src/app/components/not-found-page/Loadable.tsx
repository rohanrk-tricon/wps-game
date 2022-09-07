/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

export const NotFoundPage = lazyLoad(
  () => import('./NotFoundPage'),
  module => module.NotFoundPage,
);
