import { Container, CssBaseline, Grid, makeStyles } from '@material-ui/core';
import * as React from 'react';
import { JsxElement, TypeElement } from 'typescript';
import { PostsStateI } from '../../../store/reducers/posts';
import { Posts } from '../../../types/Posts';
import PostsList from '../../organisms/PostsList';
import MainLayout from '../MainLayout';
interface IHomePageTemplateProps {
  posts: PostsStateI,
}
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  }

}));
const HomePageTemplate: React.FunctionComponent<IHomePageTemplateProps> = ({ posts, children }) => {
  const classes = useStyles();
  return <MainLayout>
    <Container classes={{root:classes.root}}>
      {/* This is where we can structure the template for our homepage */}
      <Grid container direction="column">
        <Grid item>
          {/* <Hero  */}
        </Grid>
        <Grid item>
          <PostsList title="Blog Posts" posts={posts} />

        </Grid>
      </Grid>
    </Container>

  </MainLayout>
};

export default HomePageTemplate;
