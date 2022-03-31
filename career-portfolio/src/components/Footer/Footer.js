import "./Footer.css"
import {FaFacebookF} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {IoLogoTwitter} from "react-icons/io";

function Footer() {
    return(
     <footer>
         <a href="#" className="footer_logo">Jayant kumar</a>
         <ul className="footer_links">
             <li><a href="#">Home</a></li>
             <li><a href="#about">About</a></li>
             <li><a href="#experience">Experience</a></li>
             <li><a href="#projects">Projects</a></li>
             <li><a href="#contact">Contact</a></li>
             <li><a href="#blogs">Blogs</a></li>
         </ul>
         <div className="footer_socials">
            <a href="https://www.facebook.com"><FaFacebookF/></a>
            <a href="https://www.instagram.com"><FaInstagram/></a>
            <a href="https://www.twitter.com"><IoLogoTwitter/></a>
         </div>
         <div className="footer_copyright">
             <small> &copy; Jayant kumar All Right Reserved </small>
         </div>
     </footer>
    )
}
export default Footer;