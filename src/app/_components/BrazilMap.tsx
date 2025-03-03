"use client";

import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

interface GeographyElement {
  rsmKey: string;
  geometry: {
    coordinates: number[][][];
    type: string;
  };
  properties: {
    name: string;
  };
}

const geoUrl: string =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const MapChart: React.FC = () => {
  return (
    <div className="w-full h-[600px] bg-gray-100 rounded-lg p-6">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 400,
          center: [-55, -15]
        }}
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <Geographies geography={geoUrl}>
          {(geographies) =>
            geographies
              .filter((geo) => geo.properties.name === "Brazil")
              .map((geo: GeographyElement) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#2D3748"
                  stroke="#CBD5E0"
                  strokeWidth={0.5}
                  style={{
                    default: {
                      fill: "#2D3748",
                      outline: "none",
                      stroke: "#CBD5E0"
                    },
                    hover: {
                      fill: "#4A5568",
                      outline: "none",
                      stroke: "#CBD5E0"
                    },
                    pressed: {
                      fill: "#4A5568",
                      outline: "none",
                      stroke: "#CBD5E0"
                    }
                  }}
                />
              ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
