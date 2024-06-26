import data from '../data.js'
import { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';


// 상품 리스트 페이지
function Product(){
    let [shoes] = useState(data);
    let [shoesImage] = useState([
    'https://codingapple1.github.io/shop/shoes1.jpg', 
    'https://codingapple1.github.io/shop/shoes2.jpg',
    'https://codingapple1.github.io/shop/shoes3.jpg'
    ]);

    return(
        shoes.map((a, i)=>{
            return (
                <Col key={i}>
                    <img src={ shoesImage[i] } width="80%"/>
                    <h4>{ shoes[i].title }</h4>
                    <p>{ shoes[i].price }</p>
                </Col>
            );
        })
    );
}


// 상세정보 페이지
function Detail(props){
    let [shoes] = useState(data);
    let [shoesImage] = useState([
    'https://codingapple1.github.io/shop/shoes1.jpg', 
    'https://codingapple1.github.io/shop/shoes2.jpg',
    'https://codingapple1.github.io/shop/shoes3.jpg'
    ]);

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={ shoesImage[0] } width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{ shoes[0].title }</h4>
                    <p>{ shoes[0].title }</p>
                    <p>{ shoes[0].price }</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    );
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

export {Product, Detail, Cart, About, Error, Event}