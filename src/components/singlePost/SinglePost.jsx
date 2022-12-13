import "./singlepost.css"

export default function SinglePost(){
    return(
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={require("../../assets/3.jpg")} alt="" className="singlePostImg"/>
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet,
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Osego</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur corporis doloremque, eligendi excepturi inventore, iure magnam minus nesciunt officia pariatur quia quis repellat reprehenderit rerum sed tempore voluptatem voluptatibus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur corporis doloremque, eligendi excepturi inventore, iure magnam minus nesciunt officia pariatur quia quis repellat reprehenderit rerum sed tempore voluptatem voluptatibus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur corporis doloremque, eligendi excepturi inventore, iure magnam minus nesciunt officia pariatur quia quis repellat reprehenderit rerum sed tempore voluptatem voluptatibus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur corporis doloremque, eligendi excepturi inventore, iure magnam minus nesciunt officia pariatur quia quis repellat reprehenderit rerum sed tempore voluptatem voluptatibus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur corporis doloremque, eligendi excepturi inventore, iure magnam minus nesciunt officia pariatur quia quis repellat reprehenderit rerum sed tempore voluptatem voluptatibus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur corporis doloremque, eligendi excepturi inventore, iure magnam minus nesciunt officia pariatur quia quis repellat reprehenderit rerum sed tempore voluptatem voluptatibus!
                </p>
            </div>
        </div>
    )
}
