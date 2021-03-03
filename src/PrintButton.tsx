import React from 'react';

const PrintButton = (): JSX.Element => {
  return (
    <div>
      <button className="printer noprint" onClick={window.print}>🖶</button>
    </div>
  );
};

export default PrintButton;
