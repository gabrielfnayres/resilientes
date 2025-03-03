declare module 'react-simple-maps' {
  import * as React from 'react';
  
  interface ComposableMapProps {
    projection?: string;
    projectionConfig?: {
      scale?: number;
      center?: [number, number];
    };
    width?: number;
    height?: number;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

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

  interface GeographiesProps {
    geography: string | Record<string, unknown>;
    children: (geographies: GeographyElement[]) => React.ReactNode;
  }

  interface GeographyProps {
    geography: GeographyElement;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
  }

  interface MarkerProps {
    coordinates: [number, number];
    style?: Record<string, unknown>;
  }

  export const ComposableMap: React.FC<ComposableMapProps>;
  export const Geographies: React.FC<GeographiesProps>;
  export const Geography: React.FC<GeographyProps>;
  export const Marker: React.FC<MarkerProps>;
}
