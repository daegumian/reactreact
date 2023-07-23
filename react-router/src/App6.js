import A from "./component3/A";
import B from "./component3/B";
import { UserPorovider } from "./context/ContextAPI2";


function App () {


    return(
        <UserPorovider>
            <A/>
            <B/>
        </UserPorovider>
        

    )
}
export default App