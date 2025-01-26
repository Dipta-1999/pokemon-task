import React from "react";

interface Pokemon {
    id: number;
    name: string;
    url: string;
}

interface TableProps {
    pokemons: Pokemon[];
    searchTerm: string;
}

const Table: React.FC<TableProps> = ({ pokemons, searchTerm }) => {
    const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <table className="w-full border-collapse border border-gray-200">
            <thead>
                <tr>
                    <th className="p-2 border border-gray-300">ID</th>
                    <th className="p-2 border border-gray-300">Image</th>
                    <th className="p-2 border border-gray-300">Name</th>
                    <th className="p-2 border border-gray-300">URL</th>
                </tr>
            </thead>
            <tbody>
                {filteredPokemons.map((pokemon) => (
                    <tr key={pokemon.id}>
                        <td className="p-2 border border-gray-300 text-center">{pokemon.id}</td>
                        <td className="p-2 border border-gray-300 text-center">
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                                alt={pokemon.name}
                            />
                        </td>
                        <td className="p-2 border border-gray-300 text-center">{pokemon.name}</td>
                        <td className="p-2 border border-gray-300 text-center">
                            <a href={pokemon.url} target="_blank" rel="noopener noreferrer">
                                {pokemon.url}
                            </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;