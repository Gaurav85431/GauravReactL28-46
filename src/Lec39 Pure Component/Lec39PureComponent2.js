import { Component } from "react";

class PureComponent2 extends Component {

  constructor() {
    super();
    this.state = {
      count: 1
    }
  }

  // Jb count ko increase nhi v kar rhe hia to v render ke under ka console.log("click render") chal rha hia jitna bar Update count ko click kar rhe hia.

  // Yani ki state hmari same hai lekin ye render function baar baar call ho rha hai i.e. jb hm button ko click kar rhe hai tb v state ka value same (1 ) hi hia. it means ki wo increase nhi hai. TO Isse Performance per impact padega, to ye huge problem hia, to isse bachne ke liye hm PureComponent ka use karenge.
  render() {

    console.log("check render");

    return (<>

      <h1>Pure component in React {this.state.count}</h1>

      <button onClick={() => this.setState({ count: 1 })}>Update Count</button>

    </>)
  }
}
export default PureComponent2;