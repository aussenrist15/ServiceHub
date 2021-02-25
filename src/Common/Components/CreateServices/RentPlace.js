import React, { useState } from "react";
import PARALLEX from "../../Static/Parallex.png";
import Parallax from "../../../THEME/components/Parallax/Parallax.js";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { PlaceDescription } from "./PlaceRegisteration/PlaceDescription";
import { PlaceLocation } from "./PlaceRegisteration/PlaceLocation";
import { PlaceKind } from "./PlaceRegisteration/PlaceKind";
import { PlaceAccomodation } from "./PlaceRegisteration/PlaceAccomodation";
import { PlacePhotos } from "./PlaceRegisteration/PlacePhotos";
const useStyles = makeStyles((theme) => ({
  parall: {
    height: 250,
  },
}));
export const RentPlace = () => {
  const [step, setStep] = useState(1);

  const classes = useStyles();
  return (
    <div>
      <Parallax small filter image={PARALLEX} className={classes.parall} />

      <Grid container spacing={0} justify="center">
        <Grid>
          {step === 1 && <PlaceLocation step={step} setStep={setStep} />}
          {step === 2 && <PlaceDescription step={step} setStep={setStep} />}
          {step === 3 && <PlaceKind step={step} setStep={setStep} />}
          {step === 4 && <PlaceAccomodation step={step} setStep={setStep} />}
          {step === 5 && <PlacePhotos step={step} setStep={setStep} />}
        </Grid>
      </Grid>
    </div>
  );
};
