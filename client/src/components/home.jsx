import VcImg from  "../assets/images/videocall.png";
import OlFriends from "../assets/images/friendsonline.png";
import { FaCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useState } from 'react';
import Modal from "./login";

function Home(){ 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
        <>
           <div className="container">
                <div className="row" id="Title">
                    <div className="item-cont">
                        <h1>Made by Student, Built for Students</h1>
                        <div className="items">
                            <p className="OnlineCont"> <FaCircle  id="onlineIcon"/>235 Online Students</p>
                            <p className="UserCont"><FaUser id="UserIcon"/> 1k+ Members</p>
                            <Modal />
                            {/* <button className="custom-btn btn-15" onClick={handleShow}>Join room</button> */}
                        </div>
                    </div>
                </div>
                <div className="row" id="VcContainer">
                    <div className="col">
                        <h1>Video Call</h1>
                        <p>Introducing <b>JAMS</b>, specifically designed to enhance the online learning experience for students. <b>JAMS</b> provides seamless, high-quality video interactions, enabling students to engage in real-time discussions, virtual classrooms, and collaborative projects from anywhere in the world. With intuitive controls, screen sharing, and breakout room capabilities, our platform ensures that students can stay connected, participate actively, and collaborate effectively, making online education more interactive and accessible than ever before.</p>
                    </div>
                    <img src={VcImg} alt="Video Call"/>
                </div>
                <div className="row" id="OlFriendsContainer">
                    <div className="col">
                        <h1>Meet New Friends Online</h1>
                        <p>Making friends online has never been easier, especially for students navigating the digital age. <b>JAMS</b> is designed specifically to help students connect, collaborate, and cultivate meaningful friendships. With features tailored to facilitate interaction, such as virtual study groups, social hangouts, and interactive events, our platform provides a safe and engaging environment for students to meet peers from around the world. Whether you're looking to share academic interests, exchange cultural experiences, or simply make new friends, our app is your gateway to a vibrant and supportive online community. Join us and start building lasting connections today!</p>
                    </div>
                    <img src={OlFriends} alt="Friends Online"/>
                </div>
           </div>
        </>  
    );
}

export default Home;