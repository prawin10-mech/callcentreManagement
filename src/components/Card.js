import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Card.css";

const Card = ({ card }) => {
  const [balance, setBalance] = useState(null);

  const fetchBalance = async () => {
    try {
      const data = await fetch(
        `https://${card.backend}.herokuapp.com/stats/view`,
        {
          method: "GET",
          mode: "no-cors",
        }
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchBalance();
  });
  return (
    <div className="card">
      <p>
        <a href={`https://${card.backend}.herokuapp.com/stats/view`}>
          {card.backend}
        </a>
      </p>
      <p>
        <a href={`https://${card.frontend}.herokuapp.com`}>{card.frontend}</a>
      </p>
      {<p>Balance: {balance}</p>}
    </div>
  );
};

export default Card;
