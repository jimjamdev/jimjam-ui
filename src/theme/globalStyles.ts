import {globalCss} from "./stitches.config";

export const globalStyles = globalCss({
    'body,html': {
        fontFamily: '$primary',
        margin: 0,
        padding: 0,
        color: '$textColor',
        backgroundColor: '$bodyBackgroundColor',
    },
    html: {
        height: '100%',
    },
    body: {
        minHeight: '100%'
    },
    '*, *:before, *:after': {
        boxSizing: 'border-box'
    },
    '#__next': {
        display: 'contents'
    },
});
