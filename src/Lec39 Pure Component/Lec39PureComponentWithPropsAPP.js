// purecomponent using props
import { Component } from "react";
import PureComponentUSER from "./Lec39PureCmpntUSER";

class PureComponentAPP extends Component {

  constructor() {
    super();
    this.state = {
      count: 1
    }
  }

  render() {


    return (<>

      <PureComponentUSER count={this.state.count} />

      <button onClick={() => this.setState({ count: this.state.count + 1 })}>Update Count</button>

    </>)
  }
}
export default PureComponentAPP;