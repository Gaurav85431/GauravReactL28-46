import AppParent from "./Lec38Parent";
import AppParent2 from "./Lec38Parent2";
import AppParent3 from "./Lec38Parent3";
import AppParent4 from "./Lec38Parent4";
import AppParent5 from "./Lec38Parent5";

function MyAppLec38() {

  return (<>

    <h1>Lifting Scale Up</h1>

    <AppParent />

    {/* Send data from  parent to child */}
    <AppParent2 />


    {/* Send data from child to parent */}
    <AppParent3 />


    {/* Send data from child to parent  e.g.*/}
    <AppParent4 />


    {/* Send object from child to parent  e.g.*/}
    <AppParent5 />



  </>)

}
export default MyAppLec38;