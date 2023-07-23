import { useParams } from "react-router-dom"
//예시 데이터
const data = {
    1: {b: '박동훈'},
    2: {b: '봉천동'},
    3: {b: '훈남..크'}

}

function Info() {
    //쿼리파라미터 값
    const obj = useParams();
    console.log(obj);
    console.log(obj.a);
    
    //ex) obj값을 이용해서 서버에서는 데이터를 가져오고 state로 관리
    return(
        <div>
             <h3>인포 페이지</h3>
            {obj.a}에 해당하는 값{data[obj.a].b}
        </div>
    )
}
export default Info