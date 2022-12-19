
import { useState } from "react";
import axios from "axios";

import "../styles/form.css"


const Addpost = () => {
    
    const [user, setUser] = useState({ author: "", location: "", description: "" });
    const [image, setImage] = useState([]);
    const register = async () => {
        let publishDate = new Date();
        let date = `${publishDate.getDate()}/${publishDate.getMonth()+1}/${publishDate.getFullYear()}`
        console.log(user);
        const formdata = new FormData();
        formdata.append("image", image);
        formdata.append("name", user.author);
        formdata.append("Location", user.location);
        formdata.append("Description", user.description);
        formdata.append("date", date);
        axios.post("https://instaclone-backend-wq4r.onrender.com/posts", formdata).then((res) => {
        }).catch((e) => {
            console.log(e);
            alert("Some error occured while posting! Please Try Again");
        });
        
        alert("Post successfully uploaded");
    }
    return (
        <>
            
            <div className="form-container">
                <form onSubmit={register} className="form">
                    <section>
                        <input id="file" type="file" required onChange={(e) => { setImage(e.target.files[0]) }} />
                    </section>
                    <section className="author-location">
                        <input className="author-location-width" required placeholder="author" onChange={(e) => { setUser({ ...user, author: e.target.value }) }} />
                        <input className="author-location-width" required placeholder="location" onChange={(e) => { setUser({ ...user, location: e.target.value }) }} />
                    </section>
                    <section className="author-location">
                        <input id="description" required placeholder="description" onChange={(e) => { setUser({ ...user, description: e.target.value }) }} />
                    </section>
                    <article id="btn-container">
                        <input id="btn" type="submit" value="Post" />
                    </article>
                </form>
            </div>
        </>
    )
}
export default Addpost;





