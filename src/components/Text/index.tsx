import { FC } from 'react';

interface TextProps {
  variant?: 'h1' | 'h2' | 'body' | 'body2';
  color?: 'light' | 'dark';
}

const Text: FC<TextProps> = ({ variant, children, color }) => (
  <p
    className={`
      font-sans
      ${variant === 'h1' && 'text-2xl font-bold'}
      ${variant === 'h2' && 'text-xl font-bold'}
      ${variant === 'body' && 'text-lg'}
      ${variant === 'body2' && 'text-base'}

      ${color === 'light' && 'text-gray-200'}
    `}
  >
    {children}
  </p>
);

export default Text;
