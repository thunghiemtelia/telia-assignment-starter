import React, { PropTypes } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as Actions from "../actions/index";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h2>Telia Assignments</h2>
        <p>Welcome to telia assignments</p>
      </div>
    );
  }
}

export default connect(
  // map state to props
  state => ({ ...state }),
  // map dispatch to props,
  dispatch => ({ actions: bindActionCreators(Actions, dispatch) })
)(App);
