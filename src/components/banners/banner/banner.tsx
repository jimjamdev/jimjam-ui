import { styled } from "../../../theme/stitches.config";

export const Banner = styled('section', {
  width: '100%',
  backgroundColor: '$bodyBackgroundColor',
  position: 'relative',
  '> div': {
    position: 'unset',
  },
  'img': {
    objectFit: 'contain',
    position: 'relative !important',
    width: '100% !important',
    height: 'unset !important',
  }
});
