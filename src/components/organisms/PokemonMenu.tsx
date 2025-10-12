"use client";

import React, { useEffect, useState } from "react";
import PokemonList from "@/components/molecules/PokemonList";
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
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600">Loading Pokemon...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600 mb-4">Error: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Pokemon Menu</h1>
        <p className="text-gray-600">
          Discover amazing Pokemon from the PokeAPI. Click on any Pokemon to
          view more details.
        </p>
      </div>

      <PokemonList pokemon={pokemon} />
    </div>
  );
};

export default PokemonMenu;
