import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import sticker from "./img/sticker.png";

const Home = () => {
  const handleDownload = () => {
    const cvUrl = "/path-to-your-cv.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "My_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <div class="bg">
      <div className="home-container">
      <div className="text-section">
        <h1>Hello, I'm <span className="highlight">RAJIMOL JC</span></h1>
        <h2>Frontend Developer | Python Fullstack Developer </h2>
        <p>
        I specialize in building dynamic, responsive, and user-centric applications. I enjoy solving complex problems and constantly improving my skills in modern web technologies. Let's build something amazing together!
        </p>
        <a href={process.env.PUBLIC_URL + "/Resume.pdf"} download="My_Resume.pdf">
          <button className="btn">Download CV</button>
        </a>
      </div>
      <div className="image-section">
        <img src={sticker} alt="sticker" />
      </div>
    </div>
    </div>
  )
}

export default Home