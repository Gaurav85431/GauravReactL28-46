import PureComponent from "./Lec39PureComponent";
import PureComponent2 from "./Lec39PureComponent2";
import PureComponent3 from "./Lec39PureComponent3";
import PureComponent4 from "./Lec39PureComponent4";
import PureComponentAPP2 from "./Lec39PureComponentApp2";
import PureComponentAPP from "./Lec39PureComponentWithPropsAPP";

function MyAppLec39() {

  return (<>

    <PureComponent />


    {/* when count set as 1 after click or not click */}
    <PureComponent2 />



    {/* PureComponent3 render will not called*/}
    <PureComponent3 />


    {/* PureComponent4 render called */}
    <PureComponent4 />



    {/* Props ko use karenge in component */}
    <PureComponentAPP />

    {/* Props ko use karenge in PureComponent */}
    <PureComponentAPP />


    {/* Props ko use karenge in PureComponent */}
    <PureComponentAPP2 />

  </>)

}
export default MyAppLec39;