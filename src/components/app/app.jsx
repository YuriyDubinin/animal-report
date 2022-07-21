import { useState, useEffect } from "react";

import AnimalService from "../../services/AnimalService";
import AppInfo from "../appInfo/AppInfo";
import SearchPanel from "../searchPanel/SearchPanel";
import AppFilter from "../appFilter/AppFilter";
import AnimalsList from "../animalsList/AnimalsList";
import AnimalsAddForm from "../animalsAddForm/AnimalsAddForm";
import Modal from "../modal/Modal";
import PersonalProfile from "../personalProfile/PersonalProfile";
import DailyReport from "../dailyReport/DailyReport";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import "./app.scss";

const App = () => {
    //a special state that is used when a rerender is needed
    const [reRender, setReRender] = useState(false);

    const [data, setData] = useState([]),
        [term, setTerm] = useState(""),
        [filterMode, setFilterMode] = useState("Все"),
        [modalActive, setModalActive] = useState(false),
        [workTab, setWorkTab] = useState("report");

    const animalService = new AnimalService();

    //getting the main object with data from the server
    useEffect(() => {
        animalService
            .getMainAnimalsList()
            .then((data) => {
                setData(data);
            })
            .catch("ERROR: failed to receive 'mainAnimalList' from db");
    }, []);

    //used when there is a need to rerender
    useEffect(() => {
        animalService
            .getMainAnimalsList()
            .then((data) => {
                setData(data);
                setReRender(false);
            })
            .catch("ERROR: failed to receive 'mainAnimalList' from db");
    }, [reRender]);

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

    //turns on the modal window and sets the desired working tab
    const onSetModalActive = (bool, workTab) => {
        setModalActive(bool);
        setWorkTab(workTab);
    };

    //search & filter result
    const visibleData = filterAnimals(searchAnimal(data, term), filterMode);

    //conditional rendering
    const renderActiveWorkTab = (workTab) => {
        switch (workTab) {
            case "profile":
                return <Modal onSetModalActive={onSetModalActive}>{<PersonalProfile animal={{}} />}</Modal>;
                break;
            case "report":
                return (
                    <Modal onSetModalActive={onSetModalActive}>
                        <DailyReport />
                    </Modal>
                );
                break;
            default:
                console.log(`Warning: required workTab value not found (workTab = ${workTab})`);
                break;
        }
    };

    const modalWindowIsShown = modalActive ? renderActiveWorkTab(workTab) : null;

    return (
        <div className="app">
            <AppInfo data={data} />

            <div className="search-panel">
                <SearchPanel onUpdateSearch={onUpdateSearch} />
                <AppFilter filterMode={filterMode} onUpdateFilter={onUpdateFilter} />
            </div>
            <AnimalsList data={visibleData} onSetModalActive={onSetModalActive} />
            <AnimalsAddForm data={data} setReRender={setReRender} />
            {modalWindowIsShown}
        </div>
    );
};

export default App;
