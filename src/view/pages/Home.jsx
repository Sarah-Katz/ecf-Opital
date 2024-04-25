import { useState } from 'react';
import NavBar from '../components/NavBar';

function Home() {
    const [search, setSearch] = useState("");
    const handleChange = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
        setTimeout(() => {
            //TODO: implement search
            console.log("SEARCH");
        }, 1000);
    };
    return <NavBar callback={handleChange} search={search}/>;
}

export default Home;
