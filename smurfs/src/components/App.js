import React, { Component } from "react";
// import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import { getSmurfs } from "../actions";
import SmurfContainer from "../components/SmurfContainer";
import SmurfForm from "./SmurfForm";

class App extends Component {
  // useEffect(props.getSmurfs, [])
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div>
        {this.props.fetchingSmurfs && (
          <StyledLoader>
            <Loader type="Rings" color="#96CDFF" height={80} width={80} />
          </StyledLoader>
        )}

        {this.props.smurfs && !this.props.error && (
          <>
            <SmurfForm />
            <SmurfContainer smurfs={this.props.smurfs} />
          </>
        )}

        {this.props.error && (
          <StyledErr>{this.props.error}</StyledErr>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error,
  fetchingSmurfs: state.fetchingSmurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);

const StyledLoader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
`;

const StyledErr = styled.div `
  margin: 1rem auto;
  text-align: center;
  width: 50%;
  background-color: salmon;
  border: 1px red solid;
  border-radius: 0.5rem;
  font-size: 2rem;
  color: red;
`