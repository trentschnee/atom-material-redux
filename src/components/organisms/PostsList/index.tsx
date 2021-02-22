import { Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import { PostsStateI } from '../../../store/reducers/posts';
import PostCard from '../../molecules/PostCard';

interface IPostListProps {
  onShare:(id:number)=>void,
  posts: PostsStateI
}

const PostsList: React.FunctionComponent<IPostListProps> = ({ onShare,posts }) => {
  const { isFetching, data } = posts;
 
  return isFetching === true ? <Typography>Loading Posts...</Typography> : (data.length > 0 ? (<Grid container  spacing={1}>
        {data.map((post,idx) => {
          const {title,body,id} = post;
          
          return(<Grid item xs={12} md={6}><PostCard title={`Blog post ${idx}`} body={body} id={id} onShare={()=>onShare(id)}/></Grid>);
        })}
      </Grid>):<Typography>No Posts :(</Typography>);

};

export default PostsList;
