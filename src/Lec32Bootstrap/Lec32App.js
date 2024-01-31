// import any component from bootstrap

import { Button } from "react-bootstrap";

function MyBootstrapApp() {

  return (<>

    <h1>Install bootstarap</h1>
    {/* Normal Button */}
    <button>Click Me</button>

    <br></br>
    {/* Bootstrap Button */}
    <Button onClick={() => alert('Bootstrap button call')}>Click Me</Button>


    <br /><br />
    {/* Bootstrap button sb type ka */}
    <Button variant="primary">Primary</Button>{' '}
    <Button variant="secondary">Secondary</Button>{' '}
    <Button variant="success">Success</Button>{' '}
    <Button variant="warning">Warning</Button>{' '}
    <Button variant="danger">Danger</Button>{' '}
    <Button variant="info">Info</Button>{' '}
    <Button variant="light">Light</Button>{' '}
    <Button variant="dark">Dark</Button>
    <Button variant="link">Link</Button>

  </>)

}
export default MyBootstrapApp;