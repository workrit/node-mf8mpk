import React from 'react';
import ReactDOM from 'react-dom';
const width = window.innerWidth;
const height = window.innerHeight;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 40;
const mouthWidth = 20;
const mouthRadius = 140;

const App = () =>
  /*#__PURE__*/ React.createElement(
    'svg',
    {
      width: width,
      height: height,
    },
    /*#__PURE__*/ React.createElement(
      'g',
      {
        transform: `translate(${centerX},${centerY})`,
      },
      /*#__PURE__*/ React.createElement('circle', {
        r: centerY - strokeWidth / 2,
        fill: 'blue',
        stroke: 'black',
        'stroke-width': strokeWidth,
      }),
      /*#__PURE__*/ React.createElement('circle', {
        cx: -eyeOffsetX,
        cy: -eyeOffsetY,
        r: eyeRadius,
      }),
      /*#__PURE__*/ React.createElement('circle', {
        cx: eyeOffsetX,
        cy: -eyeOffsetY,
        r: eyeRadius,
      })
    )
  );

const rootElement = document.getElementById('root');
ReactDOM.render(/*#__PURE__*/ React.createElement(App, null), rootElement);
