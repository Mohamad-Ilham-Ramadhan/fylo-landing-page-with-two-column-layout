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

const useStyles = makeStyles({
  root: {
    marginBottom: 82,
  },
  logo: {
    width: 78,
  },
  nav: {
    marginLeft: "auto",
    "& a": {
      fontSize: "0.765rem",
      paddingRight: "1.35rem",
      fontFamily: "Raleway",
    },
    "& a:last-child": {
      paddingRight: 0,
    },
  },
});

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
