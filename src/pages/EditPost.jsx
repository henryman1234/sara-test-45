import React, { useState } from "react";
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

const EditPost = function () {

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState('Sans Catégorie')
    const [description, setDescription] = useState("")
    const [thumbnail, setThumbnail] = useState("")

    const modules = {
        toolbar: [
            [{"header": [1, 2,3, 4, 5, 6, false]}],
            ["bold", "italic", "underline", "strike", "blackquote"],
            [{"list": "ordered"}, {"list": "bullet"}, {"indent": "-1"},{"indent": "+1"} ],
            ["link", "image"],
            ["clean"]
        ]
    }

    const formats = [
        "header", "bold", "underline", "strike", "blackquote", "list", "bullet", "indent", "link", "image" , "italic"
    ]


    const POST_CATEGORIES = ["Agriculture", "Business", "Education", "Entertainment", "Art", "Investment", "Uncategorized", "Weather"]

    return (
        <section className="create-post">
            <div className="container">
                <h2>Modifier le poste</h2>
                <p className="form_error-message">This is an error message</p>
                <form className="form create-post_container">
                    <input type="text" placeholder="Titre" value={title} onChange={function(e){
                        setTitle(e.target.value)
                    }}  autoFocus/>
                    <select name="category" value={category} id="" onChange={function(e){
                        setCategory(e.target.value)
                    }}>
                        {POST_CATEGORIES.map(function(cat){
                            return <option key={cat}>{cat}</option>
                        })}
                    </select>
                    <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription}/>
                        <input type="file" value={thumbnail} onChange={function(e){
                            setThumbnail(e.target.files[0])
                        }} accept="png, jpg, jpeg"/>
                    <button type="submit" className="button-create">Mettre à jour</button>
                </form>
            </div>
        </section>
    )
}

export default EditPost