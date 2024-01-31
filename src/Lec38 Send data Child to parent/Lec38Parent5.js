// Ye hai e.g. child se parent me data send karne ka
import UserChild5 from "./Lec38User5";

function AppParent5() {

  // child se jo data aa rha hia usko hm parentAlert() me receive karenge.
  function parentAlert(data) {
    // alert("Hello form Parent" + data);

    // to print name and email jo ki aa rha hia object form me child se parent me.
    alert('name ' + data.name + 'mail id ' + data.email);

  }

  return (<>

    <h1>Lifting State Up</h1>

    <UserChild5 alert={parentAlert} />


  </>)

}
export default AppParent5;