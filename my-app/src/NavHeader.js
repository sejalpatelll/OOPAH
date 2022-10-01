import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'

// bootstrapUtils.addStyle(Navbar, 'custom');

//  const customNavbarStyle = (
//  <div>
//     <style type="text/css">
//       {`
//      .navbar-custom {
//         background-color: #27cf40;
//          color: white;
//      }
//      `}
//     </style>
//     <Navbar bsStyle="custom">Custom</Navbar>
//    </div>
//  );

function NavHeader() {
  return (
    <Navbar expand="lg" variant="custom" bg="custom" sticky="top">
      <Container>
        <Navbar.Brand href="#" id="nav-text">Yo Mama's Financing</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavHeader;