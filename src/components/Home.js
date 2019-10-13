import React from 'react';
import axios from 'axios';
import { TodoContext } from '../contexts/TodoContext'
import { Link } from "react-router-dom";

export default class Home extends React.Component {
    static contextType = TodoContext;

    async componentDidMount() {
        const { fetchData } = this.context;
        await fetchData();
    }

    render() {
        const { todos } = this.context;

        return (
            <div class="grid-x grid-margin-x">
	        	{todos.map(todo => {
                    const deleteLink = "/delete/" + todo.id;
	        		return (
						<div class="cell medium-6 large-4">
						  	<div className={'callout ' + (todo.completed ? "success" : "secondary")} style={{ marginTop: "10px" }}>
								 <p>{todo.title}
								 </p>
								 <a href="" style={{ textTransform : "uppercase" }}><small>Edit</small></a>
								 <Link to={deleteLink} style={{ textTransform : "uppercase", marginLeft: "10px" }}><small>Delete</small></Link>
							</div>
						</div>
					)
	        	})}	
			</div>
        );
    }
}