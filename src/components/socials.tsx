import InstagramLogo from "../images/icons/instagram-logo.svg";
import CaraLogo from "../images/icons/cara-logo.svg";
import TikTokLogo from "../images/icons/tiktok-logo.svg";

const Socials = () => (
  <div className="socials">
    <a
      target="_blank"
      rel="noreferrer"
      className="social-icon"
      href="https://www.instagram.com/katelawrence.art/"
    >
      <img alt="Instagram" src={InstagramLogo} />
    </a>
    <a
      target="_blank"
      rel="noreferrer"
      className="social-icon"
      href="https://www.tiktok.com/@k88lawrence"
    >
      <img alt="TikTok" src={TikTokLogo} />
    </a>
    <a
      target="_blank"
      className="social-icon"
      rel="noreferrer"
      href="https://cara.app/katelawrence"
    >
      <img alt="Cara" src={CaraLogo} />
    </a>
  </div>
);

export default Socials;
