import { Link } from "react-router-dom";

function NavBar({ callback, search }) {
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
            <div className='column is-1 pt-3 pb-0'>
                <Link className='navbar-item' to={"services"}>
                    <span className='icon-text has-text-white'>
                        <span className='icon'>
                            <i className='fas fa-xl fa-square-h'></i>
                        </span>
                        <span className='has-text-weight-semibold'>Services</span>
                    </span>
                </Link>
            </div>

            <div className='field column is-6 is-offset-1'>
                <p className='control has-icons-right pt-2'>
                    <input
                        className='input'
                        type='text'
                        placeholder='Entrez un nom de famille ou un numéro de sécurité social'
                        onChange={callback}
                        value={search}
                    />
                    <span className='icon is-small is-right'>
                        <i className='fas fa-xl fa-magnifying-glass has-text-primary mt-3'></i>
                    </span>
                </p>
            </div>
        </nav>
    );
}

export default NavBar;
