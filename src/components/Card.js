import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Card.css";

const Card = ({ card }) => {
  const [balance, setBalance] = useState(false);

  const fetchBalance = async () => {
    try {
      const { data } = await axios.get(
        `https://${card.backend}.herokuapp.com/stats/view`
      );
      console.log(data);
      setBalance(data.balance); // assuming that the server returns a JSON object with a 'balance' property
    } catch (err) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    }
  };

  useEffect(() => {
    if (
      card.backend === "callcenterbackend1" ||
      card.backend === "callcenterbackend4"
    ) {
      setBalance(true);
    }
  }, [card.backend]);

  return (
    <div className="card">
      {balance && (
        <p>
          <a href={`https://${card.backend}.herokuapp.com/stats/view`}>
            {card.backend}
          </a>
        </p>
      )}
      {balance && (
        <p>
          <a href={`https://${card.frontend}.herokuapp.com`}>{card.frontend}</a>
        </p>
      )}
    </div>
  );
};

export default Card;
