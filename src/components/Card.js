import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = ({ card }) => {
  const [backend, setBackend] = useState(true);
  const [status, setStatus] = useState(true);
  const [balance, setBalance] = useState("0");

  const fetchBackend = async () => {
    try {
      const response = await fetch(
        `https://${card.backend}.herokuapp.com/stats/view`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      if (!data.status) {
        setBackend(false);
        setBalance(data.balance);
      }
    } catch (err) {
      // setStatus(false);
    }
  };

  useEffect(() => {
    fetchBackend();
  }, [card.backend]);

  return (
    <div className="card">
      {backend ? (
        <p>
          <a href={`https://${card.backend}.herokuapp.com/stats/view`}>
            {card.backend}
          </a>
        </p>
      ) : (
        <p style={{ "background-color": "red", color: "#fff" }}>
          {card.backend}
        </p>
      )}

      <p>
        <a href={`https://${card.frontend}.herokuapp.com`}>{card.frontend}</a>
      </p>
      <p>balance: {balance}</p>
      <p>status: {status ? "active" : "backend is failed"}</p>
    </div>
  );
};

export default Card;
