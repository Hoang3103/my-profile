
import './App.css';

import { HomeFilled } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { FundProjectionScreenOutlined } from '@ant-design/icons';
import { ProjectOutlined } from '@ant-design/icons';
import { PicLeftOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faL } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faHand } from '@fortawesome/free-regular-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHardDrive } from '@fortawesome/free-solid-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';


// import avt from '../public/avt.jpg';

const bg = require ('./bggg.png')

const FB = "https://www.facebook.com/nguyenhuyhoang03?locale=vi_VN";
const GIT = "https://github.com/Hoang3103";
const INS = "https://www.instagram.com/hoang_31.03/";
const TIK = "https://www.tiktok.com/@nhh.3103";
const DRI = "https://drive.google.com/drive/folders/1YtMkGUaU9AKr_cGGOxwwQvWYgz_w7rKI?usp=sharing"



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});



function App() {
  return (
    <div class="App">
      <div class="overlay">
        <div class="bcg"></div>
      </div>
      <div id="Home" class="container">
        <div class="header">
          <div class="logo">H.H</div>
          <div class="menu">
            <div class="about"><HomeFilled /><a href='#Home'><div class="abc">Home</div></a></div>
            <div class="about"><UserOutlined /><a href='#About'><div class="abc">About</div></a></div>
            <div class="about"><FundProjectionScreenOutlined /><a href='#About'><div class="abc">Social</div></a></div>
            <div class="about"><ProjectOutlined /><a href='#Projects'><div class="abc">Projects</div></a></div>
            <div class="about"><PicLeftOutlined /><div class="abc">Blogs</div></div>
          </div>
          {/* <div class="ani">
            <img class="gif" src={haa} alt="Ảnh động" />
          </div> */}
        </div>
        <div class="center">
          <div class="infor">
            <div class="des">
              <div class="hi-there">Hi There !!</div>
              <div class="hand-hi"><FontAwesomeIcon icon={faHand} /></div>
            </div>
            <div class="hello">I'm<span>NGUYEN HUY HOANG </span></div>
            <div class="descript">I'm looking for <span>Front-End Developer jobs or Editor</span> as well. Also
              <span> I made this Website</span> to introduce <span>about my information and my experience.</span> You can check it
            </div>
          </div>
          <div class="avatar">
            <img src={bg} alt='avt'/>
          </div>
        </div>
      </div>
      <div id="About" class="container-2">
        <div class="big-introduce">
          <div class="introduce">
            <div class="title">LET ME{' '} <span> INTRODUCE</span> MY SELF</div>
            <div class="intro"><span>I am front-end developer,</span> I specialize in creating engaging and interactive user interfaces for web applications. My primary focus is on <span>crafting visually appealing and user-friendly experiences</span> that delight users and <span>enchance their interaction</span> with the product.</div>
            <div class="intro">I have experience working with multiple programming languages and technologies, <span>including JavaScript, Python, Java, and frameworks such as React, Node.js, and Django.</span></div>
            <div class="intro">
              I can effectively <span>collaborate with UI/UX designers</span> to translate mockups and wireframes into fully functional and aesthetically pleasing interfaces.I am also <span>familiar with version control systems like Git,</span> which facilitates collaborative development and code management.</div>
            <div class="intro">
              I also have the <span>ability to edit videos</span> as an additional skill of mine. Although I don't have much experience, you can take a look at <span>some of my product in the section Projects.</span> <a>Contact me: hoangnguyenx03@gmail.com</a></div>
          </div>
          <div class="my-picture">
            <div class="my-pic"></div>
            <div class="buttons">
              <button class="pre-but"> <FontAwesomeIcon icon={faChevronLeft} /> </button>
              <button class="next-but"> <FontAwesomeIcon icon={faChevronRight} /> </button>
            </div>
          </div>
        </div>
        <div class="social-network">
          <div class="find-me">YOU CAN FIND ME ON</div>
          <div class="social">
           <div class="fb"><a href={FB}><FontAwesomeIcon icon={faFacebook} /></a></div>
           <div class="fb"><a href={GIT}><FontAwesomeIcon icon={faGithub} /></a></div>
           <div class="fb"><a href={TIK}><FontAwesomeIcon icon={faTiktok} /></a></div>
           <div class="fb"><a href={INS}><FontAwesomeIcon icon={faSquareInstagram} /></a></div>
           <div class="fb"><a href={DRI}><FontAwesomeIcon icon={faHardDrive} /></a></div>
          </div>
        </div>
      </div>
      <div id="Projects" class="container-3">
        <div class="on-top">PROJECTS</div>
        <div class="tool-use">
          <div class="tool"><span>LANGUAGE:</span>
          <div class="fb"><FontAwesomeIcon icon={faHtml5} /> </div>
           <div class="fb"><FontAwesomeIcon icon={faSquareJs} /></div>
           <div class="fb"><FontAwesomeIcon icon={faCss3} /></div>
           <div class="fb"><FontAwesomeIcon icon={faReact} /></div>
          </div>
          <div class="tool"><span>TOOL: </span>
          
           <div class="fb"><FontAwesomeIcon icon={faGithub} /></div>
           
          </div>
        </div>
        <div class="product">
          <div class="webs">
            <div class="name">WEBSITES</div>
            <div class="mod">
            <div class="fb"><FontAwesomeIcon icon={faLink} /></div>
            <div class="fb"><FontAwesomeIcon icon={faLink} /></div>
            <div class="fb"><FontAwesomeIcon icon={faLink} /></div>
            <div class="fb"><FontAwesomeIcon icon={faLink} /></div>
            <div class="fb"><FontAwesomeIcon icon={faLink} /></div>
            <div class="fb"><FontAwesomeIcon icon={faLink} /></div>
            <div class="fb"><FontAwesomeIcon icon={faLink} /></div>
            <div class="fb"><FontAwesomeIcon icon={faLink} /></div>
            
            </div>
          </div>
          <div class="webs">
          <div class="name">GAMES</div>
            <div class="mod">
            <div class="fb"><FontAwesomeIcon icon={faLink} /></div>
            <div class="fb"><FontAwesomeIcon icon={faLink} /></div>
            <div class="fb"><FontAwesomeIcon icon={faLink} /></div>
            <div class="fb"><FontAwesomeIcon icon={faLink} /></div>
            <div class="fb"><FontAwesomeIcon icon={faLink} /></div>
            <div class="fb"><FontAwesomeIcon icon={faLink} /></div>
            <div class="fb"><FontAwesomeIcon icon={faLink} /></div>
            </div>
          </div>
          <div class="webs">
          <div class="name">OTHERS</div>
            <div class="mod">
            <div class="fb"><FontAwesomeIcon icon={faLink} /></div>
            <div class="fb"><FontAwesomeIcon icon={faLink} /></div>
            <div class="fb"><FontAwesomeIcon icon={faLink} /></div>
            <div class="fb"><FontAwesomeIcon icon={faLink} /></div>
            <div class="fb"><FontAwesomeIcon icon={faLink} /></div>
            <div class="fb"><FontAwesomeIcon icon={faLink} /></div>
            <div class="fb"><FontAwesomeIcon icon={faLink} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
