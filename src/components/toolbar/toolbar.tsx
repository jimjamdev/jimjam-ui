import { styled } from "../../theme/stitches.config";

export const Toolbar = styled('nav', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '3rem',
    padding: '$2 $3',
    backgroundColor: '$body',
    boxShadow: '$shadow$1',
});
