import "./Header.css";
import Resumefile from "../../image/resume.pdf";
import ME from "../../image/profileImg.jpg";
import Headersocials from "./Headersocials";

export default function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Jayant Kumar</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <Resumefile />
        <Headersocials />
        <div className="me">
          <img src={ME}  alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
