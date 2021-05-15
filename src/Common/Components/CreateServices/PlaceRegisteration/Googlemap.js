import React, { useState } from "react";
import {
  GoogleApiWrapper,
  Map,
  withGoogleMap,
  withScriptjs,
  InfoWindow,
  Marker,
  GoogleMap,
} from "google-maps-react";

export const Googlemap = (props) => {
  return (
    <div>
      <Map
        google={props.google}
        zoom={18}
        style={{
          height: "30vh",
          marginTop: "0px",
          width: "50vw",
          marginRight: "40px",
        }}
        initialCenter={{ lat: 31.443342924830738, lng: 74.25364851784244 }}
        onClick={(t, map, coord) => {
          const { latLng } = coord;
          const lat = latLng.lat();
          const lng = latLng.lng();
          console.log(lat, lng);
        }}
      >
        {props.position ? <Marker position={props.position}></Marker> : null}
      </Map>
    </div>
  );
};

function LoadingContainer() {
  return (
    <div>
      <h1>Loading ...</h1>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDGe5vjL8wBmilLzoJ0jNIwe9SAuH2xS_0",
  LoadingContainer: LoadingContainer,
})(Googlemap);
