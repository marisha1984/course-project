import React from 'react'
import queryString from 'query-string'
import { fetchUser, fetchPosts } from '../utils/api'
import Loading from './Loading'
import { formatDate } from '../utils/helpers.js'
import PostsList from './PostsList'



export default class User extends React.Component {
    state = {
        user: null,
        loadingUser: true,
        posts: null,
        loadingPosts: true,
        error: null
    }
    componentDidMount() {
        const { id } = queryString.parse(this.props.location.search)

        fetchUser(id)
            .then((user) => {
                this.setState({ user, loadingUser: false })

                return fetchPosts(user.submitted.slice(0, 30))
                    .then((posts) => this.setState({
                        posts,
                        loadingPosts: false,
                    }))
            }).catch((error) => this.setState({
                error,
                loadingUser: false,
                loadingPosts: false
            }))
    }

    render() {
        const { user, loadingUser, posts, loadingPosts, error } = this.state
        if (error) {
            return <p className='center-text error'>{error}</p>
        }
        return (
            <React.Fragment>
                {loadingUser === true
                    ? <Loading text='Fetching user' />
                    : <React.Fragment>
                        <h1 className='header'>{user.id}</h1>
                        <div className='meta-info-light'>
                            <span>joined <b>{formatDate(user.created)}</b></span>
                            <span>has <b>{user.karma}</b> karma</span>
                        </div>
                    </React.Fragment>}
                {loadingPosts === true
                    ? loadingUser === false && <Loading text='Fetching posts' />
                    : <React.Fragment>
                        <h2>Posts</h2>
                        <PostsList posts={posts} />
                    </React.Fragment>}
            </React.Fragment>
        )
    }
}