import { useState } from "react";
import cat from "./svg/cat.svg";
import bird from "./svg/bird.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import heart from "./svg/heart.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import "./AnimalShow.css";

const svgMap = {
  cat,
  bird,
  cow,
  dog,
  heart,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [clicks, setCliks] = useState(0);
  const handleClick = () => {
    setCliks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks }}
      />
    </div>
  );
}

export default AnimalShow;
