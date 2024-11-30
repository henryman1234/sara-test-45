import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = function () {
    return(
        <section>
            <div className="error-page">
                <div className="center">
                    <Link to="/" className="center-text">Retour à l'acueil</Link>
                    <h1 className="error-page-h1">Page non trouvée</h1>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage