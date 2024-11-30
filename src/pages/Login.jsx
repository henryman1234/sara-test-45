
import React, { useState } from "react";
import {Link} from "react-router-dom"

const Login = function () {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const changeInputHandler = function(e) {
        setUserData(function(prevState){
            return {...prevState, [e.target.name]: e.target.value}
        })
    }

    return (
        <section className="login">
        <div className="container">
            <h2>Se Connecter</h2>
            <form className="form login_form">
                <p className="form_message-error">
                    Message à afficher en cas d'érreur
                </p>
                <input type="text" placeholder="Email" name="email" value={userData.email}  onChange={changeInputHandler} />
                <input type="password" placeholder="Mot de Passe" name="password" value={userData.password}  onChange={changeInputHandler} />
                <button type="submit" className="button-submit">S'enregistrer</button>
            </form>
            <small>Vous n'avez pas de compte? <Link to="/register">S'inscrire</Link></small>
        </div>
    </section>
    )
}

export default Login