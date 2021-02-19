import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import Excerpt from '../../atoms/ExcerptText';

interface IPostCardProps {
    title: string,
    body: string,
    id: number
}

const PostCard: React.FunctionComponent<IPostCardProps> = ({ title, body, id }) => {
    return (<Card>


        <CardContent>
            <Grid container direction="column">
                <Grid item>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                </Grid>
                <Grid item>
                    <Excerpt description={body} length={70}/>
                </Grid>
            </Grid>


        </CardContent>

        <CardActions>
            <Button size="small" color="primary">
                Share
      </Button>
            <Button size="small" color="primary" href={`/blog/post/${id}`}>
                Learn More
      </Button>
        </CardActions>
    </Card>)
};

export default PostCard;
