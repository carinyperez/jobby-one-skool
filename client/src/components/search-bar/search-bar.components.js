import './search-bar.styles.scss'; 
import { useState, useEffect } from "react";


const SearchBar = () => {
    let [query, setQuery] = useState('');
    let [data, setData] = useState(''); 

    const handleInput = (event) => {
        setQuery(event.target.value); 
    }
    const handleClick = (e) => {
        e.preventDefault();
        apiJobRequest(query);
        console.log(query);
    }
    // consume promise 
    const apiJobRequest = (query) => {
        const url = `/api/jobs/${query}`; 
        fetch(url).then(response => response.json())
        .then(response => setData(response))
        .catch(err => console.error(err.message));
    }

    // useEffect(() => {
    //     query && apiJobRequest(query);
    // }, [])

    return (
        <div>
            <form>
                <input
                type='text'
                onChange={handleInput}
                ></input>
                <button
                type='submit'
                onClick={handleClick}
                >Find
                <br/> 
                Jobs</button>
            </form>
            {
                data && console.log(`Data is ${data}`)
            }
            {
                
                data && data.map(el => <p key={el}>{el}</p>)
            }
        </div>
    )  
}

export default SearchBar; 