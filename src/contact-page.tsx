import Layout from "./components/layout";

import Headshot from "./images/headshot.jpg";

const ContactPage = () => (
  <Layout>
    <div className="contact-page">
      <div className="contact-page-text">
        <p>
          Kate Lawrence is an artist working in graphite and oils based in
          Pittsburgh, PA. Her work draws on folklore and fairy tales to explore
          themes of womanhood and mortality. She has exhibited at Pen + Brush
          Gallery and Gallery 14C and maintains an active studio practice while
          teaching art to children and adults.
        </p>
        <p>
          To inquire about purchasing work or commissions, please email{" "}
          <a href="mailto:info@katelawrence.art">info@katelawrence.art</a>.
        </p>
        <p>
          Selected pieces available for purchase at{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.saatchiart.com/account/profile/2950409?q=1773945100"
          >
            Saatchi Art
          </a>
          .
        </p>
        <ul>
          <li>
            Instagram:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/katelawrence.art/"
            >
              katelawrence.art
            </a>
          </li>
          <li>
            TikTok:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.tiktok.com/@k88lawrence"
            >
              k88lawrence
            </a>
          </li>
          <li>
            Cara:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://cara.app/katelawrence"
            >
              katelawrence
            </a>
          </li>
        </ul>
      </div>
      <img
        className="contact-page-image"
        src={Headshot}
        alt="Kate in her studio"
      />
    </div>
  </Layout>
);

export default ContactPage;
