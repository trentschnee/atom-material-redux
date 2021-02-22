import { Grid, makeStyles } from '@material-ui/core';
import MainLayout from '../MainLayout';
interface IHomePageTemplateProps {
  header: React.ReactNode,
  footer: React.ReactNode,
  posts: React.ReactNode,
  subscribe:React.ReactNode

}
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  }

}));
const HomePageTemplate: React.FunctionComponent<IHomePageTemplateProps> = ({ header, footer,subscribe, posts, children }) => {
  const classes = useStyles();
  return <MainLayout header={header} footer={footer}>

    <div className={classes.root}>
      {/* This is where we can structure the template for our homepage */}
      <Grid container spacing={1}>
        <Grid item xs={12} md={9}>
          <Grid container direction="column">
            <Grid item>
              {/* <Hero  */}
            </Grid>
            <Grid item>
              {posts}

            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <Grid container direction="column">
            <Grid item>
              {subscribe}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </div>

  </MainLayout>
};

export default HomePageTemplate;
