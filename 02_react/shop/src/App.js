import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import { Detail, Cart, About, Error, Event} from './pages/pages.js'
import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import data from './data.js'
import styled from 'styled-components';

let YellowBtn = styled.button`
    background : ${ props => props.bg };
    padding : 5px;
    border-radius : 10px;
`

function App() {
  let [shoes, setShoes] = useState(data);
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
            <div className="container">
              <div className="row">
                {
                  shoes.map((a, i)=>{
                    return <Product shoes={shoes[i]} i={i} key={i}></Product>
                  })
                }
              </div>
            </div>
            <YellowBtn bg="aqua" style={ { 'width' : '120px' } } onClick={ ()=>{
                axios.get('https://codingapple1.github.io/shop/data2.json').then((result)=>{ 
                    setShoes([...data, ...result.data]);
                    console.log(shoes);
                }).catch(()=>{
                    console.log('실패함');
                })
            } }>상품 더보기</YellowBtn>
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

// 상품 리스트 컴포넌트
function Product(props){
  return(
      <div className="col-md-4">
          <img src={ 'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg' } width="80%"/>
          <h4>{ props.shoes.title }</h4>
          <p>{ props.shoes.price }</p>
      </div>
  );
}

export default App;