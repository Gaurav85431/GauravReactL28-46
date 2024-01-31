// Ye hai e.g. child se parent me data send karne ka
function UserChild4(props) {

  const data = "Anil Sidhu";

  return (<>

    <h1> Pass data to child to parent </h1>

    <button onClick={() => props.alert(data)}>Click Me</button>
    {/*  Yaha per hm alert() function me data pass kar rhe hai, to chuki alert function es file ka nhi hai to alert function ko pehle import kiye hia aur isme hm data pass kr rhe hai.
     */}

    {/* to hmne child se data vej diya , ab parent me grab karna hai. */}


  </>)

}
export default UserChild4;