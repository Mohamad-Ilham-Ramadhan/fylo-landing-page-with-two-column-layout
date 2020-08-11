import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    textAlign: "center",
    padding: "55px 0px",
    color: "white",
  },
  // container: {
  //   [theme.breakpoints.up("lg")]: {
  //     paddingLeft: 0,
  //     paddingRight: 0,
  //   },
  // },
  gridText: {
    [theme.breakpoints.up("md")]: {
      paddingRight: theme.spacing(10),
    },
  },
  gridForm: {},
  h2: {
    fontWeight: 800,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  p: {
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  form: {
    padding: `${theme.spacing(3)}px ${theme.spacing(4)}px`,
    [theme.breakpoints.up("sm")]: {
      padding: `${theme.spacing(3)}px 0`,
      width: "70%",
      maxWidth: 434,
      margin: `0 auto`,
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      maxWidth: "100%",
      textAlign: "left",
    },
  },
  submit: {
    backgroundColor: theme.palette.accent.brightBlue,
    color: "white",
    fontSize: "0.7rem",
    borderRadius: 2,
    padding: "10px 2px",
    [theme.breakpoints.up("md")]: {
      fontSize: "0.86rem",
      width: "auto",
      padding: "10px 24px",
    },
  },
  email: {
    color: "white",
    "& .MuiInputBase-input": {
      fontSize: "0.7rem",
      backgroundColor: "white",
      borderRadius: 2,
      [theme.breakpoints.up("md")]: {
        fontSize: "0.86rem",
      },
    },
    "& .MuiOutlinedInput-root": {
      marginBottom: theme.spacing(1),
      [theme.breakpoints.up("md")]: {
        marginBottom: theme.spacing(2),
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
}));

export default function PreFooter() {
  const styles = useStyles();
  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <Grid container>
          <Grid className={styles.gridText} item xs={12} md={7}>
            <Typography className={styles.h2} variant="h3">
              Get early access today
            </Typography>
            <Typography className={styles.p}>
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <form className={styles.form}>
              <TextField
                className={styles.email}
                type="email"
                placeholder="email@example.com"
                fullWidth={true}
                variant="outlined"
              />
              <Button
                className={styles.submit}
                color="primary"
                variant="contained"
                fullWidth={true}
                type="submit"
                type="submit"
              >
                Get Started For Free
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
