import React,{ Component } from "react"
import TodoList from "./todolist"
import AddTodo from './addtodo';



class MainComponent extends Component{

    constructor (){
        super()
        this.state
    }


    render(){
        return(
            <div>
                 {/* <div>
                  <input  type="text"/>
                   <button >Save</button>
                   <button >Censle</button>
                </div>     */}
                <AddTodo />    
                 <br />            
                <TodoList />
            </div>    
        )
    } 
}
 
export default MainComponent