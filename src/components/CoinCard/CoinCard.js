import React from "react";

const CoinCard = (props) => {
  const { name, image } = props.coin;
  return (
    <div>
      <p>{name}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default CoinCard;
