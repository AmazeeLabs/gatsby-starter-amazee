// Make sure the global stylesheet is added to the gatsby build.
import '!style-loader!css-loader!postcss-loader!./src/assets/styles/tailwind.css';

export { wrapRootElement } from './src/components/global/WrapRootElement';
