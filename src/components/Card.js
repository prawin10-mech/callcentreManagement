import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = ({ card }) => {
  const [backend, setBackend] = useState(true);
  const [balance, setBalance] = useState("0");

  const fetchBackend = async () => {
    try {
      const { data, status } = await axios.get(
        `https://${card.backend}.herokuapp.com/stats/view`
      );
      if (status) {
        setBalance(data.balance);
      } else {
        setBackend(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBackend();
  }, []);

  return (
    <div className="card">
      {backend ? (
        <p>
          <a href={`https://${card.backend}.herokuapp.com/stats/view`}>
            {card.backend}
          </a>
        </p>
      ) : (
        <p
          style={{
            "background-color": "red",
            color: "#fff",
            padding: "5px",
          }}
        >
          {card.backend}
        </p>
      )}

      <p>
        <a href={`https://${card.frontend}.herokuapp.com`}>{card.frontend}</a>
      </p>
      <p>balance: {balance}</p>
      <p>status: {backend ? "active" : "Messagebird is failed"}</p>
    </div>
  );
};

export default Card;
