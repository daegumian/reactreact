import { useState } from "react"

let cnt = 0;
function StateComponentQ (){
  const [num, setNum] = useState(0);
  return(
    <div>
      <h2>실습</h2>
      <h2>카운트 : {num}</h2>
      <button onClick={() => {setNum(++cnt)}}>증가</button>
      {/* <button onClick={() => {setNum(num + 1)}}>증가</button> */}
      <button onClick={() => {setNum(--cnt)}}>감소</button>
      <button onClick={() => {setNum(0)}}>초기화</button>
    </div>
  )
}
export default StateComponentQ