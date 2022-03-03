import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import AnimalsList from "../animals-list/animals-list";
import AnimalsAddForm from "../animals-add-form/animals-add-form";

import "./app.css";

function App() {
    //database emulation
    const data = [
        { name: "Ляля", type: "Морской лев", specialAttention: false },
        { name: "Чемал", type: "Белый кит", specialAttention: false },
        { name: "Сева", type: "Дельфин", specialAttention: true },
        { name: "Артём", type: "Дельфин", specialAttention: true },
        { name: "Ая", type: "Белый кит", specialAttention: false },
        { name: "Тика", type: "Морж", specialAttention: true },
        { name: "Мэри", type: "Морской лев", specialAttention: false },
        { name: "Нюша", type: "Дельфин", specialAttention: false },
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
