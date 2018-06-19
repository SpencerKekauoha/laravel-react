import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Blog extends Component {
    constructor() {
        super();

        this.state = {
            blogs: []
        }
    }

    componentDidMount() {
        axios.get('/api/blog').then(response => {
            this.setState({
                blogs: response.data
            });
        }).catch(errors => {
            console.log(errors);
        })
    }

    render() {
        return (
            <div className="container">
                {this.state.blogs.map((blog, key)=>
                    <li key={key}>
                        <Link to={"/blog/" + blog.id}>{blog.name}</Link>
                    </li>
                )}
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Blog />, document.getElementById('example'));
}
