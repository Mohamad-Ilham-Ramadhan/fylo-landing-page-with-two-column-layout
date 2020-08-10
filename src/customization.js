import { createMuiTheme } from "@material-ui/core/styles";

import Raleway400Eot from "./fonts/raleway-v16-latin-regular.eot";
import Raleway400Woff2 from "./fonts/raleway-v16-latin-regular.woff2";
import Raleway400Woff from "./fonts/raleway-v16-latin-regular.woff";
import Raleway400Ttf from "./fonts/raleway-v16-latin-regular.ttf";
import Raleway400Svg from "./fonts/raleway-v16-latin-regular.svg";

import Raleway700Eot from "./fonts/raleway-v16-latin-700.eot";
import Raleway700Woff2 from "./fonts/raleway-v16-latin-700.woff2";
import Raleway700Woff from "./fonts/raleway-v16-latin-700.woff";
import Raleway700Ttf from "./fonts/raleway-v16-latin-700.ttf";
import Raleway700Svg from "./fonts/raleway-v16-latin-700.svg";

import OpenSans400Eot from "./fonts/open-sans-v17-latin-regular.eot";
import OpenSans400Woff2 from "./fonts/open-sans-v17-latin-regular.woff2";
import OpenSans400Woff from "./fonts/open-sans-v17-latin-regular.woff";
import OpenSans400Ttf from "./fonts/open-sans-v17-latin-regular.ttf";
import OpenSans400Svg from "./fonts/open-sans-v17-latin-regular.svg";

import OpenSans700Eot from "./fonts/open-sans-v17-latin-700.eot";
import OpenSans700Woff2 from "./fonts/open-sans-v17-latin-700.woff2";
import OpenSans700Woff from "./fonts/open-sans-v17-latin-700.woff";
import OpenSans700Ttf from "./fonts/open-sans-v17-latin-700.ttf";
import OpenSans700Svg from "./fonts/open-sans-v17-latin-700.svg";

import OpenSans800Eot from "./fonts/open-sans-v17-latin-800.eot";
import OpenSans800Woff2 from "./fonts/open-sans-v17-latin-800.woff2";
import OpenSans800Woff from "./fonts/open-sans-v17-latin-800.woff";
import OpenSans800Ttf from "./fonts/open-sans-v17-latin-800.ttf";
import OpenSans800Svg from "./fonts/open-sans-v17-latin-800.svg";

const raleway400 = {
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: 400,
  src: `url('${Raleway400Eot}'),
        local('Raleway'), local('Raleway-Regular'),
        url('${Raleway400Eot}?#iefix') format('embedded-opentype'),
        url('${Raleway400Woff2}') format('woff2'),
        url('${Raleway400Woff}') format('woff'),
        url('${Raleway400Ttf}') format('truetype'),
        url('${Raleway400Svg}#Raleway') format('svg'); 
  `,
};

const raleway700 = {
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: 700,
  src: `url('${Raleway700Eot}'),
        local('Raleway'), local('Raleway-Regular'),
        url('${Raleway700Eot}?#iefix') format('embedded-opentype'),
        url('${Raleway700Woff2}') format('woff2'),
        url('${Raleway700Woff}') format('woff'),
        url('${Raleway700Ttf}') format('truetype'),
        url('${Raleway700Svg}#Raleway') format('svg'); 
  `,
};

const openSans = {
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: 400,
  src: `url('${OpenSans400Eot}'),
        local('Open Sans Regular'), local('OpenSans-Regular'),
        url('${OpenSans400Eot}?#iefix') format('embedded-opentype'),
        url('${OpenSans400Woff2}') format('woff2'),
        url('${OpenSans400Woff}') format('woff'),
        url('${OpenSans400Ttf}') format('truetype'),
        url('${OpenSans400Svg}#OpenSans') format('svg'); 
  `,
};
const openSans700 = {
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: 700,
  src: `url('${OpenSans700Eot}'),
        local('Open Sans Bold'), local('OpenSans-Bold'),
        url('${OpenSans700Eot}?#iefix') format('embedded-opentype'),
        url('${OpenSans700Woff2}') format('woff2'),
        url('${OpenSans700Woff}') format('woff'),
        url('${OpenSans700Ttf}') format('truetype'),
        url('${OpenSans700Svg}#OpenSans') format('svg'); 
  `,
};
const openSans800 = {
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: 800,
  src: `url('${OpenSans800Eot}'),
        local('Open Sans ExtraBold'), local('OpenSans-ExtraBold'),
        url('${OpenSans800Eot}?#iefix') format('embedded-opentype'),
        url('${OpenSans800Woff2}') format('woff2'),
        url('${OpenSans800Woff}') format('woff'),
        url('${OpenSans800Ttf}') format('truetype'),
        url('${OpenSans800Svg}#OpenSans') format('svg'); 
  `,
};

// ### Primary

const veryDarkBlue = "hsl(243, 87%, 12%)";
const desaturatedBlue = "hsl(238, 22%, 44%)";

// ### Accent

const brightBlue = "hsl(224, 93%, 58%)";
const moderateCyan = "hsl(170, 45%, 43%)";

// ### Neutral

const lightGrayishBlue = "hsl(240, 40%, 98%)";
const lightGray = "hsl(0, 0%, 75%)";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans",
    h1: {
      fontSize: "1.6rem",
      fontFamily: "Raleway",
      lineHeight: 1.5,
    },
    h2: {
      fontSize: "1rem",
      fontFamily: "Raleway",
      lineHeight: 1.5,
    },
    h3: {
      fontSize: "0.985rem",
      fontFamily: "Raleway",
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "0.85rem",
      lineHeight: 1.7,
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
          openSans,
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
        paddingLeft: 24,
        paddingRight: 24,
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
