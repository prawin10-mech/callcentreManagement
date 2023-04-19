import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = ({ card }) => {
  const [backend, setBackend] = useState(true);

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
      }
    } catch (err) {
      console.log(err);
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
      <p>status: {backend ? "active" : "inactive"}</p>
    </div>
  );
};

export default Card;
