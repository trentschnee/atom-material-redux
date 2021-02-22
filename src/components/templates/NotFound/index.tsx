import { Grid, makeStyles, Typography } from '@material-ui/core';

import MainLayout from '../MainLayout';
interface INotFoundTemplateProps {
  header: React.ReactNode,
  footer: React.ReactNode,

}
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  }
}));
const NotFoundTemplate: React.FunctionComponent<INotFoundTemplateProps> = ({ header, footer, children }) => {
  const classes = useStyles();
  return <MainLayout header={header} footer={footer}>

    <div className={classes.root}>
      <Grid container justify="center" alignItems="center" alignContent="center">
        <Grid item>
          <Typography>{children}</Typography>
        </Grid>
      </Grid>

    </div>

  </MainLayout>
};

export default NotFoundTemplate;
