import React from 'react';
import {Triangle} from 'react-loader-spinner';

function Spinner({ message }) {

  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

  return (
    <div style={style} className="container mt-5 pt-5">
    <div className="mt-5 justify-content-center">
    <Triangle className="mt-5" ariaLabel="loading-indicator" />

    <h1 className="code">{message}......</h1>
    </div>
    </div>
  );
}

export default Spinner;