import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SideBar extends Component {
    render() {
        return (
            <>
                <nav>
                    <ul>
                        <li>
                            <Link to="/sign-in">Sign In</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default SideBar;