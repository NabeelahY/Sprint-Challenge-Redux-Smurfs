import React from "react";
import { connect } from "react-redux";
import { deleteSmurfs } from "../actions";

const Smurf = props => {
  const deleteSmurf = id => {
    props.deleteSmurfs(id);
  };
  return (
    <div>
      <h3>{props.smurf.name}</h3>
      <span onClick={() => deleteSmurf(props.smurf.id)}>x</span>
    </div>
  );
};

export default connect(
  null,
  { deleteSmurfs }
)(Smurf);
