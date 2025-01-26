import React from "react";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
    return (
        <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Search Pokémon..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};

export default SearchBar;