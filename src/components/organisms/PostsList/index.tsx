import { Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import { PostsStateI } from '../../../store/reducers/posts';
import PostCard from '../../molecules/PostCard';

interface IPostListProps {
  title: string,
  posts: PostsStateI
}

const PostsList: React.FunctionComponent<IPostListProps> = ({ title, posts }) => {
  const { isFetching, data } = posts;
  return (<Grid container direction="column" spacing={1}>
    <Grid item>
      <Typography variant="h4" component="h2">{title}</Typography>
      <hr/>
    </Grid>
    <Grid item>
      {isFetching === true ? <Typography>Loading Posts...</Typography> : (data.length > 0 && (<Grid container  spacing={1}>
        {data.map((post,idx) => {
          const {title,body,id} = post;
          
          return(<Grid item xs={12} md={6}><PostCard title={`Blog post ${idx}`} body={body} id={id}/></Grid>);
        })}
      </Grid>))}

    </Grid>
  </Grid>)

};

export default PostsList;
