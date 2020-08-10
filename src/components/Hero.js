import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import illustration from "../images/illustration-1.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 135,
  },
  illustration: {
    width: "100%",
    marginBottom: 32,
  },
  h1: {
    fontWeight: 700,
    marginBottom: 25,
  },
  ctaContainer: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },

  p: {
    marginBottom: "2rem",
  },
  submit: {
    backgroundColor: theme.palette.accent.brightBlue,
  },
}));

export default function Hero() {
  const styles = useStyles();
  return (
    <section className={styles.root}>
      <Container>
        <img className={styles.illustration} src={illustration} alt="" />
        <Typography className={styles.h1} variant="h1" align="center">
          All your files in one secure location, accessible anywhere
        </Typography>
        <Container className={styles.ctaContainer}>
          <Typography className={styles.p} align="center">
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </Typography>
          <form>
            <TextField
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
      </Container>
    </section>
  );
}
