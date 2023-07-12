import propTypes from "prop-types";

/* function MyComponent(x) { *///이것도 가능
function MyComponent({name,age,addr,email}) { //하지만 이게 더 편리,{}는 구조분해할당
  //하위 컴포넌트의 첫째 매개변수에는 props가 전달된다.
  // const {name, age, addr} = x; //구조분해할당이 된다.
  return(
    <div>
      함수형 컴포넌트<br/>
      props: {name}<br/>
      props: {age}<br/>
      props: {addr}<br/>
      props이메일: {email}<br/>
    </div>
    )
}
//props값이 넘어오지 않을 때 기본값의 선언
//컴포넌트명.defaultProps = {}
MyComponent.defaultProps = {
  email : 'parkdong@gmail.com',
  age : 0
  // addr : '평양'
}

//props값의 타입검증 (정적타입 지정)
//컴포넌트명.propTypes = {}
MyComponent.propTypes = {

  name: propTypes.string,
  age : propTypes.number,
  addr : propTypes.string.isRequired//필수값(상위컴포넌트에서 반드시 전달)

}
export default MyComponent