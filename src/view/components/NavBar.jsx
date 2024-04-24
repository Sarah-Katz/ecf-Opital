function NavBar() {
    return (
        <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div id='navbarBasicExample' className='navbar-menu'>
                <div className='navbar-start'>
                    <a className='navbar-item'>
                        <span className='icon-text'>
                            <span className='icon'>
                                <i className='fas fa-address-card'></i>
                            </span>
                            <span>Patients</span>
                        </span>
                    </a>

                    <a className='navbar-item'>
                        <span className='icon-text'>
                            <span className='icon is-large'>
                                <i className='fas fa-square-h'></i>
                            </span>
                            <span>Services</span>
                        </span>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
