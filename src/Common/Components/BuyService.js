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
import { BlockRounded, FlashOffOutlined } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 500,
    maxWidth: 600,
    margin: 50,
    textAlign: "center",
    
  },
  textDesign:{
    fontSize: 25,
    fontStyle:"bold",
    marginTop:12,

  },
  textfields:{
    width: 600,
    marginLeft:20,
    
    
    
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
    justifyContent: 'center'
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
            
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  
                  color="black"
                  gutterBottom
                  
                >
                  <h3 className={classes.textDesign}> {serviceDummyData.price}</h3>

                </Typography>
              </CardContent>
            </Card>
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
              <Box borderRadius="borderRadius" {...defaultProps} >
              <form noValidate className={classes.textfields}  >

              <div>
              <h3 className={classes.textDesign}>
                Bank Account Details
              </h3>
              </div>
              <br></br>
              <div>
                      <TextField id="accountNumber"
                      required
                      label="Account Number"
                      variant="outlined" />
              <Autocomplete
                  
                  id="combo-box-demo"
                  options={bankNames}
                  getOptionLabel={(option) => option.title}
                  style={{ width: 300 ,marginLeft:20}}
                  renderInput={(params) => <TextField {...params} label="Select Bank Name" variant="outlined" />}
              />
            </div>
            <br></br>
            <div>
              <TextField
                  className={classes.textfields}
                  id="accountNumber"
                  required
                  label="Enter Bank account number"
                  variant="filled" />
            </div>
            <br></br>
            <div>
              <TextField 
                  className={classes.textfields}
                  id="instructions"
                  multiline
                  rowsMax={5}
                  label="Any Instructions for order"
                  variant="outlined" />
            </div>
            <br></br>
            <br></br>
            <Box textAlign='center'>
            <Button

              variant="contained"
              color="primary"
              disabled={isLoading}
              className={classes.btn}

            >
              Confirm Order
            </Button>
            </Box>
            <br />
            </form>
            </Box>            
          </form>
          </Grid>

          
            
            
          
        </Grid>
      </div>

  </div>  
  );
};
const bankNames = [
  { title: 'HBL' },
  { title: 'Mezan Bank Limited' },
  { title: 'Alfalah Bank' },
  { title: 'Islamic Bank' },
  { title: 'UBL' },
 
];
const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  marginBottom:12,
  border: 2,
  style: { width: '700px', height: '400px' },
};

