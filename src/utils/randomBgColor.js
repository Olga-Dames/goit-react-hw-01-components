export const randomBgColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

// export const randomBgColor = () => {
//     const color =
//       'rgba(' +
//       Math.round(Math.random() * 255) +
//       ',' +
//       Math.round(Math.random() * 255) +
//       ',' +
//       Math.round(Math.random() * 255) +
//       ',' +
//       0.5 +
//       ')';
  
//     return color;
//   };