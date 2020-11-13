import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import FullPost from './FullPost/FullPost'; 

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
                <Switch>
                    <Route path='/' exact component={Posts} />
                    <Route path='/new-post' exact component={NewPost} />
                    <Route path='/:id' exact component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;