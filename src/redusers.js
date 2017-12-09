import {combineReducers} from "redux"

const user = [
    {name: "Denis"},
    {name: "Olya"},
    {name: "Ralf"}
]

const mes = [
    {
        text: "hello Olya",
        user: "Denis",
        timeStep: "1512837936116"
    },
    {
        text: "hello Denis How are you?",
        user: "Olya",
        timeStep: "1512837978723"
    }
]

const userReduser = (store = user, action) => {
    const {type, payload} = action;


    switch (type) {
        case "ADD_NEW_USER" :
            return store.concat({name: payload});
    }
    return store
};

const messageReduser = (store = mes, action) => {
    return store
}


export default combineReducers({userReduser, messageReduser});