import { useState, useEffect } from "react";

import AnimalService from "../../services/animal-service";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import AnimalsList from "../animals-list/animals-list";
import AnimalsForm from "../animals-form/animals-form";

import "./app.scss";

const App = () => {
    const [data, setData] = useState([]),
        [term, setTerm] = useState("");

    const animalService = new AnimalService();

    //getting the main object with data from the server
    useEffect(() => {
        animalService
            .getResource()
            .then((data) => {
                setData(data);
            })
            .catch("ERROR: something wrong");
    }, []);

    //search by ascinding string to name
    const searchAnimal = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.name.indexOf(term) > -1;
        });
    };

    //the string entered by user is written to the 'term' state
    const onUpdateSearch = (term) => {
        setTerm(term);
    };

    //search & filter result
    const visibleData = searchAnimal(data, term);

    return (
        <div className="app">
            <AppInfo data={data} />

            <div className="search-panel">
                <SearchPanel onUpdateSearch={onUpdateSearch} />
                <AppFilter />
            </div>

            <AnimalsList data={visibleData} />
            <AnimalsForm />
        </div>
    );
};

export default App;
