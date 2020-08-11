import React from "react";
import { v4 as uuid } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import logo from "../images/logo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 82,
    [theme.breakpoints.up("sm")]: {
      paddingTop: 32,
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: 58,
    },
  },
  logo: {
    width: 78,
    [theme.breakpoints.up("sm")]: {
      width: 95,
    },
    [theme.breakpoints.up("md")]: {
      width: 115,
    },
    [theme.breakpoints.up("lg")]: {
      width: 160,
    },
  },
  nav: {
    marginLeft: "auto",
    "& a": {
      fontSize: "0.765rem",
      marginRight: "1.35rem",
      fontFamily: "Raleway",
      [theme.breakpoints.up("sm")]: {
        fontSize: "0.795rem",
        marginRight: "1.95rem",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "0.9rem",
        marginRight: "2.5rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1rem",
        marginRight: "3.4rem",
      },
    },
    "& a:last-child": {
      marginRight: 0,
    },
  },
}));

export default function Navbar() {
  const styles = useStyles();
  const preventDefault = (e) => {
    e.preventDefault();
  };

  const links = [
    { id: uuid(), text: "Features" },
    { id: uuid(), text: "Team" },
    { id: uuid(), text: "Sign In" },
  ];

  return (
    <AppBar
      className={styles.root}
      color="transparent"
      elevation={false}
      position="relative"
    >
      <Container>
        <Toolbar disableGutters>
          <Link href="#">
            <img src={logo} alt="" className={styles.logo} />
          </Link>
          <Typography className={styles.nav} color="textPrimary" align="right">
            {links.map((link) => (
              <Link
                key={link.id}
                href="#"
                onClick={preventDefault}
                color="inherit"
              >
                {link.text}
              </Link>
            ))}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
