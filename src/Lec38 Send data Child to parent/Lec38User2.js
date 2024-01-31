// Ye hai e.g.parent se child me data send karne ka
function UserChild2(props) {

  return (<>

    <h1>User Name is {props.name}</h1>
    {/* props ke under name ke under data */}

    <button>Click Me</button>

  </>)

}
export default UserChild2;