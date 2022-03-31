import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {FiDribbble} from "react-icons/fi"

export default function Headersocials() {
  return (
    <div className="header_social">
      <a href="htttp://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="htttp://github.com" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="htttp://dribble.com" target="_blank" rel="noreferrer">
        <FiDribbble />
      </a>
    </div>
  );
}
