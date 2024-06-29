import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';

// 상세정보 페이지
function Detail(props){
    let [num, setNum] = useState('');
    let [tab, setTab] = useState(0);
    let {id} = useParams();
    let findProduct = props.shoes.find(x => x.id == id);
    id = parseInt(id, 10);

    // 어려운 연산, 서버 데이터 바인딩, 타이머 장착(재렌더링마다 코드 실행하고 싶으면)
    useEffect(()=>{
        if(isNaN(num) == true) {
            alert('숫자만 입력해주세요.');
        }
        // unmount시 1회 코드 실행하고 싶으면
        // useEffect 실행 전에 뭔가 실행하고싶으면
        return ()=>{
            
        }
    }, [num]) // mount시 1회만 하고싶을 때

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={ "https://codingapple1.github.io/shop/shoes" + (findProduct.id+1) +".jpg" } width="100%" />
                </div>
                <div className="col-md-6">
                    <input placeholder="수량 입력란" onChange={ (e)=>{ 
                        setNum(e.target.value)
                     } }></input>
                    <h4 className="pt-5">{ findProduct.title }</h4>
                    <p>{ findProduct.content }</p>
                    <p>{ findProduct.price }원</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                  <Nav.Link onClick={ ()=>{ setTab(0); } } eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={ ()=>{ setTab(1); } }eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={ ()=>{ setTab(2); } }eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab}/>
            
            
        </div> 
    );
}

function TabContent({tab}){
    let [fade, setFade] = useState('');

    useEffect(()=>{
        let timer = setTimeout(()=>{ setFade('end'); }, 100);
        
        return ()=>{
            clearTimeout(timer);
            setFade('');
        }
    }, [tab]);

    return (
        <div className={'start ' + fade}>
            {
                [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]
            }
        </div>
    )
}

// 장바구니 페이지
function Cart(){
    return(
        <div className="container">
            장바구니 페이지임
        </div> 
    );
}

// 이벤트 페이지
function Event(){
    return(
        <div className="container">
            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
        </div> 
    );
}


// About 페이지
function About(){
    return(
        <div>
            <h4>회사 정보임</h4>
            <Outlet></Outlet>
        </div> 
    );
}


// 404 페이지
function Error(){
    return(
        <div className="container">
            <div className="col-md-6">
                <h4>404 Error</h4>
            </div>
            <div className="col-md-6">
                <h2 className="pt-5">없는 페이지입니다.</h2>
            </div>
        </div> 
    );
}

export { Detail, Cart, About, Error, Event }