import { Component } from "react";
import { fetchPosts } from "../actions/postAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.fetchPosts()}>click me</button>
      </div>
    );
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts: fetchPosts }, dispatch);
}
export default connect(null, matchDispatchToProps)(Button);
