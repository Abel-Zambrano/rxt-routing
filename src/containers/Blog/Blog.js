import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import { Route, NavLink } from 'react-router-dom';

class Blog extends Component {
    render () {
        return (
            <div>
                <header className='Blog'>
                    <nav>
                        <ul>
                            <li><NavLink to='/' exact>Home</NavLink></li>
                            <li><NavLink to="/new-post" exact>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <div>Home</div> } /> */}
                <Route path='/' exact component={Posts} />
                <Route path='/new-post' exact component={NewPost} />
            </div>
        );
    }
}

export default Blog;