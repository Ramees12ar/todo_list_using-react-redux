import{ADD_TODO,DELETE_TODO } from './Actions';
export let reducer = (state = [] ,action) =>{
    let newTodos ;
    switch(action.type){
        case ADD_TODO:
            newTodos =[...state];
            newTodos.push(action.payload);
            return newTodos;
           
        case DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter((todo,index) =>index!== action.payload)
            return newTodos;
        default:
            return state;       
    }
 }
 export default reducer;
 // case UPDATE_TODO:
        //     newTodos =[... state];
        //     let index=-1;
        //     for(let i=0;i<newTodos.length;i++){
        //         index++;
        //         if(newTodos[i].id == action.payload.id){
        //             break;
        //         }
                

        //     }

        //   if(index != -1){
        //       newTodos[index] = action.payload;
        //      // console.log(newTodos);
           

        //     return newTodos;
        //   }