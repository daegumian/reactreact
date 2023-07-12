import { Fragment } from "react"
import propTypes from "prop-types";//prop쓰르면 임포트 해야함

function MyComponent3 ({title,content,writer}) {

  return(
    <Fragment>
    <div>
      props: {title} 졸잼<br/>
      props: {content} 개간지<br/>
      props: {writer} 몰겠음..<br/>
    </div>
    </Fragment>
  )
}
MyComponent3.defaultProps = {
  writer:'한국의 은둔 감독'
}
MyComponent3.propTypes = {
  title:propTypes.string,
  content:propTypes.string,
  writer:propTypes.string.isRequired
}

export default MyComponent3