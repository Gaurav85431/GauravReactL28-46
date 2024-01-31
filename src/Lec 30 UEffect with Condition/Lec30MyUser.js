import { useEffect } from "react";

function MyUser(props) {

  useEffect(() => {
    alert("count is " + props.count);
  }, [props.count]);

  useEffect(() => {
    alert("Data is " + props.data);
  }, [props.data]);



  return (<>

    <h1>count is {props.count}</h1>
    <h1>Data is {props.data}</h1>


  </>)

}
export default MyUser;