import "./post.css"

export default function Post(){
    return(
        <div className="post">
            <img
                className="postImg"
                src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet
                </span>
                <hr/>
                <span className="postDate">
                    1 hour ago
                </span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis consequuntur earum fugiat impedit laboriosam libero maxime modi odio omnis quasi quo similique, unde vitae voluptate voluptatibus voluptatum. Accusantium, porro.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis consequuntur earum fugiat impedit laboriosam libero maxime modi odio omnis quasi quo similique, unde vitae voluptate voluptatibus voluptatum. Accusantium, porro.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis consequuntur earum fugiat impedit laboriosam libero maxime modi odio omnis quasi quo similique, unde vitae voluptate voluptatibus voluptatum. Accusantium, porro.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis consequuntur earum fugiat impedit laboriosam libero maxime modi odio omnis quasi quo similique, unde vitae voluptate voluptatibus voluptatum. Accusantium, porro.
            </p>
        </div>
    )
}
