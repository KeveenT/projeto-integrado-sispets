import React, { useState } from "react";

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div class="searchbar">
            <input type="search" placeholder="Pesquisar..." onChange={(event) => {setSearchTerm(event.target.value);}}/>
            <button type="button" class="btn btn-primary">
                Pesquisar
            </button>
        </div>
    );
};

export default Searchbar;