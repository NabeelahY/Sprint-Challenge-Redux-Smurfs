import React, { Component } from "react";
// import React, { useEffect } from 'react';
import { connect } from "react-redux";
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
        <SmurfForm />
        {this.props.smurfs && <SmurfContainer smurfs={this.props.smurfs} />}
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
  {getSmurfs}
)(App);
