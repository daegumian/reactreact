import { useEffect, useRef, useState } from "react";

function HookQ() {

//state
  const [form, setForm] = useState({id:'',pw:''});

  const handleChange = (e) => {
    const copy = {...form, 'id' : e.target.name};
    setForm(copy);
  }

  //useEffect(첫번째 마운트에 포커싱)
  useEffect(()=>{
    idRef.current.focus();
  }, []);
  
  //useRef
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  const idRef = useRef(null)
  const pwRef = useRef(null)

  const handleClick = () => {
    if(form.id === ''){
        alert('아이디는 필수 입니다.');
        idRef.current.focus();
        return
    }else if(form.pw === ''){
        alert('비밀번호는 필수 입니다.');
        pwRef.current.focus();
        return
    }else{
        alert(`id: ${form.id} pw:${form.pw}`);
    }
  }


  /* const handleClick = () => {
        // console.log(inputRef.current);//태그
        // console.log(inputRef.current.value);//태그값

        if(form.result === null){
            alert('id를 입력하세요');
            inputRef.current.focus();//인풋태그에 포커스
            return
        }else if(inputRef2.current.value === null){
            alert('pw 입력하세요');
            inputRef.current.focus();//인풋태그에 포커스
            return
        }else{
            setForm({data:'', result: inputRef.current.value});
            setForm({data:'', result: inputRef2.current.value});
            
            alert('id : '+inputRef.current.value+ ' pw : '+inputRef2.current.value);

        }
  } */



    return (

        <div>
            <h3>실습</h3>
            로그인 클릭스 공백이면 공백인 태그에 포커스를 추가 <br />
            로그인 클릭시 공백이 아니면 경고창으로 입력된 id, pw를 출력
            첫번째 마운트 이후에는 id에 자동 포커싱 하기
            <input type="text" onChange={handleChange} name="id" /* ref={inputRef} */ ref={idRef} value={form.id}  placeholder="아이디"></input>
            <input type="password" onChange={handleChange} name="pw" /* ref={inputRef2} */ ref={pwRef} value={form.pw} placeholder="비밀번호"></input> <br />
            <button type="button" onClick={handleClick}>로그인</button>
        </div>


    )

}

export default HookQ;