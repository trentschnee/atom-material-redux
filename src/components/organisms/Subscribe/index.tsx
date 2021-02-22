import { Typography } from '@material-ui/core';
import * as React from 'react';
import Section from '../../molecules/Section';

interface ISubscribeProps {
}

const Subscribe: React.FunctionComponent<ISubscribeProps> = (props) => {
    
    const links = ['FB','YT','IG','TW'];
    return (<Section title="Subscribe">
       {links.map((link)=><Typography align="center">{`Subscribe to us on ${link}...`}</Typography>)}
    </Section>);
};

export default Subscribe;
