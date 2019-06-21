import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addSmurf } from "../actions";

const SmurfForm = props => {
  console.log(props);
  const nameRef = React.createRef();
  const ageRef = React.createRef();
  const heightRef = React.createRef();

  const addNewSmurf = e => {
    e.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const height = heightRef.current.value;

    props.addSmurf(name, age, height);
  };

  return (
    <StyledForm onSubmit={addNewSmurf}>
      <input type="text" placeholder="Enter name" ref={nameRef} />
      <input type="number" placeholder="Enter age" ref={ageRef} />
      <input type="text" placeholder="Enter height" ref={heightRef} />
      <button type="submit">Add Smurf</button>
    </StyledForm>
  );
};

export default connect(
  null,
  { addSmurf }
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
    display:block;
    text-align: center;
    font-size: 1rem;
    margin: auto 0;
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 20px;
    background-color: #96CDFF;
  }
`;
