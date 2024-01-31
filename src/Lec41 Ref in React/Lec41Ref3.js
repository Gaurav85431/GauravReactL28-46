import { Component } from "react";
import { createRef } from "react";

class RefApp3 extends Component {

  constructor() {
    super();
    this.inputRef = createRef();

  }

  // class component

  getVal() {

    // In this we will get the value jo ki hm put karenge.
    console.log(this.inputRef.current.value);

    // to change style like color, background-color etc.
    this.inputRef.current.style.color = "red"
    this.inputRef.current.style.backgroundColor = "blue"
  }


  render() {
    return (<>

      <h1>Ref in React</h1>


      <input type="text" ref={this.inputRef} />

      {/* when button will clicked then the written text come */}
      <button onClick={() => this.getVal()}>Check Val</button>

    </>)
  }
}
export default RefApp3;