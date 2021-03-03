import React from 'react';
import {Link} from 'react-router-dom';
import translate, {translateComponent} from './translate';

interface ChildParams {
  component: string;
  returnUrl: string;
}

const Child = (props: ChildParams): JSX.Element => {
  const ChildLang = translateComponent(props.component);
  return (
    <div className="bodytext">
      <ChildLang/>
      <span className="backlink"><Link to={props.returnUrl}>{translate('return_linktext')}</Link></span>
    </div>
  );
};

export default Child;
