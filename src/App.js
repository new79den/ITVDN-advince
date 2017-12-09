import React from "react"
import ReactDOM from 'react-dom'
import './assets/styles/style.scss';
import {Provider} from "react-redux"
import {createStore} from "redux"
import reduser from "./redusers"
import Chat from "./components/chat"


//------------------
const store = createStore(reduser);
window.store = store;
//------------------

function App() {

    return (

        <Provider store={store}>
            <Chat/>
        </Provider>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));