import { createContext, useState } from "react";

//1.
const UserContext = createContext({
    state : {},
    action : {
        setUser: () => {}
    }
});

//2.Provider함수 선언

const UserPorovider = ({Children})=>{
   const [user, setUser] = useState({id : 'aaa', name:'홍길동'});

   const value = {
    state : user,
    action : {setUser} //향상된 리터럴로 실행됨. {'setUser' : setUser} 이것과 같음
   }
   return <UserContext.Provider value={value}> {Children} </UserContext.Provider>
}

// 3. Consumer함수 반환
const UserConsumer = UserContext.Consumer;

export {UserPorovider, UserConsumer};

export default UserContext;

