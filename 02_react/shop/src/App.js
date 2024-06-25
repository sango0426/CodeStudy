import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import { Product, Detail, Cart, About, Error} from './pages/pages.js'
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" className="nav-title">Shoes Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={ ()=>{ navigate('/') } }>Home</Nav.Link>
            <Nav.Link onClick={ ()=>{ navigate('/cart') } }>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      <Routes>
        <Route path="/" element={ 
          <>
            <div className="main-bg"></div>
            <Container className="container">
              <Row className="row">
                <Product></Product>
              </Row>
            </Container>
          </>
        } />
        <Route path="/detail" element={ <Detail /> } />
        <Route path="/about" element={ <About /> }>
          <Route path="member" element={ <About /> } />
        </Route>
        <Route path="/cart" element={ <Cart /> } />
        <Route path="*" element={ <Error /> } />

      </Routes>   
    </div>
  );
}

export default App;