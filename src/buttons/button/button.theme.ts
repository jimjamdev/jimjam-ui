import {css} from "~theme/stitches.config";

export const buttonTheme = css({
  border: '0 none',
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
        minHeight: '32px',
        minWidth: '200px',
        padding: '$1 $2',
      },
      2: {
        minHeight: '42px',
        minWidth: '250px',
        padding: '$2 $3',
      },
      3: {
        minHeight: '52px',
        minWidth: '300px',
        padding: '$3 $4',
      },
    },
    color: {
      primary: {
        backgroundColor: '$primary',
        '&:hover': {
          backgroundColor: '$primary200',
        },
      },
      secondary: {
        backgroundColor: '$secondary',
        '&:hover': {
          backgroundColor: '$secondary200',
        },
      },
      error: {
        backgroundColor: 'tomato',
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
});
