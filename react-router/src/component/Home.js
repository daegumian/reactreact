import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <h3>메인 페이지</h3>
            {/* a는 Link로 바뀝니다 */}
            <ul>
                <li><Link to="/user">회원페이지</Link></li>
                <li><Link to="/user?id=aaa123&name=박동훈">회원페이지</Link></li>
                
                <li><Link to="/info/1/박동훈">인포페이지</Link></li>
                <li><Link to="/info/2/봉천동">인포페이지</Link></li>
                <li><Link to="/info/3/훈남">인포페이지</Link></li>
            </ul>
        </div>
    )
}
export default Home