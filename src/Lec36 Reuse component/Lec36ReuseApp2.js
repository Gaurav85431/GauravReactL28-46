// in this hm ReuseUser ko pass krenge map() function ke under i.e. component ko pass karenge to wo component reuse hoga.

import ReuseUser from "./Lec36ReuseUser";

function ReuseApp2() {

  const users = [
    { name: "Gaurav", email: "gaurav@gmail.com", contact: "9876" },
    { name: "saurav", email: "gaursadfav@gmail.com", contact: "987665" },
    { name: "Faurav", email: "gfdsaurav@gmail.com", contact: "98676" },
    { name: "Taurav", email: "fgaurav@gmail.com", contact: "987546" }
  ]


  return (
    <>

      {/* ReuseUser ko pass kiye to jitna bar loop chalega utna bar <ReuseUser /> chalega. */}

      {
        users.map((items, i) =>
          <ReuseUser />

        )
      }
    </>
  )
}
export default ReuseApp2;