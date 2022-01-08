import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

import Button from "./Button"

const Header = ({user}) => {
    const location = useLocation()

    return (
        <nav className="navbar">
            {user && 
                <div className="navbar-list">
                    <ul>
                        <li>
                            <a href="" className="active">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                    </ul>
                </div>
            }
            <div style={{
                float: "right"
            }}>
                <button className="btn">Sign In</button>
                <button className="btn">Register</button>
            </div>
        </nav>
    )
}


export default Header
