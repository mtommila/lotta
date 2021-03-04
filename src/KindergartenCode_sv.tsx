import React from 'react';
import Code from './Code';
import translate from './translate';

const KindergartenCode_sv = (): JSX.Element => {
  return (
    <div>
      <h2 className="noprint">{translate('code_assignment')}</h2>
      <Code/>
    </div>
  );
};

export default KindergartenCode_sv;
