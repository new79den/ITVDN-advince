import React from "react"
import ReactDOM from 'react-dom'
import './assets/styles/style.scss';
import  Chat from "./components/Chat"


//------------------
import {Provider} from "react-redux"
import {createStore} from "redux"

const userState = ["user1", "user2", "user3"];

const reduser = (state = userState, action) =>{
    if(action.type === "ADD_NEW_USER"){
        return state.concat(action.username);
    }

    return state;
}

const store = createStore(reduser);
window.store = store;
//------------------

function App() {

    return(

        <Provider store={store}>
           <Chat/>
        </Provider>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));