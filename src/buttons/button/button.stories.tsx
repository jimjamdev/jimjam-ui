import type { Story } from '@ladle/react';
import { Button} from './button';

export const button: Story<any> = ({ disabled, children, variant, size }) => (
  <Button color={variant} size={size} disabled={disabled}>{children}</Button>
);

button.args = {
  children: 'Button Text',
  disabled: false,
  color: 'primary',
  size: '1',
  shape: 'square',
};
button.argTypes = {
  variant: {
    options: ['primary', 'secondary', 'red', 'green', 'blue', 'yellow', "['orange', 'lightgreen', 'skyblue', 'tomato']"],
    control: { type: 'select' },
    defaultValue: 'primary',
  },
  size: {
    options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    control: { type: 'select' },
    defaultValue: 'md',
  },
  shape: {
    options: ['pill', 'square'],
    control: { type: 'radio' },
    defaultValue: 'square',
  }
};

button.storyName = 'Button';
