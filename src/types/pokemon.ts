export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface PokemonCardProps {
  pokemon: Pokemon;
  className?: string;
}

export interface PokemonListProps {
  pokemon: Pokemon[];
  className?: string;
}
