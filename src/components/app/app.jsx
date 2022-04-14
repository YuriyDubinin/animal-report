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
        [term, setTerm] = useState(""),
        [filterMode, setFilterMode] = useState("Все");

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

    //filters animals by category
    const filterAnimals = (items, filterMode) => {
        //filter by according to the state of the animal
        if (filterMode === "Доп.наблюдение") {
            return items.filter((item) => item.specialAttention);
        }
        if (filterMode === "На лечении") {
            return items.filter((item) => item.treatment);
        }
        if (filterMode === "В опасности") {
            return items.filter((item) => item.inDangerousState);
        }

        //filter by kind
        switch (filterMode) {
            case "Белый кит":
                return items.filter((item) => item.kindOfAnimal === "Белый кит");
            case "Дельфин":
                return items.filter((item) => item.kindOfAnimal === "Дельфин");
            case "Морж":
                return items.filter((item) => item.kindOfAnimal === "Морж");
            case "Морской лев":
                return items.filter((item) => item.kindOfAnimal === "Морской лев");
            case "Нерпа":
                return items.filter((item) => item.kindOfAnimal === "Нерпа");
            default:
                return items;
        }
    };

    //sets the filterMode
    const onUpdateFilter = (filterMode) => {
        setFilterMode(filterMode);
    };

    //search & filter result
    const visibleData = filterAnimals(searchAnimal(data, term), filterMode);

    return (
        <div className="app">
            <AppInfo data={data} />

            <div className="search-panel">
                <SearchPanel onUpdateSearch={onUpdateSearch} />
                <AppFilter filterMode={filterMode} onUpdateFilter={onUpdateFilter} />
            </div>

            <AnimalsList data={visibleData} />
            <AnimalsForm />
        </div>
    );
};

export default App;
