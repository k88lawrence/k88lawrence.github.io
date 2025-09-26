import InstagramLogo from "../images/instagram-logo.svg";
import CaraLogo from "../images/cara-logo.svg";
import TikTokLogo from "../images/tiktok-logo.svg";

const Socials = () => (
  <>
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
      href="https://katelawrenceart.substack.com/"
    >
      <img className="social-icon" alt="Substack" src={CaraLogo} />
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
  </>
);

export default Socials;
