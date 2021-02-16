import React from 'react'
import PropTypes from 'prop-types'
import { formatDate } from '../utils/helpers.js'
import { Link } from 'react-router-dom'
import { ThemeConsumer } from '../contexts/theme'

export default function PostMetaInfo({ by, time, id, descendants }) {
    return (
        <ThemeConsumer>
            {({ theme }) => (
                <div className={`meta-info-${theme}`}>
                    <span>by <Link to={`/user?id=${by}`}>{by}</Link></span>
                    <span>on {formatDate(time)}</span>
                    {typeof descendants === 'number' && (
                        <span>with <Link to={`/post?id=${id}`}>{descendants}</Link> comment{descendants !== 1 && 's'}</span>
                    )}
                </div>
            )}
        </ThemeConsumer>
    )
}

PostMetaInfo.propTypes = {
    by: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    descendants: PropTypes.number,
  }
