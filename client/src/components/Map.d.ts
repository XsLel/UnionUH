import React from "react";
import { GoogleMap, GoogleMapProps } from "@react-google-maps/api";

interface MapProps extends GoogleMapProps {
  /**
   * The width of the map container. Optional.
   */
  width?: React.ReactText;
  /**
   * The height of the map container. Optional. Default value is 400px.
   */
  height?: React.ReactText;
  /**
   * The initial Map zoom level. Optional. Default value is 10.
   * Valid values: Integers between zero, and up to the supported maximum zoom level.
   */
  zoom?: number;
  ref?: React.LegacyRef<GoogleMap>;
}

export default function Map(
  props: MapProps
): React.MemoExoticComponent<React.ForwardRefExoticComponent<React.RefAttributes<GoogleMap>>>;
