import { increment,deccrement,incrementByAmount } from "../stores/counter"
import {useDispatch} from "react-redux"

function Buttons({count,setCount}){
    const dispatch=useDispatch()
    return(
        <div>
<button onClick={()=>{dispatch(increment())}}>+</button>
<button onClick={()=>{dispatch(deccrement())}}>-</button>
<button onClick={()=>{dispatch(incrementByAmount(4))}}>add 4</button>
        </div>
    )
}
export default Buttons