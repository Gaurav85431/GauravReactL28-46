import ReuseUser3 from "./Lec36ReuseUser3";

function ReuseApp4() {

  const users = [
    { name: "Gaurav", email: "gaurav@gmail.com", contact: "9876" },
    { name: "saurav", email: "gaursadfav@gmail.com", contact: "987665" },
    { name: "Faurav", email: "gfdsaurav@gmail.com", contact: "98676" },
    { name: "Taurav", email: "fgaurav@gmail.com", contact: "987546" }
  ]

  return (
    <>
      {
        users.map((items, i) =>

          <ReuseUser3 data={items} />

        )
      }
    </>
  )
}
export default ReuseApp4;