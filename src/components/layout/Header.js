import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className='nav-link'>
                                Home
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
