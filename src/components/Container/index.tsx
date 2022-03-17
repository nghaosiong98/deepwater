import { FC } from 'react';

interface ContainerProps {
  align?: 'left' | 'center' | 'right';
  direction?: 'row' | 'col';
}

const Container: FC<ContainerProps> = ({ align = 'center', children, direction = 'col' }) => (
  <div
    className={`
      container mx-auto px-4
      flex ${direction === 'col' ? 'flex-col' : 'flex-row'}
      ${align === 'left' && 'items-start'}
      ${align === 'center' && 'items-center'}
      ${align === 'right' && 'items-end'}
    `}
  >
    {children}
  </div>
);

export default Container;
