import React, {Component} from "react"
import {connect} from "react-redux"

class Chat extends Component {

    render() {

        return (
            <div>
                <h1>Chat</h1>
                <button onClick={() => this.props.dispatch({type: "ADD_NEW_USER"})}>add new user</button>
                <hr/>
                {this.props.users.map( u =>{
                    return (
                        <p key={u}>{u}</p>
                        )
                })}
            </div>
        )
    }

}

export default connect(state => {
    return {
        users: state
    }
})(Chat)