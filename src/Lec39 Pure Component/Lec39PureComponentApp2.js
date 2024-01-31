// purecomponent using props
import { Component } from "react";
import PureComponentUSER2 from "./Lec39PureComponentUSER2";

class PureComponentAPP2 extends Component {

  constructor() {
    super();
    this.state = {
      count: 1
    }
  }

  render() {


    return (<>

      <PureComponentUSER2 count={this.state.count} />

      <button onClick={() => this.setState({ count: 1 })}>Update Count</button>

    </>)
  }
}
export default PureComponentAPP2;