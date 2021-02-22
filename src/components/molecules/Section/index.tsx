import { Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import Divider from '../../atoms/Divider';
import PostCard from '../PostCard';

interface ISectionProps {
    title: string
}

const Section: React.FunctionComponent<ISectionProps> = ({ title,children }) => {
    return (
        <Grid container direction="column" spacing={1}>
            <Grid item>
                <Typography variant="h4" component="h2">{title}</Typography>
                <Divider/>
            </Grid>
            <Grid item>
                {children}
            </Grid>
        </Grid>
    )
};

export default Section;
