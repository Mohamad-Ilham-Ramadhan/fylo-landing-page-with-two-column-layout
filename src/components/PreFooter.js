import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
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
  h2: {
    fontSize: "1.1rem",
    fontWeight: 800,
    marginBottom: theme.spacing(2),
  },
  form: {
    padding: `${theme.spacing(3)}px ${theme.spacing(4)}px`,
  },
  submit: {
    backgroundColor: theme.palette.accent.brightBlue,
    color: "white",
    fontSize: "0.7rem",
    borderRadius: 2,
    padding: "10px 2px",
  },
  email: {
    color: "white",
    "& .MuiInputBase-input": {
      fontSize: "0.7rem",
      backgroundColor: "white",
      borderRadius: 2,
    },
    "& .MuiOutlinedInput-root": {
      marginBottom: theme.spacing(1),
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
      <Container>
        <Typography className={styles.h2} variant="h2">
          Get early access today
        </Typography>
        <Typography>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </Typography>
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
      </Container>
    </section>
  );
}
