// Ye hai e.g. child se parent me data send karne ka
function UserChild3(props) {

  return (<>



    <button onClick={props.alert}>Click Me</button>
    {/* ye props.alert aaya hia AppParent ke <UserChild3 /> ke under pass kar rhe hia whi se. */}

  </>)

}
export default UserChild3;