import React from "react";
import styled from "styled-components";
import Smurf from "./Smurf";

const SmurfContainer = props => {
  return (
    <StyledContainer>
      {props.smurfs.map(smurf => {
        return <Smurf key={smurf.id} smurf={smurf} />;
      })}
    </StyledContainer>
  );
};

export default SmurfContainer;

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 800px;
  text-align: center;
`;
