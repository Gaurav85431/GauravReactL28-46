import './Lec31Style.css'

// import modular css
import style from './Lec31Style.module.css';

function MyAppStyle() {


  return (<>

    {/* 1st way */}
    <h1 className="primary">Hello, Gaurav This is first way to style</h1>

    <br></br>
    <p className='myColor'>This is my color using first way </p>

    {/* 2nd way */}

    <br></br><br></br>
    <h1 style={{ color: 'blue', backgroundColor: 'yellow' }}>This is second way of style</h1>


    {/* 3rd way */}
    <br></br><br></br>
    <h1 className={style.success}>This is third way</h1>



  </>)

}
export default MyAppStyle;