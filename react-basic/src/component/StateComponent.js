import { useState } from "react";

function StateComponent() {

  //state - 컴포넌트 안에서 변화하는 값(즉 상태변수)
  //const result - useState('초기값')
  //const a - result[0]; //초기값
  //const b = result[1]; //함수

  const [data, setData] = useState('초기값');
  const [num, setNum] = useState(0);
  const [color, setColor] = useState('black');

  //state는 절대 직접 값을 바꾸면 안된다
  //data = '이거바꿔야지';

  // setData('변경해야지') //state로 값을 변경하면 화면을 계속 다시 그린다.무한루프 지옥에 빠진다
  //state는 이벤트 or 특정 함수 안에서 바꾸도록 처리해야한다. 절대 하면 안된다.

  const handleData = () => {
    setData('체인지!'); //비동기적으로 state값을 변경 -> 화면을 리렌더링 하게된다.
    //innerHTML으로 바꾸는 방법이랑 절대 다르다.
    setNum(10);
    
  }

  //이렇게 선언해도 되지마안~!
  // const handleColor = () => setColor('pink');
  // const handleColor2 = () => setColor('orange');
  // const handleColor3 = () => setColor('skyblue');

  return (
    <div>
      스테이트값 : {data}
      <br />
      스테이트값 : {num}
      <br />
      <button onClick={handleData}>스테이트값 변경</button>

      <br/>
      <h3 style={{color:color}} >{data}</h3>

      <button onClick={() => setColor('pink')}>핑크색</button> {/* JSX안에 바로 함수를 집어넣어 사용도 가능 */}
      <button onClick={() => setColor('orange')}>주황색</button>
      <button onClick={() => setColor('skyblue')}>그 사이 3초 짧은 색</button>

    </div>
  )
}

export default StateComponent