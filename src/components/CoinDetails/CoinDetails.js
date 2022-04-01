import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => res.json())
      .then((data) => setCoin(data));
  }, [id]);
  return (
    <div className="h-[90vh] px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
      <div className="h-full grid grid-cols-1 md:grid-cols-2 justify-center g-4 md:justify-around content-center">
        <div>
          <h1 className="text-3xl">General Info</h1>
          <hr />
          <h1>Coin Name : {coin.name}</h1>
          <h1>Market Cop Rank : {coin.market_cap_rank}</h1>
          <h1>
            Origin :{" "}
            {coin.country_origin ? coin.country_origin : "Not Found 😔"}
          </h1>
          <h1>Contract Address :</h1>
          <h1>
            Hashing Algorithm :{" "}
            {coin.hashing_algorithm
              ? coin.hashing_algorithm
              : "Not Available 😔"}
          </h1>
          <h1>
            Genesis Date :{" "}
            {coin.genesis_date ? coin.genesis_date : "Not Available 😔"}
          </h1>
          <h1>
            Last Updated :{" "}
            {coin.last_updated ? coin.last_updated : "Not Available 😔"}
          </h1>

          <br />

          <h1 className="text-3xl">Scores</h1>
          <hr />
          <h1>
            Community Score : {coin.community_score ? coin.community_score : 0}
          </h1>
          <h1>
            Developer Score : {coin.developer_score ? coin.developer_score : 0}
          </h1>
          <h1>
            Liquidity Score : {coin.liquidity_score ? coin.liquidity_score : 0}
          </h1>
          <h1>
            Public Interest Score :{" "}
            {coin.public_interest_score ? coin.public_interest_score : 0}
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <img src={coin.image?.large} alt="coinImage" />
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
