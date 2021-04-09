import   React from 'react';
import './todo.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/Actions';
// import {  useSelector} from "react-redux";
function TodoList() {
   let todoLists= useSelector(state=>state)
    let dispatch=useDispatch();
    return(
        <div style={{width:"40%",margin:"auto"}}>
            <ul className="list-group">
            {todoLists.map((todo,index)=>{
                return(
                    <li className="list-group-item">
                        <label className="h4">{todo}</label> 
                        <button className="btn btn-danger" style={{float:"right"}}
                            onClick={()=>{dispatch(deleteTodo(index))}}>Delete
                        </button>
                    </li>
                )
                }
                )}
            </ul>
        </div>
    )
}
export default TodoList;