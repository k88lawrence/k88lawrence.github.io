import Layout from "./components/layout";
import ImageObject from "./image-object";

import SelfPortraitHare from "./images/drawings/self-portrait-hare.jpg";
import SelfPortraitSphinx from "./images/drawings/self-portrait-sphinx.jpg";
import SheWolf from "./images/drawings/she-wolf.jpg";
import LookAtTheMoon from "./images/drawings/look-at-the-moon.jpg";
import SelfPortraitMandragora from "./images/drawings/self-portrait-mandragora.jpg";
import Sirin from "./images/drawings/sirin.jpg";
import DeathsHeadMoth from "./images/drawings/deaths-head-moth.jpg";

const DrawingsPage = () => (
  <Layout>
    <ImageObject
      image={SelfPortraitHare}
      title="Self Portrait as a Witch Transforming into a Hare"
    >
      <p>2025</p>
      <p>4.75” x 6.625”</p>
      <p>graphite on paper</p>
    </ImageObject>

    <ImageObject image={DeathsHeadMoth} title="Death's Head Moth">
      <p>2025</p>
      <p>8.375” x 5.625”</p>
      <p>graphite on toned paper</p>
    </ImageObject>
    <ImageObject image={SheWolf} title="The She Wolf">
      <p>2024</p>
      <p>6.5” x 11”</p>
      <p>graphite on paper</p>
    </ImageObject>
    <ImageObject image={SelfPortraitSphinx} title="Self Portrait as a Sphinx">
      <p>2024</p>
      <p>6.25” x 4.5”</p>
      <p>graphite on paper</p>
    </ImageObject>
    <ImageObject
      image={LookAtTheMoon}
      title="Look at the Moon Over Your Left Shoulder"
    >
      <p>2022</p>
      <p>3.5” x 5.25”</p>
      <p>graphite on paper</p>
    </ImageObject>
    <ImageObject
      image={SelfPortraitMandragora}
      title="Self Portrait as a Mandragora"
    >
      <p>2021</p>
      <p>7.75” x 11.5”</p>
      <p>graphite on paper</p>
    </ImageObject>
  </Layout>
);

export default DrawingsPage;
