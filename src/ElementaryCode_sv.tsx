import React from 'react';
import Code from './Code';
import translate from './translate';

const ElementaryCode_sv = (): JSX.Element => {
  return (
    <div>
      <h2 className="noprint">{translate('code_assignment')}</h2>
      <Code/>
    </div>
  );
};

export default ElementaryCode_sv;
