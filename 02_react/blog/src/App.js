/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {
  let post = "강남 우동 맛집";
  let [title, title2] = useState(['남자 코트 추천', '강남 우동맛집', '리액트 독학']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

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

      {/* <div className="list">
        <h4>{ title[0] } <span onClick={()=>{ like2(like + 1); } }>👍</span> { like } </h4>
        <p>2월 17일 발행</p>
        <button onClick={()=>{
          // state가 array/object 형식이면 독립적 카피본을 만들어서 수정
          let copy = [...title];
          copy[0] = '여자 코트 추천';
          title2(copy);
          }}>글 제목 바꾸기</button>
      </div>

      <div className="list">
        <h4 onClick={()=>{
          // 제목을 다시 클릭하면 모달창 다시 숨기기
          modal == true ? setModal(false) : setModal(true)
        }}>{ title[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        // 같은 html 반복생성하는 법(실제 블로그 글 갯수 만큼 html 생성)
        title.map(function(a, i){
          return (
            <div className="list" key={i}>
              <br></br>
              <h4 style={ {'display' : 'inline'} } onClick={()=>{
                setModal(true)
                // 제목을 다시 클릭하면 모달창 다시 숨기기
                modal == true ? setModal(false) : setModal(true)
              }}>
                { title[i] }
              </h4>
              <span onClick={()=>{
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setLike(copy);
                } }>👍</span> { like[i] }
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }
      {
        /* 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드 */
        modal == true ? <Modal/> : null
      }

    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  );
}

/* [동적인 UI 만드는 3 step]
1. html css로 미리 디자인 완성
2. UI의 현재 상태를 state로 저장
3. statedp 따라 UI가 어떻게 동작할지 코딩 */

export default App;