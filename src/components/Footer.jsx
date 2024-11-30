import React from "react";
import {Link} from "react-router-dom"

const Footer = function () {
    return (
        <div>
            <footer>
                <ul className="footer_categories">
                    <li><Link to="/posts/categories/:category">Génie civil</Link></li>
                    <li><Link to="/posts/categories/:category">Urbanisme</Link></li>
                    <li><Link to="/posts/categories/:category">Topographie</Link></li>
                    <li><Link to="/posts/categories/:category">Architecture</Link></li>
                    <li><Link to="/posts/categories/:category">Transport</Link></li>
                    <li><Link to="/posts/categories/:category">Environnement</Link></li>
                    <li><Link to="/posts/categories/:category">Divers</Link></li>
                    <li><Link to="/posts/categories/:category">Meng 5 GC</Link></li>
                </ul>

                <div className="footer_copyright">
                    <small>Tous droits reservés &copy; Sara, crée et developpé par Henry Euloge</small>
                </div>
            </footer>
        </div>
    )
}

export default Footer