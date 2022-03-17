import { FC } from 'react';

interface TextProps {
  variant?: 'h1' | 'h2' | 'body1' | 'body2' | '';
  color?: 'light' | 'dark';
}

const Text: FC<TextProps> = ({ variant = 'body1', children, color = 'dark' }) => (
  <p
    className={`
      font-sans
      ${variant === 'h1' && 'text-2xl font-bold'}
      ${variant === 'h2' && 'text-xl font-bold'}
      ${variant === 'body1' && 'text-sm'}
      ${variant === 'body2' && 'text-xs'}
      ${color === 'light' && 'text-gray-200'}
      ${color === 'dark' && 'text-pineTree'}
    `}
  >
    {children}
  </p>
);

export default Text;
