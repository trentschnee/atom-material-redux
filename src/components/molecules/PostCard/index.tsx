import {    Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Button  from '../../atoms/Button';
import Excerpt from '../../atoms/ExcerptText';

interface IPostCardProps {
    title: string,
    body: string,
    onShare:()=>void,
    id: number
}

const PostCard: React.FunctionComponent<IPostCardProps> = ({ title, body,onShare, id }) => {
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
            <Button size="small" color="primary" onClick={onShare}>
                Share
      </Button>
            <Button size="small" color="primary" component={Link} to={`/post/${id}`}>
                Read Post
      </Button>
        </CardActions>
    </Card>)
};

export default PostCard;
