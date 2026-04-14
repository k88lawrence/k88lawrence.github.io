import Layout from "../components/layout";
import ImageObject from "../image-object";

import Skull1 from "../images/paintings/skull1.jpg";
import Skull2 from "../images/paintings/skull2.jpg";
import Strawberries from "../images/paintings/strawberries.jpg";
import Tomatoes from "../images/paintings/tomatoes.jpg";
import TopoChicoBottle from "../images/paintings/topo-chico-bottle.jpg";

const PaintingsPage = () => (
  <Layout>
    <ImageObject image={TopoChicoBottle} title="Topo Chico Bottle">
      <p>2026</p>
      <p>5” x 7”</p>
      <p>oil on paper</p>
    </ImageObject>
    <ImageObject image={Skull2} title="Skull (profile)">
      <p>2025</p>
      <p>6” x 5”</p>
      <p>oil on paper</p>
    </ImageObject>
    <ImageObject image={Tomatoes} title="Tomatoes on the Vine">
      <p>2025</p>
      <p>4.5" x 3”</p>
      <p>oil on paper</p>
    </ImageObject>
    <ImageObject image={Strawberries} title="Strawberries">
      <p>2025</p>
      <p>5.125” x 4”</p>
      <p>oil on paper</p>
    </ImageObject>
    <ImageObject image={Skull1} title="Skull">
      <p>2025</p>
      <p>5.25” x 6”</p>
      <p>oil on unstretched canvas</p>
    </ImageObject>
  </Layout>
);

export default PaintingsPage;
