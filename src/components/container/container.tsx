import { styled } from "../../theme/stitches.config";


export const Container = styled('div', {
    marginX: 'auto',
    paddingX: '$3',

    variants: {
        size: {
            1: {
                maxWidth: '300px',
            },
            2: {
                maxWidth: '585px',
            },
            3: {
                maxWidth: '865px',
            },
        },
    },
});
