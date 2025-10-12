import React from "react";
import PokemonCard from "@/components/atoms/PokemonCard";
import type { PokemonListProps } from "@/types/pokemon";

const PokemonList: React.FC<PokemonListProps> = ({
  pokemon,
  className = "",
}) => {
  if (!pokemon || pokemon.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No Pokemon found.</p>
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}
    >
      {pokemon.map((pokemonItem) => (
        <PokemonCard key={pokemonItem.name} pokemon={pokemonItem} />
      ))}
    </div>
  );
};

export default PokemonList;
