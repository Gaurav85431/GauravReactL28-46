// isme hm user ka data ko send karenge props ke throgh ReuseUser2 me. ReuseUser2 me ek <h1> tag hai us me  print hoga. 
// hme  poora data of array ko send karna hai to hm array ke liye loop i.e. map() chala denge.

import ReuseUser2 from "./Lec36ReuseUser2";


function ReuseApp3() {

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
          // isme hm props pass krenge ReuseUser2.js me.

          <ReuseUser2 data={items} />

        )
      }
    </>
  )
}
export default ReuseApp3;