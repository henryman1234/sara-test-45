import React, { useState } from "react";
import {Link} from "react-router-dom"

const Register = function () {

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
        <section className="register">
        <div className="container">
            <h2>S'inscrire sur Sara</h2>
            <form className="form register_form">
                <p className="form_message-error">
                    Message à afficher en cas d'érreur
                </p>
                <input type="text" placeholder="Nom Complet" name="name" value={userData.name}  onChange={changeInputHandler} autoFocus/>
                <input type="text" placeholder="Email" name="email" value={userData.email}  onChange={changeInputHandler} />
                <input type="password" placeholder="Mot de Passe" name="password" value={userData.password}  onChange={changeInputHandler} />
                <input type="password" placeholder="Confirmer le mot de passe" name="password2" value={userData.password2}  onChange={changeInputHandler} />
                <button type="submit" className="button-submit">S'enregistrer</button>
            </form>
            <small>Avez-vous déjà un compte? <Link to="/login">Se Connecter</Link></small>
        </div>
    </section>
    )
}

export default Register