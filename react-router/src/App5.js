import ColorComponent from "./component3/ColorComponent";
import ColorContext from "./context/ContextAPI";

function App(){
    return(
        <div>
            {/* provider 하위컴포넌트에 전달할 props 값을 제공하는 역할 
                - value속성에는 consumer에서 제어할 값이 들어간다. 강제로 값을 바꿔서 consumer한테 전달함 */}
            <ColorContext.Provider value={{color:'green'}}>
            <ColorComponent/>
            </ColorContext.Provider>
        </div>
    )
}
export default App;