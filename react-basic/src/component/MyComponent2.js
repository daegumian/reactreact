import React from 'react';

//클래스형 컴포넌트
class MyComponent2 extends React.Component{

  render(){
    //클래스형 컴포넌트는 멤버변수 props로 자동전달된다.
    const {name, age} = this.props;
    return(

      <div>
        나의 클래스형 컴포넌트 쿡쿡쿡<br/>
        클래스형프롭스: {name}<br/>
        클래스형프롭스: {age}<br/>
        </div>
    )
  }

}
export default MyComponent2