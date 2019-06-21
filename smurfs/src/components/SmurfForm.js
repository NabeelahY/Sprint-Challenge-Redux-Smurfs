import React from "react";
import { connect } from "react-redux";
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

    props.addSmurf(name, age, height).then(() => props.history.push("/"));
  };

  return (
    <form onSubmit={addNewSmurf}>
      <input type="text" placeholder="Enter name" ref={nameRef} />
      <input type="number" placeholder="Enter age" ref={ageRef} />
      <input type="text" placeholder="Enter height" ref={heightRef} />
      <button type="submit">Add Sumrf</button>
    </form>
  );
};

export default connect(
  null,
  { addSmurf }
)(SmurfForm);
