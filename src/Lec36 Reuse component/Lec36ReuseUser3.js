// isme data aayega ReuseApp3 se aur hm yaha per usko print karnege.

function ReuseUser3(props) {

  return (
    <div>
      <span>{props.data.name}</span>
      <span>{props.data.email}</span>
      <span>{props.data.contact}</span>
    </div>
  )

}
export default ReuseUser3;