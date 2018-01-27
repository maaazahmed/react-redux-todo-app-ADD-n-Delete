import React,{ Component } from "react"
import { connect } from "react-redux";
import {addingTodoAction} from "../store/action/action" 
import {renderingTodoAction} from  "../store/action/action"
import firebase from 'firebase'
import TodoList from "./todolist" 


class AddTodo extends Component {

    constructor(props){
        super(props)
        this.state = {
            todo: ""
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

    changeHandler(ev){
        this.setState({
            todo: ev.target.value
        })
    }

    render(){
        return(
            <div>
              <input  type="text" value={this.state.todo} onChange={this.changeHandler.bind(this)}/>
              <button onClick={this.addTodo.bind(this)}>Add Todo</button>
              <TodoList />
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