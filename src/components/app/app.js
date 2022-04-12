import { useState } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import AnimalsList from "../animals-list/animals-list";
import AnimalsAddForm from "../animals-add-form/animals-add-form";
import AnimalsDeleteForm from "../animals-delete-form/animals-delete-form";
import Modal from "../modal/modal";

import "./app.css";

const App = () => {
    const [data, setData] = useState([
            { name: "Ляля", kindOfAnimal: "Морской лев", treatment: false, specialAttention: false, id: 1 },
            { name: "Чемал", kindOfAnimal: "Белый кит", treatment: false, specialAttention: false, id: 2 },
            { name: "Сева", kindOfAnimal: "Дельфин", treatment: false, specialAttention: false, id: 3 },
            { name: "Артём", kindOfAnimal: "Дельфин", treatment: false, specialAttention: false, id: 4 },
            { name: "Ая", kindOfAnimal: "Белый кит", treatment: false, specialAttention: false, id: 5 },
            { name: "Тика", kindOfAnimal: "Морж", treatment: false, specialAttention: false, id: 6 },
            { name: "Мэри", kindOfAnimal: "Морской лев", treatment: false, specialAttention: false, id: 7 },
            { name: "Нюша", kindOfAnimal: "Дельфин", treatment: false, specialAttention: false, id: 8 },
            { name: "Миша", kindOfAnimal: "Нерпа", treatment: false, specialAttention: false, id: 9 },
            { name: "Марина", kindOfAnimal: "Нерпа", treatment: false, specialAttention: false, id: 10 },
            { name: "Боб", kindOfAnimal: "Нерпа", treatment: false, specialAttention: false, id: 11 },
            { name: "Жора", kindOfAnimal: "Нерпа", treatment: false, specialAttention: false, id: 12 },
            { name: "Грызя", kindOfAnimal: "Нерпа", treatment: false, specialAttention: false, id: 13 },
            { name: "Кнопа", kindOfAnimal: "Нерпа", treatment: false, specialAttention: false, id: 14 },
            { name: "Умка", kindOfAnimal: "Нерпа", treatment: false, specialAttention: false, id: 15 },
            { name: "Пух", kindOfAnimal: "Нерпа", treatment: false, specialAttention: false, id: 16 },
            { name: "Кекс", kindOfAnimal: "Нерпа", treatment: false, specialAttention: false, id: 17 },
        ]),
        [term, setTerm] = useState(""),
        [filterMode, setFilterMode] = useState("Все"),
        [modalActive, setModalActive] = useState(false);

    //id for creating animals list item
    let maxId = 18;

    //adds animals to the list, no protecting against invalid input
    const addItem = (name, kindOfAnimal) => {
        const newItem = {
            name: name,
            kindOfAnimal: kindOfAnimal,
            treatment: false,
            specialAttention: false,
            id: maxId++,
        };

        setData([...data, newItem]);
    };

    //removes animal from the list
    const deleteItem = (name, kindOfAnimal) => {
        data.forEach((item) => {
            if (item.name === name && item.kindOfAnimal === kindOfAnimal) {
                setData(data.filter((elem) => elem.name !== name));
            }
        });
    };

    //check if an animal is on the list, returns true or false
    const checkAvailability = (name, kindOfAnimal) => {
        //construction that checks for the presence of the desired object in the array
        const itemExists = data.find((animal) => animal.name === name && animal.kindOfAnimal === kindOfAnimal);

        if (itemExists) {
            return true;
        } else {
            return false;
        }
    };

    //reverse prop value
    const onToggleProp = (id, prop) => {
        setData(
            data.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            })
        );
    };

    //searches for animals by spelling in name
    const searchAnimals = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.name.indexOf(term) > -1;
        });
    };

    const onUpdateSearch = (term) => {
        setTerm(term);
    };

    //filters the list of animals
    const filterAnimals = (items, filterMode) => {
        //filter by special attention
        if (filterMode === "Доп.наблюдение") {
            return items.filter((item) => item.specialAttention);
        }

        //filter by treatment
        if (filterMode === "На лечении") {
            return items.filter((item) => item.treatment);
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

    //udates this.filterMode
    const onUpdateFilter = (value) => {
        setFilterMode(value);
    };

    //modal
    const onModalActive = (bool) => {
        setModalActive(bool);
    };

    const totalAnimals = data.length,
        animalsOnTreatment = data.filter((item) => item.treatment).length,
        animalsOnSpecialAttention = data.filter((item) => item.specialAttention).length;

    //data displayed in the main list
    const visibleData = filterAnimals(searchAnimals(data, term), filterMode);
    return (
        <div className="app">
            <AppInfo
                totalAnimals={totalAnimals}
                animalsOnTreatment={animalsOnTreatment}
                animalsOnSpecialAttention={animalsOnSpecialAttention}
            />

            <div className="search-panel">
                <SearchPanel onUpdateSearch={onUpdateSearch} />
                <AppFilter filterMode={filterMode} onUpdateFilter={onUpdateFilter} />
            </div>

            <AnimalsList data={visibleData} onToggleProp={onToggleProp} />
            <AnimalsAddForm onAdd={addItem} onCheck={checkAvailability} onModalActive={setModalActive} />
            <AnimalsDeleteForm onDelete={deleteItem} onCheck={checkAvailability} onModalActive={setModalActive} />
            <Modal active={modalActive} onModalActive={onModalActive} />
        </div>
    );
};

export default App;
