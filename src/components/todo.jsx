import React, { useState } from 'react';
import './todo.css';
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/Actions';
function Todo() {
    let [data,setData]= useState();
    let dispatch= useDispatch();
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Todo List</h1><br/>
            <div style={{marginLeft:"40%"}}>
                <input className="form-control" value={data} id="data" type="text" placeholder="enter the data" 
                    onChange={(e)=>{setData(e.target.value)}} style={{width:"40%"}}/>
                <button className="btn btn-success" style={{marginLeft:"18%",marginTop:"3px"}}
                    onClick={()=>{
                        dispatch(addTodo(data));
                        setData('');}}>Add
                </button>
            </div><br/>
        </div>
    );
}
export default Todo;
