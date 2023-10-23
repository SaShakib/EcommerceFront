import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
      
    },
    


});

theme.props = {
    // MuiButton: {
    //     disableElevation: true,
    //     fullWidth: true
    // },
    // MuiPaper: {
    //     elevation: 0,
    //     square: true
    // }
    MuiCard: {
        
        '&:hover': {
            raised: true
        }
    }
}

theme.overrides = {
    // MuiButton: {
    //     contained: {
    //         backgroundColor: theme.palette.primary.dark,
    //         color: theme.palette.primary.light,
    //         borderRadious: 0,
    //         '&:hover': {
    //             backgroundColor: '#333',
    //             color: '#fff',
    //             borderRadious: 0,
    //         }
    //     }
    // },
    // MuiPaper : {

    // }
}

export default theme