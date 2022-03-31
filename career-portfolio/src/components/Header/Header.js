import "./Header.css";
import Resumefile from "./Resumefile";
import ME from "../../image/profileImg.png";
import Headersocials from "./Headersocials";

 function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Jayant Kumar</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <Resumefile />
        <Headersocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
export default Header;
