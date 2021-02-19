import {  blue } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
let theme = createMuiTheme({
    palette: {
      primary: blue,
        type: 'dark',
      },


});
theme = responsiveFontSizes(theme);

export default theme;