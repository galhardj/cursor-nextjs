import React from "react";
import Link from "next/link";
import type { PokemonCardProps } from "@/types/pokemon";

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  className = "",
}) => {
  const capitalizedName =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <div
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-4 ${className}`}
    >
      <Link
        href={pokemon.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center"
      >
        <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
          {capitalizedName}
        </h3>
        <p className="text-sm text-gray-500 mt-1">View Details</p>
      </Link>
    </div>
  );
};

export default PokemonCard;
