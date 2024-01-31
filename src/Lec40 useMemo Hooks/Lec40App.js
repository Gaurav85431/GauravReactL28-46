import MyUseMemo from "./Lec40useMemo";
import MyUseMemo2 from "./Lec40useMemo2";
import MyUseMemo3 from "./Lec40useMemo3";
import MyUseMemo4 from "./Lec40useMemo4";

function MyAppLec40() {


  return (<>

    <MyUseMemo />


    {/* problem without useMemo */}
    <MyUseMemo2 />


    {/* Use useMemo hooks */}
    <MyUseMemo3 />

    {/* useMemo hooks example 2nd */}
    <MyUseMemo4 />


  </>)


}
export default MyAppLec40