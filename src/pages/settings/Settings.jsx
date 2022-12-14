import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings(){
    return(
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update your Account</span>
                    <span className="settingsTitleDelete">Delete  Account</span>
                </div>
                <form  className="settingsForm">
                    <label >Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-regular fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Osego"/>
                    <label>Email</label>
                    <input type="email" placeholder="youremail@email.com"/>
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmitButton">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
