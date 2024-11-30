import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import thumbnail from "../images/blog2.jpg"

const PostDetail = function () {
    return (
        <section className="post-detail">
            <div className="container post-detail_container">
                <div className="post-detail_header">
                    <PostAuthor/>
                    <div className="post-details_buttons">
                        <Link to={`posts/werwer/edit`} className="edit-button">Modifier</Link>
                        <Link to={`posts/werwer/edit`} className="delete-button">Supprimer</Link>
                    </div>
                </div>
                <h1>l'Avenir du Génie Civil au Cameroun</h1>
                <div className="post-detail_thumbnail">
                    <img src={thumbnail} alt="" />
                </div>
                <p>
                Le Salon International du Bâtiment de Paris 2024, également appelé BÂTIMAT 2024, a ouvert ses portes le 30 septembre dernier au Parc des expositions de Paris Porte de Versailles. Un événement incontournable pour tous les professionnels du secteur du bâtiment, de l’architecture, et de la construction qui souhaite anticiper les défis futurs et découvrir les solutions qui façonnent l’avenir de la construction.</p>

                <p>L’Ordre National des Ingénieurs de Génie Civil du Cameroun conduit par son président Kizito Ngoa, a participé activement à ce grand rendez vous International. Plus de 100 ingénieurs Camerounais du Génie civil ont ainsi effectué le déplacement parisien pour la circonstance. Fait majeur au cours de cette édition à Paris, 27 nouveaux membres faisant partie de la diaspora camerounaise en Europe ont été solennellement accueillis au cours d’une émouvante cérémonie de prestation de serment présidée par l’ambassadeur du Cameroun en France.</p>

                <p>Notons également la présence du président de l’ordre national des architectes du Cameroun et sa forte délégation. Les héros du jour n’ont pas caché leurs émotions de faire désormais partie de la grande famille des ingénieurs de Génie civil du Cameroun. Rappelons que le Salon International du Bâtiment de Paris s’achève aujourd’hui 3 octobre 2024.
                </p>
            </div>
        </section>
    )
}

export default PostDetail