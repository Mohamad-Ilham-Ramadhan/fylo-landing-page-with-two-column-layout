import React from "react";

import illustration from "../images/illustration-2.svg";
import bgCurveMobile from "../images/bg-curve-mobile.svg";
import bgCurveDesktop from "../images/bg-curve-desktop.svg";
import iconArrow from "../images/icon-arrow.svg";
import iconQuotes from "../images/icon-quotes.svg";
import avatarImg from "../images/avatar-testimonial.jpg";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
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
  gridIllus: {
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
    },
  },
  bgCurveMobile: {
    width: "100%",
    transform: "translateY(-48px)",
    "@media (min-width: 540px)": {
      transform: "translateY(-60px)",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  bgCurveDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      width: "100%",
      transform: "translateY(-47px)",
    },
    [theme.breakpoints.up("md")]: {
      transform: "translateY(-70px)",
    },
    "@media (min-width: 1440px)": {
      transform: "translateY(-112px)",
    },
  },
  illustration: {
    width: "85%",
    marginBottom: 80,
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
    },
  },
  h2: {
    fontWeight: "bold",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      width: "150%",
    },
  },
  p: {
    color: "hsl(243, 10%, 44%)",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      color: "inherit",
    },
  },
  linkGutter: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(1),
    },
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
    [theme.breakpoints.up("lg")]: {
      fontSize: "0.985rem",
    },
  },
  testimonial: {
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2),
    textAlign: "left",
    boxShadow: "0px 0px 14px 0px rgba(0,0,0,.1)",
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(3),
      paddingRight: theme.spacing(4),
      paddingBottom: theme.spacing(3),
      paddingLeft: theme.spacing(4),
    },
  },
  tmContainer: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: 0,
      paddingRight: theme.spacing(10),
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: 216,
    },
  },
  iconQuotes: {
    width: 11.4,
    [theme.breakpoints.up("lg")]: {
      width: 14.4,
      marginBottom: 5,
    },
  },
  caption: {
    fontSize: "0.625rem",
    letterSpacing: 0.25,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      fontSize: "0.725rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "0.825rem",
      marginBottom: theme.spacing(2),
      lineHeight: 1.7,
    },
  },
  tmProfile: {
    display: "flex",
    alignItems: "center",
  },
  tmProfileName: {
    fontWeight: 700,
    fontSize: "0.625rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "0.725rem",
    },
  },
  tmProfileImg: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: theme.spacing(1),
  },
  tmProfileOccupation: {
    fontSize: "0.5rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "0.6rem",
    },
  },
}));

export default function Main() {
  const styles = useStyles();
  return (
    <section className={styles.root}>
      <img className={styles.bgCurveMobile} src={bgCurveMobile} alt="" />
      <img className={styles.bgCurveDesktop} src={bgCurveDesktop} alt="" />
      <Container>
        <Grid container>
          <Grid className={styles.gridIllus} item md={6}>
            <img
              className={styles.illustration}
              src={illustration}
              alt="illustration-2"
            />
          </Grid>
          <Grid className={styles.gridContent} item md={6}>
            <Typography className={styles.h2} variant="h2" component="h2">
              Stay productive, wherever you are
            </Typography>
            <Typography className={styles.p} variant="body2" align="left">
              Never let location be an issue when accessing your files. Fylo has
              covered for all of your file storage needs.
            </Typography>

            <Typography className={styles.p} variant="body2" align="left">
              Securely share files and folders with friends, family and
              collagues for live collaboration. No email attachments required!
            </Typography>

            <Typography className={styles.linkGutter}>
              <Link className={styles.link} href="#">
                See how Fylo works{" "}
                <span>
                  <img src={iconArrow} alt="" />
                </span>
              </Link>
            </Typography>
            <Container className={styles.tmContainer}>
              <Paper className={styles.testimonial} elevation={0}>
                <div>
                  <img className={styles.iconQuotes} src={iconQuotes} alt="" />
                </div>
                <Typography
                  className={styles.caption}
                  component="p"
                  variant="caption"
                >
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
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
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
