import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

const navBarTextStyle = {
  color: 'white'
}

// const navBarHomeStyle = {
//   color: 'white',
//   borderRadius: '30%'
// }

const authenticatedOptions = (
  <Fragment>
    <Container>
      <Row>
        <Nav.Link className="nav-margin" href="#change-password" style={navBarTextStyle}>Change Password</Nav.Link>
        <Nav.Link className="nav-margin" href="#sign-out" style={navBarTextStyle}>Sign Out</Nav.Link>
      </Row>
    </Container>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Container className="navbar-stuff">
      <Row>
        <Nav.Link className="nav-margin" style={navBarTextStyle} href="#sign-up">Sign Up</Nav.Link>
        <Nav.Link className="nav-margin" style={navBarTextStyle} href="#sign-in">Sign In</Nav.Link>
      </Row>
    </Container>
  </Fragment>
)

// const alwaysOptions = (
//   <Fragment>
//     <Nav.Link href="#/">Home</Nav.Link>
//   </Fragment>
// )

const welcomeMessageStyle = {
  color: 'white',
  textAlign: 'center',
  padding: '2px',
  paddingTop: '10px',
  marginTop: '5px',
  width: '160px',
  height: '40px',
  fontFamily: 'Arial',
  fontSize: '14px',
  position: 'relative',
  backgroundColor: 'black'
}

const Header = ({ user }) => (
  <Navbar className="navbar-stuff" variant="dark">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2" style={welcomeMessageStyle}>{user.email}</span>}
        {/* { alwaysOptions } */}
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
