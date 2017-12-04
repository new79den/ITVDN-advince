import React, {Component} from "react"
import {connect} from "react-redux"
import faker from "faker";

class Chat extends Component {
    
    render() {

        const rndUserName = faker.internet.userName();

        return (
            <div>
                <h1>Chat</h1>
                <button onClick={() => this.props.addNewUser(rndUserName)}>add new user</button>
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

const mapToProps = (state) =>{
  return {
      users: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      addNewUser: (username) => dispatch({type: "ADD_NEW_USER", username})
  }
};

export default connect(mapToProps, mapDispatchToProps)(Chat)