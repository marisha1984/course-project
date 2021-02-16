import React from 'react'
import Loading from './Loading'
import { fetchMainPosts } from '../utils/api'
import PostsList from './PostsList'
import PropTypes from 'prop-types'

export default class Posts extends React.Component {
    state = {
        posts: null,
        error: null,
        loading: true
    }
    componentDidMount() {
        this.handleFetch()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.type !== this.props.type) {
          this.handleFetch()
        }
      }

    handleFetch() {
        this.setState({
            posts: null,
            error: null,
            loading: true
        })

        fetchMainPosts(this.props.type)
            .then((posts) => this.setState({
                posts,
                loading: false,
                error: null
            }))
            .catch(({ message }) => this.setState({
                error: message,
                loading: false
            }))
    }

    render() {
        const { posts, loading, error } = this.state
        if (loading === true) {
            return <Loading />
        }
        if (error) {
            return <p className='center-text error'>{error}</p>
          }
        return (
            <React.Fragment>
                <PostsList posts={posts}/>
            </React.Fragment>
        )
    }
}
Posts.propTypes = {
    type: PropTypes.oneOf(['top', 'new'])
  }