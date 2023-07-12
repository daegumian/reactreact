import { Fragment } from "react"
import MyComponent from "./component/MyComponent"//임포트해서 사용한다.
import MyComponent2 from "./component/MyComponent2"
import MyComponent3 from "./component/MyComponent3"

function App(){

  return(

    <Fragment>
    <div>나의 새로운 컴포넌트</div>
    {/* 참조값들을 직접 넣을 수 있다. */}
    <MyComponent name={'박동훈'} age={33} addr={'봉천동'} email={'상위@gmail.com'}/> 
    <br/>
    {<MyComponent name={'박지욱'} age={33} addr={'보라매동'} />}
    <br/>
    {/* 클래스형 컴포넌트 */}
    <MyComponent2 name={'신사임당'} age={40}/>
    <br/>실습
    {/* 
      함수형 컴포넌트 MyComponent3을 생성한다
      props는 title, content, writer를 전달한다.
      writer는 기본값은 'admin'으로 선언해주세요
    */}
    <MyComponent3 title={'귀공자'} content={'액션'} writer={'admin'}/>

    </Fragment>
  )
  
}
export default App