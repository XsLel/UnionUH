import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Map = React.forwardRef(
  ({ width, height = "400px", zoom = 10, children, ...props }, ref) => {
    const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;
    return (
      <LoadScript googleMapsApiKey={REACT_APP_GOOGLE_MAPS_API_KEY} version="weekly">
        <GoogleMap
          mapContainerStyle={{ width, height }}
          options={{ streetViewControl: false }}
          ref={ref}
          zoom={zoom}
          {...props}>
          {children}
        </GoogleMap>
      </LoadScript>
    );
  }
);

export default React.memo(Map);
