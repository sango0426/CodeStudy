import { useDispatch, useSelector } from 'react-redux';
import { increase } from './../store/userSlice.js';
import cartProduct, { changeCount, removeItem } from './../store/cartSlice.js';
import { Table } from 'react-bootstrap'

// 장바구니 페이지
function Cart(){
    let state = useSelector((state)=>{ return state });
    let dispatch = useDispatch();

    return(
        <div className="container">
            <h6>{ state.user.name } { state.user.age }의 장바구니</h6>
            <button onClick={()=>{
                dispatch(increase(1));
            }}>+1</button>
            <button onClick={()=>{
                dispatch(increase(10));
            }}>+10</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                        <th>상품 삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cartProduct.map((a, i)=> 
                            <tr key={i}>
                                <td>{state.cartProduct[i].id}</td>
                                <td>{state.cartProduct[i].name}</td>
                                <td>{state.cartProduct[i].count}</td>
                                <td>
                                    <button onClick={()=>{
                                        dispatch(changeCount(state.cartProduct[i].id));
                                    }}>+</button>
                                </td>
                                <td><button onClick={()=>{
                                        dispatch(removeItem(state.cartProduct[i].id));
                                    }}>삭제</button></td>
                            </tr> 
                        ) 
                    }
                </tbody>
            </Table> 
        </div> 
    );
}

export default Cart;