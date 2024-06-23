import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="nav-title">Shoes Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
        <Container className="container">
          <Row className="row">
            <Col>
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
              <h4>상품명</h4>
              <p>상품 설명</p>
            </Col>
            <Col>
              <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
              <h4>상품명</h4>
              <p>상품 설명</p>
            </Col>
            <Col>
              <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
              <h4>상품명</h4>
              <p>상품 설명</p>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;