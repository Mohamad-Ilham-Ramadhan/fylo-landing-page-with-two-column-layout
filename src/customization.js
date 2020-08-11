import { createMuiTheme, darken } from "@material-ui/core/styles";
import {
  raleway400,
  raleway700,
  openSans400,
  openSans700,
  openSans800,
} from "./fonts";

// ### Primary

const veryDarkBlue = "hsl(243, 87%, 12%)";
const desaturatedBlue = "hsl(238, 22%, 44%)";

// ### Accent

const brightBlue = "hsl(224, 93%, 58%)";
const moderateCyan = "hsl(170, 45%, 43%)";

// ### Neutral

const lightGrayishBlue = "hsl(240, 40%, 98%)";
const lightGray = "hsl(0, 0%, 75%)";

const theme = createMuiTheme({});

export const customizedTheme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans",
    h1: {
      fontSize: "1.6rem",
      fontFamily: "Raleway",
      lineHeight: 1.5,
      [theme.breakpoints.up("md")]: {
        fontSize: "1.75rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "2.575rem",
      },
    },
    h2: {
      fontSize: "1rem",
      fontFamily: "Raleway",
      lineHeight: 1.5,
      [theme.breakpoints.up("md")]: {
        fontSize: "1.5rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "2.5rem",
      },
    },
    h3: {
      fontSize: "0.985rem",
      fontFamily: "Raleway",
      lineHeight: 1.5,
      [theme.breakpoints.up("md")]: {
        fontSize: "1.5rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "2rem",
      },
    },
    body1: {
      fontSize: "0.85rem",
      lineHeight: 1.7,
      [theme.breakpoints.up("md")]: {
        fontSize: "0.9rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.135rem",
      },
    },
    body2: {
      fontSize: "0.85rem",
      lineHeight: 1.7,
      [theme.breakpoints.up("md")]: {
        fontSize: "0.9rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: ".985rem",
      },
    },
  },
  palette: {
    primary: {
      main: desaturatedBlue,
      dark: veryDarkBlue,
    },
    accent: {
      brightBlue: brightBlue,
      moderateCyan: moderateCyan,
    },
    neutral: {
      lightGrayishBlue: lightGrayishBlue,
      lightGray: lightGray,
    },
    text: {
      primary: veryDarkBlue,
      secondary: desaturatedBlue,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          raleway400,
          raleway700,
          openSans400,
          openSans700,
          openSans800,
        ],
        body: {
          backgroundColor: "#fff",
        },
      },
    },
    MuiContainer: {
      root: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
          paddingLeft: theme.spacing(5),
          paddingRight: theme.spacing(5),
        },
        [theme.breakpoints.up("lg")]: {
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3),
        },
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
        fontWeight: "bold",
        fontFamily: "Raleway",
        fontSize: "0.86rem",
        padding: "8px 16px",
      },
      containedPrimary: {
        backgroundColor: brightBlue,
        "&:hover": {
          backgroundColor: darken(brightBlue, 0.2),
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        fontFamily: "Raleway",
        marginBottom: "1rem",
      },
      input: {
        padding: "12.5px 23px",
        fontSize: "0.775rem",
      },
      notchedOutline: {
        border: `1px solid ${veryDarkBlue}`,
        borderColor: veryDarkBlue,
        borderRadius: 2,
      },
    },
  },
});
