import { Outlet } from 'react-router-dom';

// About 페이지
function About(){
    return(
        <div>
            <h4>회사 정보임</h4>
            <Outlet></Outlet>
        </div> 
    );
}

export default About;