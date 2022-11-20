function Buttons({count,setCount}){
    return(
        <div>
<button onClick={()=>{setCount(count+1)}}>+</button>
<button onClick={()=>{setCount(count-1)}}>-</button>
        </div>
    )
}
export default Buttons