import React from 'react';
import Code from './Code';
import translate from './translate';

const KindergartenCode_fi = (): JSX.Element => {
  return (
    <div>
      <h2>{translate('code_assignment')}</h2>
      <Code/>
    </div>
  );
};

export default KindergartenCode_fi;
