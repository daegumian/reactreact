import { useState } from "react"

function EventComponent2() {

  //state 여러개를 객체로 관리하기
  const [form, setForm] = useState({
    name: '',
    topic: ''
  });

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);/
    const copy = { ...form, [e.target.name]: e.target.value }; //객체 복사

    console.log(copy);
    setForm(copy);

  }
  const handleKeyUp = (e) => {
    //엔터를 쳤을 때 동작함
    if(e.key === 'Enter'){
      console.log('ㅇㅌㄹ ㄴㄹㅇ');
      handleClick();//클릭이벤트 호출

    }
  }

  const handleClick = () => {
    alert(`결과: ${form.name} 님의 할일: ${form.topic}`)
    setForm({ name: '', topic: '' })//state변경
  }


  return (

    <div>
      <hr />
      <h3>리액트의 이벤트 핸들링(인풋 태그의 change)</h3>
      <input type="text" name="name" onChange={handleChange} value={form.name} />
      변경된 값 : { }
      <br />

      <h3>리액트 이벤트(keyUp)</h3>
      <input type="text" name="topic" onChange={handleChange} 
                                      onKeyUp={handleKeyUp} 
                                      value={form.topic} />
      변경된 값 : { }
      <br />

      <h3>리액트 이벤트(click)</h3>
      <button type="button" onClick={handleClick}>클릭me</button>

    </div>
  )
}
export default EventComponent2