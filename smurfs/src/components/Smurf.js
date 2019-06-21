import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { deleteSmurfs } from "../actions";

const Smurf = props => {
  const deleteSmurf = id => {
    props.deleteSmurfs(id);
  };
  return (
    <StyledSmurf>
      <span>{props.smurf.name}</span>
      <FontAwesomeIcon
        onClick={() => deleteSmurf(props.smurf.id)}
        icon={faTrash}
        color= '#B10F2E'
      />
    </StyledSmurf>
  );
};

export default connect(
  null,
  { deleteSmurfs }
)(Smurf);

const StyledSmurf = styled.div`
  background-color: #b3d4f36e;
  padding: 2rem;
  margin: 1rem 0;
  display: flex;
  color: #333;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  }
`;
