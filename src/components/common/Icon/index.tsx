import * as React from 'react';
import classNames from 'classnames';

type IconType = {
  name: string;
  size?: string;
  color?: string;
  className?: string;
};

const requireIcon = require.context(
  '!@svgr/webpack!../../../assets/icons',
  true,
  /\.svg$/,
);

export const Icon: React.FC<IconType> = ({
  name,
  size = '24',
  color,
  className,
}) => {
  const SvgElement = requireIcon(`./${name}.svg`).default;
  return (
    <SvgElement
      width={size}
      height={size}
      className={classNames(className, {
        [`fill-current text-${color}`]: !!color,
      })}
    />
  );
};

export default Icon;
