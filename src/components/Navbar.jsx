import '../styles/componentStyles/NavbarStyles.css';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='navbar'>
            <Link className='navbar-link' to='/'>
                <h1>Math Breeze</h1>
            </Link>
        </div>
    );
}
