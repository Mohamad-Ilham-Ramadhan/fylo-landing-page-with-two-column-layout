import React from "react";

import illustration from "../images/illustration-2.svg";
import bgCurve from "../images/bg-curve-mobile.svg";
import iconArrow from "../images/icon-arrow.svg";
import iconQuotes from "../images/icon-quotes.svg";
import avatarImg from "../images/avatar-testimonial.jpg";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.neutral.lightGrayishBlue,
    textAlign: "center",
    paddingBottom: theme.spacing(10),
  },
  bgCurve: {
    transform: "translateY(-48px)",
  },
  illustration: {
    width: "85%",
    marginBottom: 80,
  },
  h2: {
    fontWeight: "bold",
    marginBottom: theme.spacing(3),
  },
  p: {
    color: "hsl(243, 10%, 44%)",
    marginBottom: theme.spacing(2),
  },
  linkGutter: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  link: {
    fontSize: "0.765rem",
    color: theme.palette.accent.moderateCyan,
    paddingBottom: 5,
    borderBottom: "1px solid",
    "&:hover": {
      textDecoration: "none",
    },
    "& span": {
      verticalAlign: "text-top",
    },
  },
  testimonial: {
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2),
    textAlign: "left",
    boxShadow: "0px 0px 14px 0px rgba(0,0,0,.1)",
  },
  iconQuotes: {
    width: 11.4,
  },
  caption: {
    fontSize: "0.625rem",
    letterSpacing: 0.25,
    marginBottom: theme.spacing(1),
  },
  tmProfile: {
    display: "flex",
    alignItems: "center",
  },
  tmProfileName: {
    fontWeight: 700,
    fontSize: "0.625rem",
  },
  tmProfileImg: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
  tmProfileOccupation: {
    fontSize: "0.5rem",
  },
}));

export default function Main() {
  const styles = useStyles();
  return (
    <section className={styles.root}>
      <img className={styles.bgCurve} src={bgCurve} alt="" />
      <img
        className={styles.illustration}
        src={illustration}
        alt="illustration-2"
      />
      <Container>
        <Typography className={styles.h2} variant="h3" component="h2">
          Stay productive, wherever you are
        </Typography>
        <Typography className={styles.p} variant="body1" align="left">
          Never let location be an issue when accessing your files. Fylo has
          covered for all of your file storage needs.
        </Typography>

        <Typography className={styles.p} variant="body1" align="left">
          Securely share files and folders with friends, family and collagues
          for live collaboration. No email attachments required!
        </Typography>

        <Typography className={styles.linkGutter}>
          <Link className={styles.link} href="#">
            See how Fylo works{" "}
            <span>
              <img src={iconArrow} alt="" />
            </span>
          </Link>
        </Typography>
        <Container>
          <Paper className={styles.testimonial} elevation={0}>
            <div>
              <img className={styles.iconQuotes} src={iconQuotes} alt="" />
            </div>
            <Typography
              className={styles.caption}
              component="p"
              variant="caption"
            >
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </Typography>
            <div className={styles.tmProfile}>
              <Avatar
                className={styles.tmProfileImg}
                alt="Kyle Burton"
                src={avatarImg}
              />
              <div>
                <Typography className={styles.tmProfileName}>
                  Kyle Burton
                </Typography>
                <Typography className={styles.tmProfileOccupation}>
                  Founder & CEO, Huddle
                </Typography>
              </div>
            </div>
          </Paper>
        </Container>
      </Container>
    </section>
  );
}
