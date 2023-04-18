import React from "react";
import Card from "./Card";
import { cards } from "../helper";

const CardLayout = () => {
  const cardData = cards.map((card) => {
    return <Card card={card} key={card.id} />;
  });
  return <div>{cardData}</div>;
};

export default CardLayout;
