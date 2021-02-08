import React, { useState } from "react";
import PARALLEX from "../../Static/Parallex.png";
import Parallax from "../../../THEME/components/Parallax/Parallax.js";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { PlaceDescription } from "./PlaceRegisteration/PlaceDescription";
import { PlaceAccomodation } from "./PlaceRegisteration/PlaceAccomodation";

const useStyles = makeStyles((theme) => ({
  parall: {
    height: 250,
  },
}));
export const RentPlace = () => {
  const classes = useStyles();
  return (
    <div>
      <Parallax small filter image={PARALLEX} className={classes.parall} />

      <Grid container spacing={0} justify="center">
        <Grid>
          <PlaceAccomodation></PlaceAccomodation>
        </Grid>
      </Grid>
    </div>
  );
};
