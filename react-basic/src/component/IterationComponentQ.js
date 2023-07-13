import { useState } from "react";

function IterationComponentQ() {

  const arr = [
    {src : '/img/img1.png', title : '아이폰10', price: 1000},
    {src : '/img/img2.png', title : '아이폰11', price: 2000},
    {src : '/img/img3.png', title : '아이폰12', price: 3000},
    {src : '/img/img4.png', title : '아이폰13', price: 4000},
  ]
  //arr을 state로 관리
  const [list, setList] = useState(arr);

  const [img, setImg] = useState('/img/img1.png');
  const handleClick = (e) => {
      // const result = map((item, index) => e.target.)
      console.log(e.target);
      setImg(e.target.src)
  }

  const newList = list.map((item, index) =>
    <div key={index} >
      <img src={item.src} alt="x" onClick={ handleClick }/>
      <p>
        상품:{item.title}
      </p>
      <p>
        가격:{item.price}원
      </p>

    </div>
  
  ) 


  // const result2 = list.map((item) => <option key={item.id} > {item.title} </option>)
  // const result = arr.map((item,index) => <img src={item.src} key={index} > {item.title} <br /> {item.price}</img>)
  // console.log(result);

  return (


    <div>
      <h3>이미지 데이터 반복해보기</h3>
      <img src={img} alt="x"/>
      {newList}
    </div>

  )


}

export default IterationComponentQ;