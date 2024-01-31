// purecomponent using props
import { PureComponent } from "react";

class PureComponentUSER2 extends PureComponent {

  render() {

    console.log("check render");

    return (<>

      <h1> User Component </h1>
      <h2>{this.props.count}</h2>

    </>)
  }
}
export default PureComponentUSER2;