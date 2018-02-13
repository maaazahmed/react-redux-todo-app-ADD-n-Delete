import React,{ Component } from "react"
import { connect } from "react-redux";
import {addingTodoAction} from "../store/action/action" 
import {renderingTodoAction} from  "../store/action/action"
import firebase, { database } from 'firebase'
import TodoList from "./todolist" 


class AddTodo extends Component {

    constructor(props){
        super(props)
        this.state = {
            todo: "",
            flage:true
        }
    }

    componentWillMount(){
       firebase.database().ref("/").child("todos").on('child_added',(snap)=>{
           let obj = snap.val()
           obj.id = snap.key
        //    console.log(this.props.todos)
              let todoObj = this.props.todos 
              todoObj = todoObj.concat(obj)
              this.props.rendering(todoObj)
})
    }


    changeHandler(ev){
        this.setState({
            todo: ev.target.value
        })
    }


    addTodo(){
        // alert()
        let todo = {todo:this.state.todo}
        // console.log(todo)
        this.props.addingTodo(todo)
        // this.props.rendering()
        this.setState({
            todo:""
        })
    }


    deletAllTodos(){
        firebase.database().ref("/").child(`todos`).remove()
        let allTodos = this.props.todos; 
        let  someTodos = allTodos.slice(allTodos.length);
        this.props.rendering(someTodos)
    }

  

    render(){
        return(
            <div>
               {/* {(this.state.flage === true)?  */}
                <div>
                   <input  type="text" value={this.state.todo} onChange={this.changeHandler.bind(this)}/>
                   <button onClick={this.addTodo.bind(this)}>Add Todo</button>
                   <button onClick={this.deletAllTodos.bind(this)}>Delete All</button>
                </div>
                 {/* : */}
                {/* <div>
                  <input  type="text" value={this.state.todo} onChange={this.changeHandler.bind(this)}/>
                   <button onClick={this.addTodo.bind(this)}>Edit Todo</button>
                   <button onClick={this.deletAllTodos.bind(this)}>Censel</button>
                </div>     */}
                 {/* }  */}
            </div>
        )
    }
}

const mapStateToProp = (state) => {
//    console.log(state.root)
    return({
       todos:state.root.todos
    })
}

const mapDispatchToProp = (dispatch) => {
    return({
        addingTodo:(sendDataToActionFromFirebase)=>{dispatch(addingTodoAction(sendDataToActionFromFirebase))},
        rendering:(sendDataToActionFromList)=>{dispatch(renderingTodoAction(sendDataToActionFromList))}
    })
}




export default connect(mapStateToProp,mapDispatchToProp)(AddTodo)