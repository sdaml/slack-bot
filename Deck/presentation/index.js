// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Slide,
  Spectacle
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

require('../assets/custom.scss');
require('../assets/markdown.scss');
require('../assets/highlight.css');

import markdown from './markdown';

// Import custom component
// import Interactive from '../assets/interactive';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const theme = createTheme({
    primary: 'white',
    secondary: '#4A4A4A',
    quartenary: '#06D6A0'
}, {
    primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
});

class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck
                    transition={['slide']}
                    transitionDuration={500}
                    bgColor='background'>

                    {Object.keys(markdown).map((key) => {
                        const body = markdown[key];
                        return (
                            <Slide key={key} className={key}>
                                <div className='markdown-body' dangerouslySetInnerHTML={{__html: body}}></div>
                            </Slide>
                        );
                    })}

                </Deck>
            </Spectacle>
        );
    }
}

export default Presentation;
