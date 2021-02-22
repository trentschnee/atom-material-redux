import * as React from 'react';
import { Divider as MuiDivider, DividerProps } from '@material-ui/core';

interface IDividerProps extends DividerProps{}

const Divider: React.FunctionComponent<IDividerProps> = (props) => {
  return (<MuiDivider {...props}/>)
};

export default Divider;
