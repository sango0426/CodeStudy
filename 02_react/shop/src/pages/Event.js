import { Outlet } from 'react-router-dom';

// 이벤트 페이지
function Event(){
    return(
        <div className="container">
            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
        </div> 
    );
}

export default Event;