import React from 'react';
import axios from 'axios';

export default class Delete extends React.Component {
    state = {
        todoName: ""
    }

    async componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/todos/" + this.props.match.params.id;
        const response = await axios.get(url);
        this.setState({
            todoName: response.data.title
        })
    }

    render() {
        return (
            <div class="callout alert" style={{ marginTop: "10px" }}>
			  <p>Do you really want to delete <strong>{this.state.todoName}</strong>?</p>
			</div>
        );
    }
}