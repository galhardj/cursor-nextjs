import React from "react";
import "./Card.css";
import type { CardProps } from "@/types/components";

const Card: React.FC<CardProps> = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
