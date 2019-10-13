import React, { createContext } from 'react';
import axios from 'axios'

export const TodoContext = createContext();

class TodoContextProvider extends React.Component {

    state = {
        todos: []
    }

    fetchData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        this.setState({
            todos: response.data
        });
    }

    addData = async (todo) => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', todo);
        const { todos } = this.state;
        todos.unshift(response.data);
        this.setState({
            todos: todos
        });
    }

    render() {
        return (
            <TodoContext.Provider value={{...this.state, fetchData: this.fetchData, addData: this.addData}}>
                {this.props.children}
            </TodoContext.Provider>
        );
    }
}

export default TodoContextProvider;