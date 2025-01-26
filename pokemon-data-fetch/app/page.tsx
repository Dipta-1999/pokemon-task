'use client';

import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";

interface Pokemon {
  id: number;
  name: string;
  url: string;
}

const Home = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await response.json();
      const results = data.results.map((pokemon: any, index: number) => ({
        id: index + 1,
        name: pokemon.name,
        url: pokemon.url,
      }));
      setPokemons(results);
    };

    fetchPokemons();
  }, []);

  const totalPages = Math.ceil(pokemons.length / itemsPerPage);
  const displayedPokemons = pokemons.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pokémon Data Fetch</h1>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <Table pokemons={displayedPokemons} searchTerm={searchTerm} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;
