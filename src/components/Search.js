import React, { useState } from 'react'
import { FaSearchLocation } from 'react-icons/fa';
import '../css/Search.css';

function Search() {

    const [query, setQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('submitted');
        setQuery('');
    }

    return (
        <div className="search">
            <form onSubmit={handleSubmit} className="search__form" >
                <FaSearchLocation className="search__icon" />
                <input type="text" placeholder="Search any city" onChange={(evt) => setQuery(evt.target.value)} value={query} className="search__inpt" />
                <button type="submit" className="search__btn" >Search</button>
            </form>
        </div>
    )
}

export default Search
