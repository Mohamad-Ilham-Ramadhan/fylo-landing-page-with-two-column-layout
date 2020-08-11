import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import color from "color";
import { makeStyles, darken } from "@material-ui/core/styles";
import illustration from "../images/illustration-1.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 135,
    [theme.breakpoints.up("md")]: {
      marginBottom: 200,
    },
  },
  gridIllus: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      order: 2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  gridContent: {
    [theme.breakpoints.up("md")]: {
      order: 1,
      paddingRight: theme.spacing(5),
    },
  },
  illustration: {
    width: "93%",
    marginBottom: 32,
  },
  h1: {
    fontWeight: 700,
    marginBottom: 25,
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  ctaContainer: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
  },

  p: {
    marginBottom: "2rem",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  form: {
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  submit: {
    [theme.breakpoints.up("lg")]: {
      flexGrow: 2,
      width: "auto",
      marginLeft: theme.spacing(2),
    },
  },
  email: {
    [theme.breakpoints.up("lg")]: {
      "& .MuiOutlinedInput-root ": {
        marginBottom: 0,
      },
      flexGrow: 3,
      width: "auto",
    },
  },
}));

export default function Hero() {
  const styles = useStyles();
  return (
    <section className={styles.root}>
      <Container>
        <Grid container>
          <Grid className={styles.gridIllus} item md={6}>
            <img className={styles.illustration} src={illustration} alt="" />
          </Grid>

          <Grid className={styles.gridContent} item md={6}>
            <Typography className={styles.h1} variant="h1" align="center">
              All your files in one secure location, accessible anywhere.
            </Typography>
            <Container className={styles.ctaContainer}>
              <Typography className={styles.p} align="center">
                Fylo stores your most important files in one secure location.
                Access them wherever you need, share and collaborate with
                friends, family, and co-workers.
              </Typography>
              <form className={styles.form}>
                <TextField
                  className={styles.email}
                  variant="outlined"
                  fullWidth={true}
                  placeholder="Enter your email..."
                  type="email"
                  // notched="true"
                />
                <Button
                  className={styles.submit}
                  variant="contained"
                  color="primary"
                  fullWidth={true}
                  type="submit"
                >
                  Get Started
                </Button>
              </form>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
