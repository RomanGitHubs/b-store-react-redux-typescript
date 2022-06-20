// import React, { useState, useEffect } from 'react';

// export function useScreenSize() {
//   const hi = document.documentElement.clientHeight;
//   const wi = document.documentElement.clientWidth;

//   const [heidthPos, setHeigthPos] = useState(hi);
//   const [widthPos, setWidthPos] = useState(wi);

//   useEffect(() => {
//     setHeigthPos(document.documentElement.clientHeight);
//     setWidthPos(document.documentElement.clientWidth);
//   });

//   return [heidthPos, widthPos];
// }

import { useState, useEffect } from 'react';

export function useScreenSize() {
  const height = document.documentElement.clientHeight;
  const width = document.documentElement.clientWidth;

  return [height, width];
}
