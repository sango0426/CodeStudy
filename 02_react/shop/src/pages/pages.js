import data from '../data.js'
import { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios'

let YellowBtn = styled.button`
    background : ${ props => props.bg };
    padding : 5px;
    border-radius : 10px;
`

// 상품 리스트 페이지
function Product(){
    let [shoes, setShoes] = useState(data);
    let [shoesImage] = useState([
    'https://codingapple1.github.io/shop/shoes1.jpg', 
    'https://codingapple1.github.io/shop/shoes2.jpg',
    'https://codingapple1.github.io/shop/shoes3.jpg'
    ]);

    return(
        <div style={ { 'display' : 'flex', 'flexDirection' : 'column', 'alignItems' : 'center' } }>
            <div style={ { 'display' : 'flex', 'flexDirection' : 'row'} }>
                {
                    shoes.map((a, i)=>{
                        return (
                            <>
                                <Col key={i} style={ { 'justifyContent' : 'spaceBetween'} }>
                                    <img src={ shoesImage[i] } width="80%"/>
                                    <h4>{ shoes[i].title }</h4>
                                    <p>{ shoes[i].price }</p>
                                </Col>
                                
                            </>
                        );
                    })
                }
            </div>
            <YellowBtn bg="aqua" style={ { 'width' : '120px' } } onClick={ ()=>{
                axios.get('https://codingapple1.github.io/shop/data2.json').then((result)=>{ 
                    setShoes([...data, ...result.data]);
                    console.log(shoes);
                }).catch(()=>{
                    console.log('실패함');
                })
            } }>상품 더보기</YellowBtn>
        </div>
    );
}


// 상세정보 페이지
function Detail(props){
    let [shoes] = useState(data);
    let Image1 = 'https://codingapple1.github.io/shop/shoes1.jpg';
    let Image2 = 'https://codingapple1.github.io/shop/shoes2.jpg';
    let Image3 = 'https://codingapple1.github.io/shop/shoes3.jpg';
    let [shoesImage] = useState([Image1, Image2, Image3]);
    let [count, setCount] = useState(0);
    let {id} = useParams();
    let [num, setNum] = useState('');

    let findProduct = shoes.find(function(x) {
        return x.id == id;
    });

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
            <YellowBtn onClick={ ()=>{ setCount(count+1) } } bg="blue" padding="20px">버튼</YellowBtn> { count }
            <div className="row">
                <div className="col-md-6">
                    <img src={ shoesImage[id] } width="100%" />
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