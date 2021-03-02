import React from 'react';
import Code from './Code';
import translate from './translate';

const ElementaryCode_fi = () => {
  return (
    <div>
      <p>{translate('code_assignment')}</p>
      <Code/>
    </div>
  );
};

export default ElementaryCode_fi;
