import React from 'react';
import axios from 'axios';
import { TodoContext } from '../contexts/TodoContext'


export default class Add extends React.Component {
    static contextType = TodoContext;

    state = {
        completed: false,
        title: ""
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onRadioClick = (e) => {
        this.setState({
            [e.target.name]: e.target.checked
        })
    }

    onSubmit = async (e) => {
        const { addData } = this.context;

        e.preventDefault();

        const newTodo = {
            title: this.state.title,
            completed: this.state.completed
        }

        await addData(newTodo);

        this.props.history.push('/');
    }

    render() {
        return (
            <div style={{maxWidth: "900px", margin: "20px auto", padding: "0 15px"}}>
	            <h4 className="lex"><strong>Add Todo</strong></h4>
	            <hr/>
	            <form action="" onSubmit={this.onSubmit.bind(this)}>
	            <div className="w3-section">
		            <label>Title</label>
		            <input type="text" name="title" onChange={this.onChangeHandler} required="required" className="radius" />
				</div>
				 <input id="checkbox22" onChange={this.onRadioClick} name="completed" type="checkbox" /><label for="checkbox22">Completed</label>
				 <br/>
				 <br/>
				 <button data-open="modal-sorry" id="myAnchor" type="submit" className="button radius">Add Todo</button>
				</form>
            </div>
        );
    }
}