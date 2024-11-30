import React, { useState } from "react";
import Avatar from "../images/avatar7.jpg"
import { Link } from "react-router-dom";
import { FaCheck, FaEdit, FaPassport } from "react-icons/fa";

const UserProfile = function () {

    const [avatar, setAvatar] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewpassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")

    return (
        <section className="profile">
            <div className="container profile_container">
                <Link to={`/myposts/sdfsdf`} className="btn-profile">Mes postes</Link>

                <div className="profile_details">
                    <div className="avatar_wrapper">
                        <div className="profile_avatar">
                            <img src={Avatar} alt="" />
                        </div>
                        <form className="avatar_form">
                            <input type="file" name="avatar" onChange={function(e){
                                setAvatar(e.target.files[0])
                            }} accept="png, jpg jpeg" />
                            <label htmlFor="avatar"><FaEdit/></label>
                        </form>
                        <button className="profile_avatar-btn"><FaCheck/></button>
                    </div>
                    <h1>Henry Euloge</h1>

                    <form className="form profile_form">
                            <p className="form_error-message">Message à afficher en cas d'érreur</p>
                            <input type="text" placeholder="Nom Complet" value={name} onChange={function(e){
                                setName(e.target.value)
                            }}/>

                            <input type="email" placeholder="Email" value={email} onChange={function(e){
                                setEmail(e.target.value)
                            }}/>

                            <input type="password" value={currentPassword} placeholder="Mot de Passe courant" onChange={function(e){
                                setCurrentPassword(e.target.value)
                            }}  />

                            <input type="password" value={newPassword} placeholder="Nouveau mot de passe" onChange={function(e){
                                setNewpassword(e.target.value)
                            }} />

                            <input type="password" placeholder="Confirmer le mot de passe" value={confirmNewPassword} onChange={function(e){
                                setConfirmNewPassword(e.target.value)
                            }}/>
                            <button type="submit" className="update-details">Mettre à jour</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default UserProfile