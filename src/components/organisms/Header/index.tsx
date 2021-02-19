
import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        appBar: {
            borderBottom: `1px solid ${theme.palette.divider}`,
          },
          toolbar: {
            flexWrap: 'wrap',
          },
          toolbarTitle: {
            flexGrow: 1,
          },
          link: {
            margin: theme.spacing(1, 1.5),
          },
    }),
);





interface IHeaderProps {
}

const Header:React.FC = () => {
    const classes = useStyles();
    return <div className={classes.root}>
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Your Blog Company
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Categories
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              About
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Contact
            </Link>
          </nav>

        </Toolbar>
      </AppBar>
    </div>
};

export default Header;
