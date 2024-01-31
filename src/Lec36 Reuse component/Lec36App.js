import ReuseApp from "./Lec36ReuseApp";
import ReuseApp2 from "./Lec36ReuseApp2";
import ReuseApp3 from "./Lec36ReuseApp3";
import ReuseApp4 from "./Lec36ReuseApp4";

import './Lec36ReuseUsr3CSS.css'



function MyAppLec36() {

  return (<>

    <ReuseApp />

    <ReuseApp2 />


    {/* ReuseUser2 me print hoga wo data jo ki props se through pass hoga ReuseApp3 se  */}
    <ReuseApp3 />


    <ReuseApp4 />



  </>)


}
export default MyAppLec36;