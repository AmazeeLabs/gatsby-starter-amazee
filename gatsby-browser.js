// Make sure the global stylesheet is added to the gatsby build.
import '!style-loader!css-loader!postcss-loader!./src/styles/tailwind.css';

// Export the central `wrapRootElement` function.
export { wrapRootElement } from './src/utils/wrap-root-element';
