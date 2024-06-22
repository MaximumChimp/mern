import HowToStudy from "./HowToStudy";
import { Route,Link } from "react-router-dom";

function Header(){
    return(
    <>
        <ul>
            <li><a href="">How to study together</a></li>
            <li><a href="">Community</a></li>
            <li><a href="">Developer</a></li>
        </ul>
    </>
    )
}
export default Header;