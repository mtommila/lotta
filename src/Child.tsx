import React from 'react';
import { Link } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import translate, {translateComponent} from "./translate";
import './Child.css';

interface ChildParams {
  component: string;
  returnUrl: string;
};

const Child = (props: ChildParams) => {
  const ChildLang = translateComponent(props.component);
  return (
    <div>
      <ChildLang/>
      <Link to={ props.returnUrl }>{translate("return_linktext")}</Link>
    </div>
  );
};

export default Child;
