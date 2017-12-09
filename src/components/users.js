import React, {Component} from "react"
import faker from "faker"

class Users extends Component {


    addNewUser() {
        const user = faker.internet.userName();
        this.props.addNewUser(user);
    }

    render() {

        return (
            <div className={"users"}>
                <h3>Online Users</h3>
                <ul>
                    {this.props.users.map(u=>{
                        return <li key={u.name}>{u.name}</li>
                    })}
                </ul>

                <button onClick={this.addNewUser.bind(this, null)}>Add new User</button>
            </div>
        )
    }
}

export default Users