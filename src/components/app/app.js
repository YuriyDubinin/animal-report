import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import AnimalsList from "../animals-list/animals-list";
import AnimalsAddForm from "../animals-add-form/animals-add-form";

import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //database emulation
            data: [
                { name: "Ляля", kindOfAnimal: "Морской лев", treatment: false, id: 1 },
                { name: "Чемал", kindOfAnimal: "Белый кит", treatment: false, id: 2 },
                { name: "Сева", kindOfAnimal: "Дельфин", treatment: true, id: 3 },
                { name: "Артём", kindOfAnimal: "Дельфин", treatment: true, id: 4 },
                { name: "Ая", kindOfAnimal: "Белый кит", treatment: false, id: 5 },
                { name: "Тика", kindOfAnimal: "Морж", treatment: true, id: 6 },
                { name: "Мэри", kindOfAnimal: "Морской лев", treatment: false, id: 7 },
                { name: "Нюша", kindOfAnimal: "Дельфин", treatment: false, id: 8 },
            ],
        };
        this.maxId = 9;
    }

    //adds animals to the list
    addItem = (name, kindOfAnimal) => {
        const newItem = {
            name: name,
            kindOfAnimal: kindOfAnimal,
            treatment: false,
            id: this.maxId++,
        };

        this.setState(({ data }) => ({
            data: [...data, newItem],
        }));
    };

    render() {
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <AnimalsList data={this.state.data} />
                <AnimalsAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
