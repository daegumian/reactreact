import { useState } from "react";

function IterationComponent3 () {
  //1.
  const [list, setList] = useState([{id:1, topic: 'hello'},
                                    {id:2, topic: 'bye'} 
                                    //추가..
                                  ]);

  //2. input데이터 state
  const [inputData, setInputData] = useState('');
  // const newList = list.map( item => <li key={item.id } onDoubleClick={{handleRemove}} >{item.topic}</li>)                              
  //3. input데이터 핸들링
  const handleInput = (e) => { setInputData(e.target.value)};
  //4.클릭이벤트 생성
  const handleClick = () => { 
    console.log(list[list.length - 1].id + 1);
    const obj = [{ id:list[list.length - 1].id + 1 , topic: inputData}]

    //기존 배열에 합침
    // const newData = list.concat(obj);
    const newData = [...list, ...obj];
    setList(newData);
    setInputData('');//공백으로 초기화
  }
  //5. 삭제이벤트 - 삭제는 id가 필요함
  const handleRemove = (id) => {
    // console.log(id);

    //return에 true가 걸린 요소만 새로운 배열을 만듬
    const result = list.filter( x => x.id !== id);
    setList(result);

    /* const result = list.filter((item) => { //위의 것과 같다.
      return item.id !== id;
    })
    setList(result); */

  }

  //더블클릭이벤트가 바로 들어감. //한줄짜리 코드라 중괄호 생략가능. handleRemove함수 바로 호출함. (item.id)를 바로 매개변수주기위해
  const newList = list.map( item => <li key={item.id } onDoubleClick={() => handleRemove(item.id) } >{item.topic}</li>); 
   


  return(

    <div>
      <h3>할일 목록 만들기</h3>
      <input type="text" onChange={handleInput} value={inputData}/>
      <button type="button" onClick={handleClick}>추가하기</button>
      <ul>
        {newList}
      </ul>

    </div>



  )
}

export default IterationComponent3;