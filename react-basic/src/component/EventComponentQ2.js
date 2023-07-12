import { useState } from "react";

function EventComponentQ2 () {

  const [data, setData] = useState({content:'', btn : ''});

  /* const handleChange = (e) => {
    const copy = {...data, [e.target.name]: e.target.value };
    setData(copy)
  } */

  const handleChange = (e) => {
    setData({data:e.target.value, btn:data.btn})
  }
  

  /* const handleButton = (e) => {
    const copy = {...data, [e.target.name]: data.content}
    setData(copy)
  } */

  const handleButton = () => {
    setData({data:'', btn:data.data})
  }
  
  return(

    <div>
      <hr />
      <h2>인풋데이터 핸들링 실습2</h2>
      <p>클릭시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리</p>
      <p>힌트는? 아마도 state는 두개가 필요할듯? 하지만 객체(obj)를 이용해서 하나로 해보자</p>
    
      <input type="text" name="content" onChange={handleChange}/>
      <button type="button" name="btn" value={'df'} onClick={handleButton} >추가하기</button>

      <h2>결과</h2>
      {data.btn}
    </div>

  )

}

export default EventComponentQ2;