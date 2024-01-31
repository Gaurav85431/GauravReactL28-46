// Ye hai e.g. child se parent me data send karne ka
import UserChild3 from "./Lec38User3";

function AppParent3() {

  function parentAlert() {
    alert("Hello form Parent");
  }

  return (<>

    <h1>Lifting State Up</h1>

    <UserChild3 alert={parentAlert} />


  </>)

}
export default AppParent3;