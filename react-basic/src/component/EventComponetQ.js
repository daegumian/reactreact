import { useState } from "react"

function EventComponentQ() {

  const [select, setSelect ] = useState('메뉴를 선택하세요');

  const handleSelect = (e) => {
    setSelect(e.target.value);
  }

  return(
    
    <div>
    <hr />
      <h2>셀렉트 태그 핸들링(실습)</h2>
      <p>셀렉트 태그가 체인지 될 때 선택한 결과를 아래에 출력</p>

      <select name="select" onChange={handleSelect} >
        <option value="햄버거" >햄버거</option>
        <option value="피자">피자</option>
        <option value="치킨">치킨</option>
      </select>

      <h2>선택한 결과</h2>
      {select}

    </div>


  )

}

export default EventComponentQ