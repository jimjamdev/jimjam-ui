import { styled } from '~theme/stitches.config';

export const Button = styled('button', {
  cursor: 'pointer',
  border: '0 none',
  fontWeight: '$bold',
  textShadow: '0 1px 2px $colors$black',
  '&[disabled]': {
    color: '$gray900',
    backgroundColor: '$gray500',
    borderColor: '$grey600',
    '&:hover': {
      color: '$gray900',
      backgroundColor: '$gray500',
    },
  },
  variants: {
    size: {
      1: {
        height: '32px',
        padding: '$1 $3',
      },
      2: {
        height: '38px',
        padding: '$2 $4',
      },
      3: {
        height: '42px',
        padding: '$3 $5',
      },
    },
    color: {
      primary: {
        color: '$textColor',
        backgroundColor: '$primary',
        '&:hover': {
          backgroundColor: '$primary800',
        },
      },
      secondary: {
        color: '$textColor',
        backgroundColor: '$secondary',
        '&:hover': {
          backgroundColor: '$secondary200',
        },
      },
      error: {
        color: '$textColor',
        backgroundColor: 'red',
        '&:hover': {
          backgroundColor: 'green',
        },
      },
    },
    depth: {
      1: {
        boxShadow: '$shadow$1',
      },
      2: {
        boxShadow: '$shadow$1',
      },
    },
    shape: {
      pill: {
        borderRadius: '500rem',
      },
    },
  },

  compoundVariants: [],
  defaultVariants: {
    size: '1',
    color: 'primary',
    depth: '1',
    shape: 'pill',
  },
});
