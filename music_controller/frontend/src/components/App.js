import React, {Component} from "react";
import {render} from "react-dom";
import Homepage from "./HomePage";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import {Home} from "@material-ui/icons";


export default class App extends  Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <HomePage />;
    }
}

const appDiv = document.getElementById("app");
render(<App/>,appDiv);