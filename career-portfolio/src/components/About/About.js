import "./About.css";
import ME from "../../image/profileImg.png";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>Know me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="about_image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FiAward className="about_icon" />
              <h5>Qualification</h5>
              <small>BE</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>8+ completed</small>
            </article>
          </div>
          <p> Hi i am Jayant kumar. A passionate full stack web developer
                  have knowledge of building web application using HTML5, CSS3,
                  JAVASCRIPT, BOOTSTRAP, REACTJS.
                  I love to solve problem. whether its finding the most elegant
                  way to write a line of code or figuring out which code fit in
                  progression. i love the challenge of finding a way and
                  discover solution.
                  I am versatile, creative, easy-going, and determined person. i
                  enjoy working with others. Some of language undestand and
                  learn are :
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
