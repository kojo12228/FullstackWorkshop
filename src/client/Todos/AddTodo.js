import React, { useState, Component } from "react";
import Todo from "../Todo/Todo";

export class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = { value: ""}

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <label>
                  <input value={this.state.value} onChange={this.handleChange}></input>
                </label>
                <input type="submit" value="Add" onClick={() => this.props.onSubmit(this.state.value)} />
            </div>
        )
    }

}

export default AddTodo;