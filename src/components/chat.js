import React, {Component} from "react"
import Users from "./users"
import Mesager from "./mesager"
import {connect} from "react-redux"

class Chat extends Component {

    render() {
        return (
            <div className={"wrap clearfix"}>
                <Mesager mes ={this.props.message}/>
                <Users users={this.props.users} addNewUser = {this.props.addNewUser}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {

    return {
        users: state.userReduser,
        message: state.messageReduser
    }
};

const mapDispatchToProps = (dispatch) => {
        return{
           addNewUser: (user)=>dispatch({
               type: "ADD_NEW_USER",
               payload: user
           })
        }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
