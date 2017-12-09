import React, {Component} from "react"


class Mesager extends Component {


    formatDate(t){

        const d = new Date(+t);
        return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`
    }

    render() {

        const {mes} = this.props;

        return (
            <div className={"mesager"}>
                <p>messager</p>

                <ul className={"listUsers"}>

                    {mes.map((m) => {
                        return (
                            <li key={m.timeStep}>
                                {m.user}: "{m.text}" <br/>
                                {this.formatDate(m.timeStep)}
                                <hr/>
                            </li>
                        )
                    })}

                </ul>

                <input type="text"/>

            </div>

        )
    }
}


export default Mesager
