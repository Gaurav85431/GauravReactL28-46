import { PureComponent } from "react";

class PureComponent4 extends PureComponent {

  constructor() {
    super();
    this.state = {
      count: 1
    }
  }

  // -> Ye check karega ki agar previous state se state update hua, yaani ki agar state ka value change hua previous state se tab render() chalega i.e. tab clg("check-rendering") show karega.

  // Yaha pr state change ho rha hia to render() function call hoga.

  render() {

    console.log("check render");

    return (<>

      <h1>Pure component in React {this.state.count}</h1>

      <button onClick={() => this.setState({ count: this.state.count + 1 })}>Update Count</button>

    </>)
  }
}
export default PureComponent4;