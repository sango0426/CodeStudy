import { Navbar, Container, Nav, Row } from 'react-bootstrap';
import './App.css';
import { Product, Detail, Cart, About, Error, Event} from './pages/pages.js'
import { Routes, Route, useNavigate } from 'react-router-dom'

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
            <Nav.Link onClick={ ()=>{ navigate('/event') } }>Event</Nav.Link>
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

        <Route path="/cart" element={ <Cart /> } />

        <Route path="/event" element={ <Event /> }>
          <Route path="one" element={ <div>첫 주문시 양배추즙 서비스</div> } />
          <Route path="two" element={ <div>생일기념 쿠폰 받기</div> } />
        </Route>

        <Route path="/detail/:id" element={ <Detail /> } />
        
        <Route path="/about" element={ <About /> }>
          <Route path="member" element={ <About /> } />
          <Route path="location" element={ <About /> } />
        </Route>
        
        <Route path="*" element={ <Error /> } />

      </Routes>   
    </div>
  );
}

export default App;