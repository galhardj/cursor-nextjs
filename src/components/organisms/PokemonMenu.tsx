"use client";

import React, { useEffect, useState } from "react";
import PokemonList from "@/components/molecules/PokemonList";
import styles from "./PokemonMenu.module.css";
import type { PokemonApiResponse, Pokemon } from "@/types/pokemon";

const PokemonMenu: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: PokemonApiResponse = await response.json();
        setPokemon(data.results);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "An error occurred while fetching Pokemon data"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <span className={styles.loadingText}>Loading Pokemon...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorMessage}>Error: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className={styles.retryButton}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Pokemon Menu</h1>
        <p className={styles.description}>
          Discover amazing Pokemon from the PokeAPI. Click on any Pokemon to
          view more details.
        </p>
      </div>

      <PokemonList pokemon={pokemon} />
    </div>
  );
};

export default PokemonMenu;
