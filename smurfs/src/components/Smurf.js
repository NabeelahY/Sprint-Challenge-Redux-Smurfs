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
      <StyledSpan>
        <span>{props.smurf.name}</span>
        <FontAwesomeIcon
          onClick={() => deleteSmurf(props.smurf.id)}
          icon={faTrash}
          color="#B10F2E"
        />
      </StyledSpan>
      <div>
        <div>Age: {props.smurf.age} years</div>
        <div>Height: {props.smurf.height}</div>
      </div>
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
  flex-direction: column;
  color: #333;
  text-align: left;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  div {
    margin: 0.5rem 0;
  }
`;

const StyledSpan = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
`;
