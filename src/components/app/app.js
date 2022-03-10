import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import AnimalsList from "../animals-list/animals-list";
import AnimalsAddForm from "../animals-add-form/animals-add-form";

import "./app.css";

function App() {
    //database emulation
    const data = [
        { name: "Ляля", kindOfAnimal: "Морской лев", treatment: false, id: 1 },
        { name: "Чемал", kindOfAnimal: "Белый кит", treatment: false, id: 2 },
        { name: "Сева", kindOfAnimal: "Дельфин", treatment: true, id: 3 },
        { name: "Артём", kindOfAnimal: "Дельфин", treatment: true, id: 4 },
        { name: "Ая", kindOfAnimal: "Белый кит", treatment: false, id: 5 },
        { name: "Тика", kindOfAnimal: "Морж", treatment: true, id: 6 },
        { name: "Мэри", kindOfAnimal: "Морской лев", treatment: false, id: 7 },
        { name: "Нюша", kindOfAnimal: "Дельфин", treatment: false, id: 8 },
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <AnimalsList data={data} />
            <AnimalsAddForm />
        </div>
    );
}

export default App;
