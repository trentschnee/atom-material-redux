import { Container, CssBaseline, Grid, makeStyles } from '@material-ui/core';

import { PostsStateI } from '../../../store/reducers/posts';
import { Posts } from '../../../types/Posts';
import PostsList from '../../organisms/PostsList';
import Subscribe from '../../organisms/Subscribe';
import MainLayout from '../MainLayout';
interface IBlogPostPageTemplateProps {
  header: React.ReactNode,
  footer: React.ReactNode,
  post: React.ReactNode,
  relatedPosts:React.ReactNode

}
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  }

}));
const BlogPostPageTemplate: React.FunctionComponent<IBlogPostPageTemplateProps> = ({ header, footer, post, relatedPosts,children }) => {
  const classes = useStyles();
  return <MainLayout header={header} footer={footer}>

    <div className={classes.root}>
      {/* <div classes={{ root: classes.root }}> */}
      {/* This is where we can structure the template for our blog post page */}
      <Grid container spacing={1} justify="center">
        <Grid item xs={12} md={6}>
          <Grid container direction="column" spacing={1}>

            <Grid item>
              {post}

            </Grid>
            <Grid item>
              {relatedPosts}
            </Grid>
          </Grid>
        </Grid>

      </Grid>

    </div>

  </MainLayout>
};

export default BlogPostPageTemplate;
