import { Component } from "react";
import ToDoApp from "./ToDoApp";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <>
      <ToDoApp />
      </>
    );
  }
}
