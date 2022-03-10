import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import AnimalsList from "../animals-list/animals-list";
import AnimalsAddForm from "../animals-add-form/animals-add-form";

import "./app.css";

function App() {
    //database emulation
    const data = [
        { name: "Ляля", type: "Морской лев", specialAttention: false, id: 1 },
        { name: "Чемал", type: "Белый кит", specialAttention: false, id: 2 },
        { name: "Сева", type: "Дельфин", specialAttention: true, id: 3 },
        { name: "Артём", type: "Дельфин", specialAttention: true, id: 4 },
        { name: "Ая", type: "Белый кит", specialAttention: false, id: 5 },
        { name: "Тика", type: "Морж", specialAttention: true, id: 6 },
        { name: "Мэри", type: "Морской лев", specialAttention: false, id: 7 },
        { name: "Нюша", type: "Дельфин", specialAttention: false, id: 8 },
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
