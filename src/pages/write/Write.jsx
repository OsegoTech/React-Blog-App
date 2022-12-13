 import "./write.css"

 export default function Write(){
    return(
        <div className="write">
            <img
                className="writeImg"
                src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-sharp fa-solid fa-plus"></i>
                    </label>
                    <input type="file" name="fileInput" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea className="writeInput writeText" type="text" name="" id="" cols="30" rows="10" placeholder="Tell your Story.........."></textarea>
                </div>
                <button className="writeSubmit">
                    Publish
                </button>
            </form>
        </div>
    )
 }
