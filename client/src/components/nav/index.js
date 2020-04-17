import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import { useAuth0 } from "../../react-auth0-spa";
import M from "materialize-css/dist/js/materialize.min.js";

function Navbar(props) {
    const history = useHistory();
    const { isAuthenticated, loginWithPopup, logout, user } = useAuth0();

    useEffect(() => {
        let sidenav = document.querySelector("#mobile-demo");
        M.Sidenav.init(sidenav, {});
    });

    const onclick = () => {
        loginWithPopup({});
        history.push("/");
    };

    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a
                        href="/"
                        className="brand-logo center hide-on-med-and-down"
                    >
                        <i className="fas fa-leaf"></i>
                        How's It Growing?
                    </a>
                    <a
                        href="#"
                        data-target="mobile-demo"
                        className="sidenav-trigger"
                    >
                        <i className="material-icons">menu</i>
                    </a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li>
                            {!isAuthenticated && (
                                <a
                                    className="btn waves-effect waves-light"
                                    id="qsLoginBtn"
                                    onClick={onclick()}
                                >
                                    Login/Signup
                                </a>
                            )}

                            {isAuthenticated && (
                                <a
                                    className="btn waves-effect waves-light"
                                    id="qsLoginBtn"
                                    onClick={() => logout()}
                                >
                                    Logout
                                </a>
                            )}
                        </li>
                        <li>
                            {user && (
                                <a onClick={props.userPage}>
                                    {user.name}'s Collection
                                </a>
                            )}
                        </li>
                        <li>
                            {user && (
                                <a
                                    href="https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants"
                                    target="_blank"
                                >
                                    Plant Toxicity Information
                                </a>
                            )}
                        </li>
                    </ul>
                    <form onSubmit={props.handleFormSubmit}>
                        <a href="/">
                            <i className="fas fa-leaf" id="hidden"></i>
                        </a>
                        <div className="input-field right search-bar">
                            <input
                                id="search"
                                type="search"
                                onChange={props.handleInputChange}
                                value={props.search}
                                name="search"
                                required
                            />
                            <label className="label-icon">
                                <i className="material-icons">search</i>
                            </label>
                            <i className="material-icons" id="close-icon">
                                close
                            </i>
                        </div>
                    </form>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li>
                    {!isAuthenticated && (
                        <a id="qsLoginBtn" onClick={() => loginWithPopup({})}>
                            Login/Signup
                        </a>
                    )}

                    {isAuthenticated && (
                        <a id="qsLoginBtn" onClick={() => logout()}>
                            Logout
                        </a>
                    )}
                </li>
                <li>
                    {user && (
                        <a onClick={props.userPage}>{user.name}'s Collection</a>
                    )}
                </li>
                <li>
                    {user && (
                        <a
                            href="https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants"
                            target="_blank"
                        >
                            Plant Toxicity Information
                        </a>
                    )}
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
