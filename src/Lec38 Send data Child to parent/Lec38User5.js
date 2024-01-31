// Ye hai e.g. child se parent me data send karne ka
function UserChild5(props) {

  // const data = "Anil Sidhu";
  // to pass object
  const data = { name: 'Gaurav', email: 'gaurav@hotmail.com' };

  return (<>

    <h1> Pass data to child to parent </h1>

    <button onClick={() => props.alert(data)}>Click Me</button>

  </>)

}
export default UserChild5;