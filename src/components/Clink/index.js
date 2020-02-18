import React from "react";
import { Link } from "react-router-dom";

const Clink = props => {
  const { link, label, type } = props;
  const cls = `btn btn-${type}`;
  return (
    <Link to={link} className={cls}>
      {label}
    </Link>
  );
};

export default Clink;
