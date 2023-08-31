/** @format */

import * as React from "react";
import { Svg, Path, G, Circle } from "react-native-svg";

export default ({ width, height }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...{ width, height }}>
      <Path fill="#fee187" d="M20.077 391.731h471.844v76.536H20.077z" />
      <Path
        d="M491.924 483.81H20.076c-8.588 0-15.553-6.963-15.553-15.553v-76.534c0-8.59 6.965-15.553 15.553-15.553h471.849c8.588 0 15.553 6.963 15.553 15.553v76.534c-.001 8.59-6.965 15.553-15.554 15.553zM35.629 452.705h440.743v-45.428H35.629v45.428z"
        fill="#ffc61b"
      />
      <Path fill="#fee187" d="M20.077 43.735h471.844v76.536H20.077z" />
      <Path
        d="M491.924 135.83H20.076c-8.588 0-15.553-6.963-15.553-15.553V43.743c0-8.59 6.965-15.553 15.553-15.553h471.849c8.588 0 15.553 6.963 15.553 15.553v76.534c-.001 8.59-6.965 15.553-15.554 15.553zM35.629 104.724h440.743V59.295H35.629v45.429z"
        fill="#ffc61b"
      />
      <Circle cx={66.626} cy={256.001} r={51.073} fill="#fee187" />
      <G fill="#ffc61b">
        <Path d="M66.626 322.626C29.888 322.626 0 292.738 0 256.001s29.888-66.626 66.626-66.626 66.627 29.888 66.627 66.626c0 36.737-29.89 66.625-66.627 66.625zm0-102.147c-19.586 0-35.52 15.934-35.52 35.521s15.934 35.52 35.52 35.52c19.587 0 35.521-15.934 35.521-35.52 0-19.585-15.934-35.521-35.521-35.521zM256.001 322.626c-36.738 0-66.626-29.888-66.626-66.626s29.888-66.626 66.626-66.626c36.737 0 66.626 29.888 66.626 66.626 0 8.59-6.965 15.553-15.553 15.553S291.521 264.59 291.521 256c0-19.586-15.934-35.52-35.52-35.52-19.586 0-35.52 15.934-35.52 35.52 0 19.586 15.934 35.52 35.52 35.52 8.588 0 15.553 6.963 15.553 15.553s-6.965 15.553-15.553 15.553z" />
      </G>
      <Circle cx={445.373} cy={256.001} r={51.073} fill="#fee187" />
      <Path
        d="M445.374 322.626c-36.738 0-66.627-29.888-66.627-66.626s29.89-66.626 66.627-66.626S512 219.263 512 256.001c0 36.737-29.888 66.625-66.626 66.625zm0-102.147c-19.587 0-35.521 15.934-35.521 35.52s15.934 35.52 35.521 35.52c19.586 0 35.52-15.934 35.52-35.52s-15.934-35.52-35.52-35.52z"
        fill="#ffc61b"
      />
    </Svg>
  );
};
