import { useContext } from "react";
import UserContext from "../context/ContextAPI2";

function B(){
    //context, API사용
    const {state, action} = useContext(UserContext);

    return(
        <div>
            B컴포넌트
            {state.id}<br/>
            {state.name}
        </div>
    )
}

export default B;