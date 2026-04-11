import Layout from "./components/layout";

import Headshot from "./images/headshot.jpg";

const ContactPage = () => (
  <Layout>
    <div className="contact-page">
      <div className="contact-page-text">
        <p>
          Kate Lawrence is a fine artist based out of Brooklyn, NY. After
          working as a software engineer during her twenties and early thirties,
          Kate decided to pursue her dream of a making a career as an artist and
          began attending the neoclassical atelier Grand Central Atelier in
          2023. After completing the drawing year, h
        </p>
        <p>
          To inquire about purchasing work or commissions, please email at
          info@katelawrence.art
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
        alt="Kate in her studio in Sunset Park, Brooklyn"
      />
    </div>
  </Layout>
);

export default ContactPage;
