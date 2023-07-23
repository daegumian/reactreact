import { useReducer } from "react";

const myReducer = (state, action) => {

    if(action.type === 'increase') {
        state = { value: state.value+1 }
    } else if(action.type === 'decrease') {
        state = { value: state.value-1 }
    } else if(action.type === 'reset'){
        state = { value : 0}
    } 

    return state
}

const HookReducer = () => {

    //state에서 만들었던 증가,감소 리듀서 적용하기
    //1. const[현재값 , 리듀서실행함수] useReducer( 리듀서, state값)
    const [state, func] = useReducer(myReducer, {value:0 } )

    const handleClick = () => {
        func({type: 'increase'});
    }
    
    

    return (

        <div>
            <h2>실습</h2>
            <h2>카운트 : {state.value}</h2>
            <button onClick={handleClick}>증가</button>
            <button onClick={() => func({type: 'decrease'})}>감소</button>
            <button onClick={() => func({type: 'reset'})}>초기화</button>
        </div>
    )

}
export default HookReducer;