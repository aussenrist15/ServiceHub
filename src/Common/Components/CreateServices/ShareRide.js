import React, { useState } from "react";
import PARALLEX from "../../Static/Parallex.png";
import Parallax from "../../../THEME/components/Parallax/Parallax.js";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      minWidth: 500,
      maxWidth: 600,
      margin: 50,
      textAlign: "center",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    parall: {
      height: 250,
    },
    btn: {
      height: 50,
      marginBottom: 20,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 160,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    marginTopBottom: {
      marginTop: 20,
      marginBottom: 20,
      width: 500,
    },
    input: {
      display: "none",
    },
}));

export const ShareRide = () =>  {
    const classes = useStyles();
    return (
        <div>
            <Parallax small filter image={PARALLEX} className={classes.parall} />
            <Grid container spacing={1} justify="center">
                <Grid>
                    <h1>Share A Ride</h1>
                    <FormControl className={classes.formControl}>
                        <TextField 
                            id="outlined-basic"
                            label="Starting Location" 
                            variant="outlined" 
                        /><br/><br/>

                        <TextField 
                            id="outlined-basic"
                            label="Destination" 
                            variant="outlined" 
                        /><br/>

                        <TextField
                            id="standard-number"
                            label="Fare"
                            type="number"
                            className={classes.marginTopBottom}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            component="span"
                            className={classes.marginTopBottom}
                        >
                            Save
                        </Button>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}