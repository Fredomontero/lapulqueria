import { makeStyles } from '@material-ui/core/styles';

import welcomeBackground from '../../assets/images/pulqueTwoJars.jpg';
import pulquehistory1 from '../../assets/images/pulque_history_1.jpg';


export default makeStyles((theme) => ({
    welcomeContainer: {
        backgroundImage: `url(${welcomeBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        height: '60em',
        width: '100%',

        [theme.breakpoints.down("sm")]:{
            height: '61em',
            backgroundAttachment: 'scroll'
        },

        [theme.breakpoints.down("xs")]:{
            height: '48.5em',
            backgroundAttachment: 'scroll'
        },

    },
    greetings: {
        backgroundColor: '#dadade',
        padding: "8em",
        minHeight: "40em",

        [theme.breakpoints.down("sm")]:{
            padding: "2.5em",
            minHeight: "30em",
        }
    },
    greetingsTitle: {
        fontSize: "4.5em",

        [theme.breakpoints.down("sm")]:{
            fontSize: "2.25em",
        }
    },
    greetingsBody: {
        fontSize: "2em",
        textAlign: 'justify',
        marginTop: "2em",

        [theme.breakpoints.down("sm")]:{
            fontSize: "1.30em",
        }
    },
    pulqueriaLogo: {
        width: '40em',
        [theme.breakpoints.down("sm")]:{
            width: '30em',
        },
        [theme.breakpoints.down("xs")]:{
            width: '18em',
        }
    }
}));