import { Component } from "react";

class PureComponent extends Component {

  constructor() {
    super();
    this.state = {
      count: 1
    }
  }


  // Jb count ko increase kar rhe hia to  render ke under ka console.log("click render") chal rha hia jitna bar Update count ko click kar rhe hia.

  render() {

    console.log("check render");

    return (<>

      <h1>Pure component in React {this.state.count}</h1>
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>Update Count</button>

    </>)

  }


}
export default PureComponent;