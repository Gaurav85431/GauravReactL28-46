// purecomponent using props
import { Component } from "react";

class PureComponentUSER extends Component {

  render() {

    console.log("check render");

    return (<>

      <h1> User Component </h1>
      <h2>{this.props.count}</h2>

    </>)
  }
}
export default PureComponentUSER;