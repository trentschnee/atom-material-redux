import * as React from 'react';
import { Button as MaterialButton } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';


type Props = React.ComponentProps<typeof MaterialButton> &
  Partial<React.ComponentProps<typeof RouterLink>>;

/**
 * Thin wrapper on top of material-ui's Button component
 * Makes the Button be able to use react-router-dom's Link component
 */
const Button: React.FunctionComponent<Props>  = ((props) => (
  <MaterialButton  component={RouterLink} {...props} />
));


export default Button
