import { Link } from "react-router-dom";

// eslint-disable-next-line jsdoc/require-returns
/**
 * NavBar component, represents a navigation bar with links to the patient and service sections of the application.
 */
function NavBar() {
    return (
        <nav className='columns is-vcentered is-color-primary mb-1' role='navigation' aria-label='main navigation'>
            <div className='column is-1 pt-3 pb-0 pl-5'>
                <Link className='navbar-item' to={"/"}>
                    <span className='icon-text has-text-white'>
                        <span className='icon'>
                            <i className='fas fa-xl fa-address-card'></i>
                        </span>
                        <span className='has-text-weight-semibold'>Patients</span>
                    </span>
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;
