import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addSmurf, editSmurf } from "../actions";

const SmurfForm = props => {
  const [smurfData, setSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  console.log(props);

  useEffect(() => {
    if(props.editing) {
      setSmurf({
        name: props.smurf.name,
        age: props.smurf.age,
        height: props.smurf.height
      });
    }  
  }, [props, props.editing])

  

  const addNewSmurf = e => {
    e.preventDefault();
    if (props.editing) {
      props.editSmurf(props.smurf.id, smurfData);
      props.smurfEdit(false)
    } else {
      props.addSmurf(smurfData);
    }
  };

  return (
    <StyledForm onSubmit={addNewSmurf}>
      <input
        type="text"
        placeholder="Enter name"
        value={smurfData.name}
        onChange={e => setSmurf({ ...smurfData, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Enter age"
        value={smurfData.age}
        onChange={e => setSmurf({ ...smurfData, age: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter height"
        value={smurfData.height}
        onChange={e => setSmurf({ ...smurfData, height: e.target.value })}
      />
      <button type="submit">
        {props.editing ? "Edit Smurf" : "Add Smurf"}
      </button>
    </StyledForm>
  );
};

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  updatingSmurf: state.updatingSmurf
});

export default connect(
  mapStateToProps,
  { addSmurf, editSmurf }
)(SmurfForm);

const StyledForm = styled.form`
  margin: 0 auto;
  padding: 30px;
  width: 400px;
  height: auto;
  border-radius: 10px;
  * {
    box-sizing: border-box;
  }

  input {
    margin: 15px 0;
    padding: 15px 10px;
    width: 100%;
    outline: none;
    font-size: 1rem;
    border: 1px solid #bbb;
    border-radius: 20px;
  }

  button {
    display: block;
    text-align: center;
    font-size: 1rem;
    margin: auto 0;
    width: 100%;
    outline: none;
    padding: 15px;
    border: none;
    border-radius: 20px;
    background-color: #96cdff;
  }
`;
