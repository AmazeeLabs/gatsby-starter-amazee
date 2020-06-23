import * as React from 'react';
import { select } from '@storybook/addon-knobs';
import classNames from 'classnames';
import OneColumn from 'components/layouts/OneColumn';
import { projectName } from 'utils/decorators';
import { Icon } from './index';

export default {
  title: 'Components/Common/Icon',
  component: Icon,
};

// Grab all icon names from the assets folder.
const requireIcon = require.context(
  '!@svgr/webpack!../../../assets/icons',
  true,
  /\.svg$/,
);
const categories: string[] = [];
const icons: { [key: string]: string[] } = {};
requireIcon.keys().forEach((path) => {
  // Strip './' and '.svg'
  const icon = path.slice(2, -4);
  const [category] = icon.split('/');
  if (!categories.includes(category)) {
    categories.push(category);
    icons[category] = [];
  }
  icons[category].push(icon);
});

export const Default = () => {
  const size = select(
    'size',
    {
      '8 ': 8,
      '12 ': 12,
      '16 ': 16,
      '20 ': 20,
      '24 (default)': 24,
      '28 ': 28,
      '32 ': 32,
      '36 ': 36,
      '40 ': 40,
      '44 ': 44,
      '48 ': 48,
    },
    24,
  );
  const iconContainerStyle = {
    display: 'inline-block',
    width: `${size + 24}px`,
    height: `${size}px`,
  };
  const colors = {
    'None (use the SVG’s default color)': undefined,
    black: 'black',
    'gray-100': 'gray-100',
    white: 'white',
    'amazee-yellow': 'amazee-yellow',
    'amazee-gray': 'amazee-gray',
    'amazee-dark': 'amazee-dark',
    'amazee-blue': 'amazee-blue',
  };
  const color = select('color', colors, undefined);

  // Use a dark background for these colors:
  const darkBg = ['gray-100', 'white', 'amazee-yellow'];

  return (
    <OneColumn>
      <div>
        <h2>Icons</h2>
        <details className="mb-10">
          <summary>When adding a SVG icon to {projectName}…</summary>
          <p>
            When adding a SVG icon to <code>src/assets/icons</code>, note that
            the <code>Icon</code> props, <code>color</code> and{' '}
            <code>size</code>, can be used to alter how the icon looks. Please
            ensure the icon doesn’t break when using those props by testing the
            controls in this story’s “Knobs” pane.
          </p>
          <p>
            When editing the SVG file, try to use{' '}
            <code className="font-bold">currentColor</code> wherever possible to
            allow the Icon’s stroke and fill colors to be changed. The default
            color of the Icon can be set to a specific <code>color</code> by
            adding a <code>style</code> attribute on the <code>svg</code>{' '}
            element.
            <br />
            e.g.{' '}
            <code>
              &lt;svg … style=&quot;color: #39424A&quot;&gt;&lt;path
              stroke=&quot;currentColor&quot; …&gt;
            </code>
          </p>
          <p>
            Sometimes setting a <code>color</code> on the <code>Icon</code>{' '}
            component will cause a part of an icon to fill when it shouldn’t be
            filled. If a specific path should never have a fill color, edit the
            SVG file to add{' '}
            <code className="font-bold">fill=&quot;transparent&quot;</code> to
            that path.
          </p>
        </details>

        <h3 className="font-bold">Embedded SVG:</h3>
        <p style={{ marginLeft: '40px' }}>
          <code>
            &lt;Icon name=&quot;NAME&quot;
            {color ? ` color="${color}" ` : ' '}
            size=&quot;{size}&quot; /&gt;
          </code>
        </p>

        <h3 className="font-bold">Masked image:</h3>
        <p>
          The CSS <code>mask</code> property sets a custom border mask using the
          provided SVG. To add support for old browsers, use{' '}
          <code>background-image</code> as a fallback. While the mask can take
          on the background color, the fallback background image cannot be
          colored. To hardcode a specific color in the icon for use as a
          background, add a <code>style=&quot;color: purple&quot;</code>{' '}
          property on the <code>svg</code> element.
        </p>
        <p style={{ marginLeft: '40px' }}>
          <code>
            background: url(../../../assets/icons/NAME.svg) center center /{' '}
            {size}px {size}px no-repeat;
            <br />
            @supports (mask: url(example.svg) center center / {size}px {size}px
            no-repeat) {'{'}
            <br />
            &nbsp;&nbsp;mask: url(../../../assets/icons/NAME.svg) center center
            / {size}
            px {size}px no-repeat;
            <br />
            &nbsp;&nbsp;background:{' '}
            {color ? `#${color.toUpperCase()}` : 'black'};
            <br />
            {'}'}
          </code>
        </p>

        {categories.map((category, catKey) => (
          <div key={catKey}>
            <h3 className="mt-6 border-t pt-6 uppercase font-bold">
              {category}
            </h3>
            {icons[category].map((iconName, iconKey) => {
              const mask = `url(${require(`../../../assets/icons/${iconName}.svg`)}) left center / ${size}px ${size}px no-repeat`;
              return (
                <div key={iconKey}>
                  <div className="md:flex">
                    <div style={{ width: '40%', paddingRight: '16px' }}>
                      <span
                        className={classNames('p-4 inline-block', {
                          'bg-black text-white':
                            color && darkBg.includes(color),
                        })}
                      >
                        <span style={{ ...iconContainerStyle, height: 'auto' }}>
                          <Icon
                            name={iconName}
                            color={color}
                            size={`${size}`}
                            className="inline"
                          />
                        </span>
                        &lt;Icon name=&quot;<b>{iconName}</b>&quot; /&gt;
                      </span>
                    </div>
                    <div style={{ width: '30%', paddingRight: '16px' }}>
                      <span
                        className={classNames('p-4 inline-block', {
                          'bg-black text-white':
                            color && darkBg.includes(color),
                        })}
                      >
                        <span
                          style={{
                            ...iconContainerStyle,
                            // @ts-ignore
                            '-webkit-mask': mask,
                            mask,
                          }}
                          className={`bg-${color ? color : 'black'}`}
                        />
                        Masked image
                      </span>
                    </div>
                    <div style={{ width: '30%' }}>
                      <span
                        className={classNames('p-4 inline-block', {
                          'bg-black text-white':
                            color && darkBg.includes(color),
                        })}
                      >
                        <span
                          style={{
                            ...iconContainerStyle,
                            background: mask,
                          }}
                          className={`bg-${color ? color : 'black'}`}
                        />
                        Background image
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </OneColumn>
  );
};
