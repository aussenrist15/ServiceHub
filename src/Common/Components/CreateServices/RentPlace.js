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
import { Description } from "@material-ui/icons";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  parall: {
    height: 250,
  },
}));
export const RentPlace = () => {
  const [step, setStep] = useState(1);

  const [Country, setCountry] = useState("");
  const [Street, setStreet] = useState("");
  const [Cities, setCities] = useState("");
  const [Position, setPosition] = useState({
    lat: 31.443342924830738,
    lng: 74.25364851784244,
  });
  const history = useHistory();

  const handleCountry = (value) => {
    setCountry(value);
  };

  const handleStreet = (value) => {
    setStreet(value);
  };

  const handleCities = (value) => {
    setCities(value);
  };

  const [description, setDescription] = useState("");

  const handleDescChange = (value) => {
    setDescription(value);
  };

  const [PropertyType, setProperyType] = useState("");
  const [Rooms, setRooms] = useState("");
  const [PlaceType, setPLaceType] = useState("");

  const handlePropertyTypeChange = (value) => {
    setProperyType(value);
  };

  const handleRoomsChange = (value) => {
    setRooms(value);
  };

  const handlePlaceTypeChange = (value) => {
    setPLaceType(value);
  };

  const [basicAmentities, setBasicAmentities] = useState([
    {
      label: "Essentials",
      selected: false,
    },
    {
      label: "Wifi",
      selected: false,
    },
    {
      label: "TV",
      selected: false,
    },
    {
      label: "Heater/Fireplace",
      selected: false,
    },
    {
      label: "Air Conditioning",
      selected: false,
    },
    {
      label: "Shampoo",
      selected: false,
    },
    {
      label: "Iron",
      selected: false,
    },
    {
      label: "Hair Dryer",
      selected: false,
    },
    {
      label: "Breakfast/Coffee/Tea",
      selected: false,
    },
    {
      label: "Cooking Basics",
      selected: false,
    },
  ]);

  const [safetyAmentities, setSafetyAmentities] = useState([
    {
      label: "Smoke Detector",
      selected: false,
    },
    {
      label: "First Aid Kit",
      selected: false,
    },
    {
      label: "Fire Extinguisher",
      selected: false,
    },
    {
      label: "Lock on Bedroom Door",
      selected: false,
    },
  ]);

  const [spaces, setSpaces] = useState([
    {
      label: "Laundary-Dryer",
      selected: false,
    },
    {
      label: "Kitchen",
      selected: false,
    },
    {
      label: "Pool",
      selected: false,
    },
    {
      label: "Laundary-Washer",
      selected: false,
    },
    {
      label: "Parking",
      selected: false,
    },
    {
      label: "Gym",
      selected: false,
    },
  ]);

  const [guests, setGuests] = useState();
  const [beds, setBeds] = useState();
  const [bathrooms, setBathrooms] = useState();

  const handleCheckedBasic = (label) => {
    setBasicAmentities((prev) => {
      return prev.map((amentity) => {
        if (amentity.label === label) {
          amentity.selected = !amentity.selected;
        }
        return amentity;
      });
    });
  };

  const handleCheckedSafety = (label) => {
    setSafetyAmentities((prev) => {
      return prev.map((amentity) => {
        if (amentity.label === label) {
          amentity.selected = !amentity.selected;
        }
        return amentity;
      });
    });
  };

  const handleSpaces = (label) => {
    setSpaces((prev) => {
      return prev.map((space) => {
        if (space.label === label) {
          space.selected = !space.selected;
        }
        return space;
      });
    });
  };

  const handleGuests = (n) => {
    setGuests(n);
  };

  const handleBeds = (n) => {
    setBeds(n);
  };

  const handleBathrooms = (n) => {
    setBathrooms(n);
  };

  const submitPlaceDetails = () => {
    //console.log(Country, Street, Cities, description, PropertyType, Rooms, PlaceType, basicAmentities, safetyAmentities, spaces, guests, beds, bathrooms)
    let basic = [],
      safety = [];
    basicAmentities.map((amentity) => {
      if (amentity.selected) {
        basic.push(amentity.label);
      }
    });
    safetyAmentities.map((amentity) => {
      if (amentity.selected) {
        safety.push(amentity.label);
      }
    });
    axios
      .post(
        "http://localhost:5000/api/v1/place/add-place",
        {
          country: Country,
          city: Cities,
          address: Street,
          desc: description,
          propertyType: PropertyType,
          totalRooms: Rooms,
          guestPlaceType: PlaceType,
          totalGuests: guests,
          totalBeds: beds,
          totalBathrooms: bathrooms,
          basicAmenities: basic,
          safetyAmenities: safety,
          rent: 1000,
          Position,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        history.push("/user/user-services");
      });
  };

  const classes = useStyles();
  return (
    <div>
      <Parallax small filter image={PARALLEX} className={classes.parall} />

      <Grid container spacing={0} justify="center">
        <Grid>
          {step === 1 && (
            <PlaceLocation
              step={step}
              setStep={setStep}
              Country={Country}
              handleCountry={handleCountry}
              handleStreet={handleStreet}
              handleCities={handleCities}
              Position={Position}
              setPosition={setPosition}
            />
          )}
          {step === 2 && (
            <PlaceDescription
              step={step}
              setStep={setStep}
              handleDescChange={handleDescChange}
            />
          )}
          {step === 3 && (
            <PlaceKind
              step={step}
              setStep={setStep}
              PropertyType={PropertyType}
              Rooms={Rooms}
              PlaceType={PlaceType}
              handlePropertyTypeChange={handlePropertyTypeChange}
              handleRoomsChange={handleRoomsChange}
              handlePlaceTypeChange={handlePlaceTypeChange}
            />
          )}
          {step === 4 && (
            <PlaceAccomodation
              step={step}
              setStep={setStep}
              basicAmentities={basicAmentities}
              safetyAmentities={safetyAmentities}
              spaces={spaces}
              handleCheckedBasic={handleCheckedBasic}
              handleCheckedSafety={handleCheckedSafety}
              handleSpaces={handleSpaces}
              handleGuests={handleGuests}
              handleBeds={handleBeds}
              handleBathrooms={handleBathrooms}
            />
          )}
          {step === 5 && (
            <PlacePhotos
              step={step}
              setStep={setStep}
              submitPlaceDetails={submitPlaceDetails}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};
