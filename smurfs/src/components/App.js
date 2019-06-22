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
            {/* <Loader type="TailSpin" color="#96CDFF" height={80} width={80} /> */}
          </StyledLoader>
        )}

        {this.props.smurfs && (
          <>
            <SmurfForm />
            <SmurfContainer smurfs={this.props.smurfs} />
          </>
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
