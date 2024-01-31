import { Component } from "react";
import { createRef } from "react";

class RefApp2 extends Component {

  constructor() {
    super();
    this.inputRef = createRef();

  }

  componentDidMount() {
    console.log(this.inputRef);
    console.log(this.inputRef.current);
    console.log(this.inputRef.current.value);
    console.log(this.inputRef.current.value = '1000');
  }



  render() {
    return (<>

      <h1>Ref in React</h1>


      <input type="text" ref={this.inputRef} />

    </>)
  }
}
export default RefApp2;