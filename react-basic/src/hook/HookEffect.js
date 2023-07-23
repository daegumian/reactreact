import { useEffect, useState } from "react";

function HookEffect() {
  //state를 관리하는 훅
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  // console.log(1);
  
  //생명주기 훅
  /* useEffect(()=>{
    console.log('랜더링 완료:' + name);
  }) */

  /* useEffect(()=>{
    console.log('첫번째 마운트 이후에만 실행됨');

  }, []); */

  //특정 값이 업데이트 될때 실행됩니다
  useEffect(()=>{
    // console.log('name 업데이트 시에 실행됨');

    return () => {
      // console.log('unmount될 때 실행된다');
      // console.log(`인풋의 값이 바뀌기 직전 값: ${name}`); //state가 ab로 변경될때 a가 출력
    }
  },[name, age])

  // console.log(2);

  return(
    <div>
      <input type="text" onChange={ e => setName(e.target.value) } value={name} /><br />
      <input type="number" onChange={ e => setAge(e.target.value) } value={age}/><br />
    
      이름 : {name}, 나이 : {age}
    </div>
  )

}

export default HookEffect;