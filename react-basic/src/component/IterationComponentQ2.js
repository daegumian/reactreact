import { useState } from "react";


const IterationComponentQ2 = () => {
    //1 - select는 컴포넌트반복으로 option태그를 생성합니다.
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];

    const newSelect = select.map((item, index) => <option key={index}>{item}</option>)

    //2 - 아래 데이터는 state로 관리하고 화면에 li태그로 반복해주세요 .
    const data = [
        { id: 1, type: 'Java', teacher: '이순신' },
        { id: 2, type: 'Java', teacher: '홍길자' },
        { id: 3, type: 'Javascript', teacher: '홍길동' },
        { id: 4, type: 'Oracle', teacher: '이순신' },
        { id: 5, type: 'Mysql', teacher: '이순신' },
        { id: 6, type: 'CSS', teacher: '박찬호' },
        { id: 7, type: 'HTML', teacher: 'coding404' },
    ];
    const [list, setList] = useState(data);//목록 값
    const [search, setSearch] = useState('');//input태그 값


    const newList = list.map(item => <li key={item.id}>{item.type}-{item.teacher}</li>)

    //3 - 셀렉트박스가 체인지되면 이벤트객체를 활용해서 선택된 값만 필터링해주세요.

    const handleChange = (e) => {

        const newList = data.filter(item => item.type === e.target.value)
        setList(newList)
    }


    //4 - 검색기능 (input태그의 값이 변경되면 핸들링)
    const handleClick = () => {
        let newList = data.filter(item => item.type.toLocaleLowerCase().includes(search) ||
            item.teacher.includes(search))

        setList(newList);
    }

    return (
        <div>
            <hr />
            <h3>실습</h3>
            Search: <input type="text" onChange={e => setSearch(e.target.value)} value={search} />
            <button onClick={handleClick} >검색</button>

            <br />


            과목찾기:
            <select onChange={handleChange} >
                {newSelect}
            </select>
            <ul>
                {newList}
            </ul>
        </div>
    )
}

export default IterationComponentQ2;