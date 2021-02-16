import React from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeConsumer } from '../contexts/theme'


const activeStyle = {
    color: 'rgb(187, 46, 31'
}

export default function Nav() {
    return (
        <ThemeConsumer>
            {({ theme, toggleTheme }) => (
                <nav className="row space-between">
                    <ul className="row nav">
                        <li>
                            <NavLink to='/' exact className="nav-link" activeStyle={activeStyle}>
                                Top
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/new' className="nav-link" activeStyle={activeStyle}>
                                New
                            </NavLink>
                        </li>
                    </ul>
                    <button
                        style={{ fontSize: 30 }}
                        onClick={toggleTheme}
                        className="btn-clear"
                    >
                        {theme === 'light' ? '🔦' : '💡'}
                    </button>
                </nav>
            )}
        </ThemeConsumer>
    )
}