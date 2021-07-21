  import '../styles/banner.css';
  //import Register from './Register';
  import { Link } from 'react-router-dom';
  //import logout from './Logout';
  import {Navbar, Nav} from 'react-bootstrap';
  import {LinkContainer} from 'react-router-bootstrap';

  function Navig() {
    return <Navbar bg="light">  
      <LinkContainer to="/"> 
        <Navbar.Brand>Messager</Navbar.Brand> 
      </LinkContainer>
      <LinkContainer to="/logout" loddedIn='false'>
        <Nav.Link>Logout</Nav.Link>
      </LinkContainer>
      </Navbar>
}

export default Navig