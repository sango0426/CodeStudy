import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import Detail from './pages/Detail.js'
import Cart from './pages/Cart.js'
import About from './pages/About.js'
import Error from './pages/Error.js'
import Event from './pages/Event.js'
import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { createContext, useState } from 'react';
import data from './data.js'
import styled from 'styled-components';
import loading from './images/loading.png';

// state 보관함
export let Context1 = createContext();

let YellowBtn = styled.button`
    background : ${ props => props.bg };
    padding : 5px;
    border-radius : 10px;
`

function App() {
  let [shoes, setShoes] = useState(data);
  let [count, setCount] = useState(2);
  let [image, setImage] = useState(false);
  let [재고] = useState([10, 11, 12]);
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
                    return <Product navigate = { navigate }shoes={shoes[i]} i={i} key={i}></Product>
                  })
                }
              </div>
            </div>
            
            <div>
              {
                image === true ? <LoadingUi/> : null
              }
            </div>

            <YellowBtn bg="aqua" style={ { 'width' : '120px' } } onClick={ ()=>{

              setImage(true);

              {
                if(count == 3) {
                  alert("더 준비된 상품이 없습니다!");
                } else {
                  setTimeout(()=>{
                    axios.get('https://codingapple1.github.io/shop/data' + count +'.json').then((result)=>{ 
                      setShoes([...data, ...result.data]);
                      setCount(count + 1);
                      setImage(false);
                    }).catch(()=>{
                      console.log('실패함');
                      setImage(false);
                    })
                  }, 1000);
                }
              }

              // 서버로 데이터 전송
              // axios.post('/url1', { name : 'kim'}).then(()=>{}).catch(()=>{})

              // 서버로 데이터 전송(동시 여러곳)
              //Promise.all([axios.post('/url1', { name : 'kim'}), axios.post('/url1', { name : 'kim'})]).then(()=>{}).catch(()=>{})
              
              // array, object 자료형 주고받기
              //"{"name" : "kim"}" <- json

            } }>상품 더보기</YellowBtn>
          </>
        } />

        <Route path="/cart" element={ <Cart /> } />

        <Route path="/event" element={ <Event /> }>
          <Route path="one" element={ <div>첫 주문시 양배추즙 서비스</div> } />
          <Route path="two" element={ <div>생일기념 쿠폰 받기</div> } />
        </Route>
        
        <Route path="/detail/:id" element={
          <Context1.Provider value={{ 재고 }}>
            <Detail shoes={ shoes }/>
          </Context1.Provider>
          
          
        } />
        
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
          <img onClick={()=>{
            props.navigate('/detail/' + props.shoes.id);
          }} src={ 'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg' } width="80%"/>
          <h4>{ props.shoes.title }</h4>
          <p>{ props.shoes.price }</p>
      </div>
  );
}

// 로딩 UI
function LoadingUi() {
  return (
    <img src={ loading } />
  )
}

export default App;