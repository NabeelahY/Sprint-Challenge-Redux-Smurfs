import React from "react";

const SmurfForm = () => {
  return (
    <form>
      <input type="text" placeholder="Enter name" />
      <input type="number" placeholder="Enter age" />
      <input type="text" placeholder="Enter height" />
      <button type="submit">Add Sumrf</button>
    </form>
  );
};

export default SmurfForm;
