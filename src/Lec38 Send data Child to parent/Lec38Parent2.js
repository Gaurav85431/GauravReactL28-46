// In this we are sending data to the UserChild2 i.e. Lec38User2.js
// Ye hai e.g.parent se child me data send karne ka
import UserChild2 from "./Lec38User2";

function AppParent2() {

  let data = "Anil Sidhu";

  return (<>

    <h1>Lifting State Up</h1>

    <UserChild2 name={data} />


  </>)

}
export default AppParent2;