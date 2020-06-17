// This file creates a single module to get any decorator you need for a story.
// Just use: import { withMyChosenDecorator } from 'utils/decorators';

export {
  withCurrentPathProvider,
  withCurrentPathProviderFallback,
} from './withCurrentPathProvider';
export { withDefaultTitleTemplate } from './withDefaultTitleTemplate';
export { withHelmetFYI } from './withHelmetFYI';
export { withHelmetProvider } from './withHelmetProvider';
export { withOneColumn } from './withOneColumn';
export { withPageWrapper } from './withPageWrapper';
