import authorMiniature from "../components/images/author-miniature.png";
import dropIcon from "../components/images/icons/drop.png";
import paperIcon from "../components/images/icons/paper.png";
import fireIcon from "../components/images/icons/fire.png";
import gallery1 from "../components/images/gallery/1.png";
import gallery2 from "../components/images/gallery/2.png";
import gallery3 from "../components/images/gallery/3.png";
import gallery4 from "../components/images/gallery/4.png";
import gallery5 from "../components/images/gallery/5.png";
import gallery6 from "../components/images/gallery/6.png";
import puppetIcon from "../components/images/icons/puppets.png";

const author = {
  image: authorMiniature,
  displayName: 'Lorem ipsum',
};
const icons = [dropIcon, paperIcon, fireIcon];
const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
const article = {
  subHeading: 'Quann steva là in Honduras, steva rint a na capanna e nziemm a me ce steva.',
  heading: 'Nun ce sta\' mammà là dint\'!',
  text: 'E intant\' e sord tuoj nunn arrivavan. \'Na sera gli honduregni me mettetter\' nu macete n\'man e gridavan\': \'Accirel\'! Accirel\'! Je pregav\', pregav\' ca corcrun\' me venev\' a salva\', ca tu me veniv\' a salva\'! ',
  author,
  actions: icons,
  gallery,
};

const card1 = {
  icon: puppetIcon,
  subHeading: "Sapeva pure ca oggi je e te stevema inda 'sta machina",
  heading: "Quann' tu me purtast' a spara' chillu cristian' p'a prima vota.",
  pictures: [
    gallery4,
    gallery4,
    gallery4,
    gallery4,
    gallery4,
  ],
};
const card2 = {
  heading: "Quann' Salvatore Conte è turnat', quann' Danielino è muort', iss 'o sapeva.",
};
const card3 = {
  heading: "Mammà se n'è ghiuta! Tu ci credi in Dio?",
};

export {
  author,
  icons,
  gallery,
  article,
  card1,
  card2,
  card3,
};
