import "../CSS/HomePage.css";
import profile from "../Img/curry.png";
import linkedImg from "../Img/linkedinImg.png";
import githubImg from "../Img/githubImg.png";

const HomePage = () => {
    return (
        <div>
            <div className="homepage_header">
                <p>Lee Miu Liang</p>
                <div className="homepage_header_content">
                    <button href="#">About</button>
                    <button href="#">Experience</button>
                    <button href="#">Project</button>
                    <button href="#">Contact</button>
                </div>
            </div>
            <div className="homepage_body_1">
                <div className="homepage_body_img">
                    <img src={profile} />
                </div>
                <div className="homepage_body_content">
                    <p>Hello, I'm</p>
                    <h1>Lee Miu Liang</h1>
                    <p className="homepage_body_content_p">Web Developer</p >
                    <div>
                        <button className="homepage_button" style={{ marginRight: "10px" }}>Download CV</button>
                        <button className="homepage_button" style={{ marginLeft: "10px" }}>Contact Info</button>
                    </div>
                    <div className="homepage_body_content_img">
                        <img src={linkedImg} style={{ marginRight: "10px" }}/>
                        <img src={githubImg} style={{ marginLeft: "10px" }} />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default HomePage;