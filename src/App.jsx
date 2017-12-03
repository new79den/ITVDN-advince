import React from "react"
import ReactDOM from 'react-dom'
import New from './new.component'
import './style.scss';

function App() {

    return(<div>
        <New/>
    </div> )
}

ReactDOM.render(<App/>, document.querySelector('#root'));