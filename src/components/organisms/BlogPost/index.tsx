import { Grid, Paper, Typography } from '@material-ui/core';
import * as React from 'react';

interface IBlogPostProps {
    title: string,
    body: string
}

const BlogPost: React.FunctionComponent<IBlogPostProps> = ({ title, body }) => {
    return (<Paper style={{ padding: 32 }}>
        <Grid container direction="column">
            <Grid item>
                <Typography component="h1" variant="h4">{title}</Typography>
            </Grid>
            <Grid item>
                {body}
            </Grid>
        </Grid>
    </Paper>)
};

export default BlogPost;
