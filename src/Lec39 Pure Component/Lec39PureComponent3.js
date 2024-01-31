import { PureComponent } from "react";

class PureComponent3 extends PureComponent {

  constructor() {
    super();
    this.state = {
      count: 1
    }
  }

  // -> Ye check karega ki agar previous state se state update hua, yaani ki agar state ka value change hua previous state se tab render() chalega i.e. tab clg("check-rendering") show karega.



  render() {

    console.log("check render");

    return (<>

      <h1>Pure component in React {this.state.count}</h1>

      <button onClick={() => this.setState({ count: 1 })}>Update Count</button>

    </>)
  }
}
export default PureComponent3;