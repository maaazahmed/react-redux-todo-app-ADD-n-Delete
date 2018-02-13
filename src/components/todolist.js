import React, { Component } from 'react';
import { renderingTodoAction } from '../store/action/action';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { deleteingTodoAction } from "../store/action/action"


class TodoList extends Component {
    deleteTodo(ky , ind){
        firebase.database().ref("/").child(`todos/${ky}`).remove()
          let todos = this.props.todos;
          let deletedData = todos.slice(0,ind).concat(todos.slice(ind+1)) ; // console.log(deletedData)
        this.props.rendering(deletedData)
    }



    editeTodo(){
            
    }


    render(){
        return(   
            <div>
                 <div>
                   <ul >
                     {/* {console.log(this.props)} */}
                     {this.props.todos.map((val, ind)=>{
                        //  console.log(val.todo)
                        return (
                            <li key={ind}>
                                {val.todo}
                                <button onClick={this.deleteTodo.bind(this ,val.id, ind)} >delete</button>
                                <button onClick={this.editeTodo.bind(this ,val.id, ind)} >Edit</button>
                               
                            </li>
                        )
                     })}
                     
                   </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProp = (state) => {
    //    console.log(state.root)
        return({
           todos:state.root.todos,
        })
    }
   

    const mapDispatchToProp = (dispatch) => {
        return({
            rendering:(sendDataToActionFromList)=>{
                dispatch(renderingTodoAction(sendDataToActionFromList))
            }
        })
    }


export default connect(mapStateToProp, mapDispatchToProp)(TodoList);