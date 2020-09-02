import shuffle from "lodash.shuffle";
import img1 from "../img/jabon.png";
import img2 from "../img/mascara.png";
import img3 from "../img/patrulla.png";
import img4 from "../img/puma.png";
import img5 from "../img/guante.png";
import img6 from "../img/pumaEscudo.png";
import img7 from "../img/buho.png";
import img8 from "../img/circulopuma.png";
import img9 from "../img/coronaRojo.png";
import img10 from "../img/coronaVerde.png";


//Helper para revolver las tarjetas
export const BuildDeck = () => {
  const hootieImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const cardsQty = 10;
  let cards = [];

  while (cards.length < cardsQty) {
    const index = Math.floor(Math.random() * 10);
    //cards.push(this.hootieImages[index]);
    let extractedImg = hootieImages.splice(index, 1)[0];
    //para evitar que se agreguen img: undefined en cards
    while (extractedImg === undefined) {
      const index = Math.floor(Math.random() * 10);
      extractedImg = hootieImages.splice(index, 1)[0];
    }
    const card = {
      img: extractedImg,
      wasMatched: false,
      id: Math.floor(Math.random() *5000)
    };
    cards.push(card);
    cards.push({ ...card });
  }
  return shuffle(cards);
};