import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "../CSS/Card.css";
import { useState } from "react";
import axios from "axios";
import { Alert, AlertTitle } from "@material-ui/lab";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        ServiceHUB
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp({ val, revertVal }) {
  const classes = useStyles();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errFname, setErrFname] = useState(false);
  const [errLname, setErrLname] = useState(false);
  const [errUname, setErrUname] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPass, setErrPass] = useState(false);
  const [authError, setAuthError] = useState(false);
  function test() {
    if (fname === "") setErrFname(true);
    if (lname === "") setErrLname(true);
    if (username === "") setErrUname(true);
    if (email === "") setErrEmail(true);
    if (pass === "") setErrPass(true);
    if (!(errFname || errFname || errUname || errEmail || errPass)) {
      axios
        .post(
          "http://localhost:5000/api/v1/user/signup",
          {
            username: username,
            first_name: fname,
            last_name: lname,
            email: email,
            password: pass,
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log("Response: ", res);
          if (res.data.error) {
            setAuthError(true);
            return;
          }
          revertVal(!val);
        });
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <h3 className="cardH1" style={{ color: "black" }}>
          Sign Up
        </h3>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                onChange={(e) => {
                  setFname(e.target.value);
                  setErrFname(false);
                }}
                name="firstName"
                variant="outlined"
                required
                error={errFname}
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                onChange={(e) => {
                  setLname(e.target.value);
                  setErrLname(false);
                }}
                required
                fullWidth
                error={errLname}
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                onChange={(e) => {
                  setUname(e.target.value);
                  setErrUname(false);
                }}
                required
                fullWidth
                error={errUname}
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrEmail(false);
                }}
                required
                fullWidth
                error={errEmail}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                error={errPass}
                onChange={(e) => {
                  setPass(e.target.value);
                  setErrPass(false);
                }}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I have read license and agreed."
              />
            </Grid>
          </Grid>
          {authError ? (
            <Alert severity="error">Please Enter Correct Data</Alert>
          ) : (
            <></>
          )}
          <Button
            onClick={test}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <span id="error-message" style={{ color: "red" }}></span>
          <Grid container justify="flex-end">
            <Grid item>
              <Link
                variant="body2"
                onClick={() => {
                  revertVal(!val);
                }}
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
