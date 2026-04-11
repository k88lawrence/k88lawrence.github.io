import InstagramLogo from "../images/icons/instagram-logo.svg";
import CaraLogo from "../images/icons/cara-logo.svg";
import TikTokLogo from "../images/icons/tiktok-logo.svg";

const Socials = () => (
  <div>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://www.instagram.com/katelawrence.art/"
    >
      <img className="social-icon" alt="Instagram" src={InstagramLogo} />
    </a>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://www.tiktok.com/@k88lawrence"
    >
      <img className="social-icon" alt="TikTok" src={TikTokLogo} />
    </a>
    <a target="_blank" rel="noreferrer" href="https://cara.app/katelawrence">
      <img className="social-icon" alt="Cara" src={CaraLogo} />
    </a>
  </div>
);

export default Socials;
