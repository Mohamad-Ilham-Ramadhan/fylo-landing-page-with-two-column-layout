import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../images/logo-white.svg";
import iconPhone from "../images/icon-phone.svg";
import iconEmail from "../images/icon-email.svg";

import SvgIcon from "@material-ui/core/SvgIcon";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "../icons/Facebook";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    padding: `${theme.spacing(8)}px ${theme.spacing(4)}px`,
  },
  contact: {
    margin: `${theme.spacing(5)}px 0 ${theme.spacing(6)}px`,
  },
  contactText: {
    color: "white",
    fontSize: "0.965rem",
    marginBottom: "12px",
  },
  contactIcon: {
    verticalAlign: "middle",
    marginRight: 18,
  },
  nav: {
    marginBottom: theme.spacing(6),
    "& a": {
      color: "white",
      display: "block",
      marginBottom: theme.spacing(2),
      fontSize: ".96rem",
    },
  },
  icons: {
    textAlign: "center",
  },
  icon: {
    display: "inline-block",
    color: "white",
    width: 16,
    height: 16,
    border: "1px solid white",
    borderRadius: "100%",
    padding: 4,
    boxSizing: "content-box",
    marginRight: 12,
    "&:last-child": {
      marginRight: 0,
    },
  },
}));

export default function Footer() {
  const styles = useStyles();
  return (
    <section className={styles.root}>
      <img src={logo} alt="" />

      <div className={styles.contact}>
        <Typography className={styles.contactText}>
          <span className={styles.contactIcon}>
            <img src={iconPhone} alt="" />
          </span>
          Phone: +1-543-123-4567
        </Typography>
        <Typography className={styles.contactText}>
          <span className={styles.contactIcon}>
            <img src={iconEmail} alt="" />
          </span>
          example@fylo.com
        </Typography>
      </div>

      <nav className={styles.nav}>
        <Link href="#">About Us</Link>
        <Link href="#">Jobs</Link>
        <Link href="#">Press</Link>
        <Link href="#">Blog</Link>
      </nav>

      <nav className={styles.nav}>
        <Link href="#">Contact Us</Link>
        <Link href="#">Terms</Link>
        <Link href="#">Privacy</Link>
      </nav>
      <div className={styles.icons}>
        <Link className={styles.icon} href="#">
          <FacebookIcon style={{ fontSize: 16 }}></FacebookIcon>
        </Link>
        <Link className={styles.icon} href="#">
          <TwitterIcon style={{ fontSize: 16 }}></TwitterIcon>
        </Link>
        <Link className={styles.icon} href="#">
          <InstagramIcon style={{ fontSize: 16 }}></InstagramIcon>
        </Link>
      </div>
    </section>
  );
}
