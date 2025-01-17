import {Actions} from "./App"

export default function OperationButton ({dispatch, operation}) {
 return (
    <button 
     onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload:{digit}})}
     >
        {operation}
     </button>
 )
}