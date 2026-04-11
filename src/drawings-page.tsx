import Layout from "./components/layout";
import ImageObject from "./image-object";

import SelfPortraitHare from "./images/drawings/self-portrait-hare.jpg";
import SelfPortraitSphinx from "./images/drawings/self-portrait-sphinx.jpg";
import SheWolf from "./images/drawings/she-wolf.jpg";

const DrawingsPage = () => (
  <Layout>
    <ImageObject
      image={SelfPortraitHare}
      title="Self Portrait as a Witch Transforming into a Hare"
    >
      <p>2025</p>
      <p>graphite on paper</p>
    </ImageObject>
    <ImageObject image={SheWolf} title="The She Wolf">
      <p>2025</p>
      <p>graphite on paper</p>
    </ImageObject>
    <ImageObject image={SelfPortraitSphinx} title="Self Portrait as a Sphinx">
      <p>2024</p>
      <p>graphite on paper</p>
    </ImageObject>
  </Layout>
);

export default DrawingsPage;
