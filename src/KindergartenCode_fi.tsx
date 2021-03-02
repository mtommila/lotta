import React from 'react';
import Code from './Code';
import translate from './translate';

const KindergartenCode_fi = () => {
  return (
    <div>
      <p>{translate('code_assignment')}</p>
      <Code/>
    </div>
  );
};

export default KindergartenCode_fi;
