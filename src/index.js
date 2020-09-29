import React from 'react';
import ReactDOM from 'react-dom';
import Box from '@material-ui/core/Box';

import Head from './Head.js';
import TimelinePupo from './Timeline.js';

ReactDOM.render(
    <Box>
        <Head />
        <TimelinePupo />
    </Box>
    , document.getElementById('root'));
