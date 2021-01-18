import React from 'react'
import './firstPage.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const FirstPage = () => (
  <Container>
    <Row>
      <Col><h5>hi. welcome to whispers.</h5></Col>
    </Row><br />
    <Row>
      <Col>create an account to join the message board. be sure to use a password you do not use anywhere else to protect your privacy.</Col>
    </Row>
  </Container>
)

export default FirstPage
