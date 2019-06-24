import React, { useState } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { deleteSmurfs, editSmurf } from "../actions";
import SmurfForm from "./SmurfForm";

const Smurf = props => {
  console.log(props);
  const [edit, smurfEdit] = useState(false);
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
      <FontAwesomeIcon
        icon={faEdit}
        color="#B10F2E"
        onClick={() => smurfEdit(!edit)}
      />

      <Modal isOpen={edit}>
        <ModalHeader>Edit Smurf</ModalHeader>
        <ModalBody>
          <SmurfForm smurfEdit={smurfEdit} editing={edit} smurf={props.smurf} />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => smurfEdit(!edit)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </StyledSmurf>
  );
};

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  updatingSmurf: state.updatingSmurf
});

export default connect(
  mapStateToProps,
  { deleteSmurfs, editSmurf }
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
