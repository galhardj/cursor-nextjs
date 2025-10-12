import React from "react";
import Link from "next/link";
import styles from "./PokemonCard.module.css";
import type { PokemonCardProps } from "@/types/pokemon";

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  className = "",
}) => {
  const capitalizedName =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <div className={`${styles.card} ${className}`.trim()}>
      <Link
        href={pokemon.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <h3 className={styles.title}>{capitalizedName}</h3>
        <p className={styles.subtitle}>View Details</p>
      </Link>
    </div>
  );
};

export default PokemonCard;
