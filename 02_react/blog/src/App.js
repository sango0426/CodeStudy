/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {
  let post = "강남 우동 맛집";
  let [title, title2] = useState(['남자 코트 추천', '강남 우동맛집', '리액트 독학']);
  let [like, like2] = useState(0);

  function 함수() {
    console.log(1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      
      <button onClick={()=>{
        let copy = [...title];
        copy.sort();
        title2(copy);
      }}>가나다순 정렬</button>


      <div className="list">
        <h4>{ title[0] } <span onClick={()=>{ like2(like + 1); } }>👍</span> { like } </h4>
        <p>2월 17일 발행</p>
        <button onClick={()=>{

          let arr = [1, 2, 3];

          
          // state가 array/object 형식이면 독립적 카피본을 만들어서 수정
          let copy = [...title];
          copy[0] = '여자 코트 추천';
          title2(copy);
          }}>글 제목 바꾸기</button>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
