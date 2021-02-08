import React, { useState, useEffect } from "react";
import PARALLEX from "../Static/Parallex.png";
import Parallax from "../../THEME/components/Parallax/Parallax.js";
import "../CSS/ServiceInfo.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { LoadingAnimation } from "./HelpingComponents/LoadingAnimation";
import { GigInfo } from "./HelpingComponents/GigInfo";
import TextField from '@material-ui/core/TextField';
import { FlashOffOutlined } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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
}));

export const BuyService = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);
  const classes = useStyles();
  const serviceDummyData = {
    price:"Price of Service",
   
  };
  return (
    <div>
    <Parallax small filter image={PARALLEX} className={classes.parall} />
    <div>
      <Grid container spacing={1} justify="center">
        <Grid>
          {isLoading ? <LoadingAnimation /> : 
            <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className="Price"
            color="black"
            gutterBottom
          >
           <h3> {serviceDummyData.price}</h3>
          </Typography>
          </CardContent>
          </Card>}
          <form className={classes.root} noValidate autoComplete="off">
          <div>
                    <TextField id="instructions"
                     multiline
                     label="Any Instructions for order"
                     variant="outlined" />
          </div>
                     <br></br>
          <div>
                    <TextField id="accountNumber"
                     required
                     label="Enter Bank account number"
                     variant="outlined" />
          </div>
            </form>
        </Grid>

        <Grid>
          <Button
         
            variant="contained"
            color="primary"
            disabled={isLoading}
            className={classes.btn}
          >
            Confirm Order
          </Button>
          <br />
          
        </Grid>
      </Grid>
    </div>

  </div>  
  );
};
