import { Card,  CardActions, CardContent,  Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { excerpt } from '../../../utils/formatText';
import Button from '../../atoms/Button';

interface IPostCardProps {
    title: string,
    body: string,
    onShare: () => void,
    id: number
}

const PostCard: React.FunctionComponent<IPostCardProps> = ({ title, body, onShare, id }) => {
    return (<Card>


        <CardContent>
            <Grid container direction="column">
                <Grid item>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {excerpt(body, 70)}...
    </Typography>

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
