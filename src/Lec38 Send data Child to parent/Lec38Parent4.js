// Ye hai e.g. child se parent me data send karne ka
import UserChild4 from "./Lec38User4";

function AppParent4() {

  // child se jo data aa rha hia usko hm parentAlert() me receive karenge.
  function parentAlert(data) {
    alert("Hello form Parent" + data);
  }

  return (<>

    <h1>Lifting State Up</h1>

    <UserChild4 alert={parentAlert} />


  </>)

}
export default AppParent4;