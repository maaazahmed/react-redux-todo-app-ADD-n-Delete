import ActionTypes from '../constant/constant';
import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD51lsS3qzcfWGYfu-PZ2Z8Zk-CxgOo5OI",
    authDomain: "react-todo-app-2bc91.firebaseapp.com",
    databaseURL: "https://react-todo-app-2bc91.firebaseio.com",
    projectId: "react-todo-app-2bc91",
    storageBucket: "react-todo-app-2bc91.appspot.com",
    messagingSenderId: "53429628893"
  };
  firebase.initializeApp(config);
var database = firebase.database().ref("/");


export const addingTodoAction = (todo) => {
    return dispatch => {
        database.child("todos").push(todo)
    }
}

export const renderingTodoAction = (todo) => {
    return (dispatch) => {
        // console.log(todo)
        dispatch({
            type: ActionTypes.GETTINGTODO,
            payload:todo
        })
    }
}

export const deleteingTodoAction = (deleteTodo) => {
    return (dispatch) => {
        // console.log(deleteTodo)
        dispatch({
            type: ActionTypes.DELETEINGTODO,
            payload:deleteTodo.ind
        })
    }
}