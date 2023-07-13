import { useEffect, useState } from "react";

function HookEffect() {
  //state를 관리하는 훅
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  console.log(1);
  
  //생명주기 훅
  useEffect(()=>{
    console.log('랜더링 완료:' + name);
  })
  console.log(2);

  return(
    <div>
      <input type="text" onChange={ e => setName(e.target.value) } value={name} /><br />
      <input type="number" onChange={ e => setAge(e.target.value) } value={age}/><br />
    
      이름 : {name}, 나이 : {age}
    </div>
  )

}

export default HookEffect;