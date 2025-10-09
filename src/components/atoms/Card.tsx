import React from "react";
import styles from "./Card.module.css";
import type { CardProps } from "@/types/components";

const Card: React.FC<CardProps> = (props) => {
  const classes = `${styles.card} ${props.className || ""}`.trim();

  return <div className={classes}>{props.children}</div>;
};

export default Card;
