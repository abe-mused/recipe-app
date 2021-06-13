import React, {useState} from 'react';
require('./searchBar.scss');

export default function SearchBar(){
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <form 
            className="search" 
            onSubmit={handleSubmit}
        >
            <input 
                className="search__text"
                type="text" 
                onChange={handleChange}
                value={searchTerm}
                placeholder="Search for a meal..."
            />
            <button 
                className="search__button"
                type="submit"
            >
                X
            </button>
        </form>
    );

    function handleChange(event: any){
        console.log(searchTerm);
        setSearchTerm(event.target.value);
    }
    function handleSubmit(event: any){
        console.log("searchTerm is "+searchTerm);
        event.preventDefault();
        setSearchTerm("");
    }
}