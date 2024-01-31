import { Component } from "react";
import { createRef } from "react";

class RefApp extends Component {

  constructor() {
    super();
    this.inputRef = createRef();
    // this.inputRef me hm  createRef() ko define kar dete hia.
    // basically createRef() function hota hia.
    // ab this.inputRef ke pass ye power hia ki jiske upper hm isko apply karenge ye uska property ko change kar sakta hia.
  }

  render() {
    return (<>

      <h1>Ref in React</h1>

      {/* To hm <input> per ref property ko lagayenge aur is ref property me hm pass kaenge this.inputRef */}

      <input type="text" ref={this.inputRef} />

    </>)
  }
}
export default RefApp;