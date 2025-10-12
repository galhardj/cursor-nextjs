import React from "react";
import PokemonCard from "@/components/atoms/PokemonCard";
import styles from "./PokemonList.module.css";
import type { PokemonListProps } from "@/types/pokemon";

const PokemonList: React.FC<PokemonListProps> = ({
  pokemon,
  className = "",
}) => {
  if (!pokemon || pokemon.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p className={styles.emptyMessage}>No Pokemon found.</p>
      </div>
    );
  }

  return (
    <div className={`${styles.grid} ${className}`.trim()}>
      {pokemon.map((pokemonItem) => (
        <PokemonCard key={pokemonItem.name} pokemon={pokemonItem} />
      ))}
    </div>
  );
};

export default PokemonList;
