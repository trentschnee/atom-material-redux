
import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

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






const Header:React.FC = () => {
    const classes = useStyles();
    return <div className={classes.root}>
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link variant="h6" color="inherit" noWrap className={classes.toolbarTitle} component={RouterLink} to="/">
            Your Blog Company
          </Link>
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
