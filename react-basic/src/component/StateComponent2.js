import React from "react";

//클래스형에서 props와 state
class StateComponent2 extends React.Component{
  //클래스형 컴포넌트가 생성될 떄 성성자로 프롭스 전달
  constructor(props){
    super(props);
    //state새성
    this.state = {
      name: '박길동!?',
      age : this.props.age
    }
  }
  //클래스 안에서는 키워드를 적지 않는다.
  handleState = () => {
    //비동기적 state 변경
    this.setState({name:'NO! 박동훈',age : 33})
  }
  render(){
    // const {age} = this.props;
    return(
      <div>
      <div>클래스형 컴포넌트</div>
      스테이트값 : {this.state.name} <br />
      스테이트값 : {this.state.age} <br />
      <button onClick={this.handleState}>스테이트 체인지</button>
      </div>
    )
  }
}
export default StateComponent2;