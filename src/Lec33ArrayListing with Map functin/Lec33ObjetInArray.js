// we want to print name, email, mobile number 

function MapArray() {


  // const students=["gaurav","gaurav@gaml.com","324531"];

  const students = [

    { name: "Gaurav", email: "gaurav@gmail.com", phone: "8473722" },
    { name: "saurav", email: "saurav@gmail.com", phone: "855722" },
    { name: "Gautav", email: "gautav@gmail.com", phone: "8475552" },

  ]

  return (<>

    {

      students.map((item) =>
        // <h2>{item}</h2> //err bcz object hia

        <h2>Name is :{item.name}  , Email is : {item.email}, Phone is : {item.phone}</h2>

      )

    }



  </>)

}
export default MapArray;