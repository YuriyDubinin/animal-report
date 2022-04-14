import { useState, useEffect } from "react";

import AnimalService from "../../services/animal-service";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import AnimalsList from "../animals-list/animals-list";
import AnimalsForm from "../animals-form/animals-form";

import "./app.scss";

const App = () => {
    const [data, setData] = useState([]);

    const animalService = new AnimalService();

    useEffect(() => {
        animalService
            .getResource()
            .then((data) => {
                setData(data);
            })
            .catch("ERROR: something wrong");
    }, []);

    return (
        <div className="app">
            <AppInfo data={data} />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <AnimalsList data={data} />
            <AnimalsForm />
        </div>
    );
};

export default App;
