/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const GameOne = lazyLoad(
  () => import('./GameOne'),
  module => module.GameOne,
);
