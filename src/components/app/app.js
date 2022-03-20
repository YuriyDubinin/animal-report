import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import AnimalsList from "../animals-list/animals-list";
import AnimalsAddForm from "../animals-add-form/animals-add-form";
import AnimalsDeleteForm from "../animals-delete-form/animals-delete-form";
import Modal from "../modal/modal";

import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //database emulation
            data: [
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
            ],

            //search by name
            term: "",

            //modal
            modalActive: false,
            modalMessage: "",
        };
        this.maxId = 18;
    }

    //adds animals to the list, no protecting against invalid input
    addItem = (name, kindOfAnimal) => {
        const newItem = {
            name: name,
            kindOfAnimal: kindOfAnimal,
            treatment: false,
            specialAttention: false,
            id: this.maxId++,
        };

        this.setState(({ data }) => ({
            data: [...data, newItem],
        }));
    };

    //removes animal from the list
    deleteItem = (name, kindOfAnimal) => {
        this.state.data.forEach((item) => {
            if (item.name === name && item.kindOfAnimal === kindOfAnimal) {
                this.setState(({ data }) => ({
                    data: data.filter((elem) => elem.name !== name),
                }));
            }
        });
    };

    //check if an animal is on the list, returns true or false
    checkAvailability = (name, kindOfAnimal) => {
        //construction that checks for the presence of the desired object in the array
        const itemExists = this.state.data.find(
            (animal) => animal.name === name && animal.kindOfAnimal === kindOfAnimal
        );

        if (itemExists) {
            return true;
        } else {
            return false;
        }
    };

    //reverse prop value
    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            }),
        }));
    };

    //searches for animals by spelling in name
    searchAnimals = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.name.indexOf(term) > -1;
        });
    };

    onUpdateSearch = (term) => {
        this.setState({ term });
    };

    //modal
    setModalActive = (bool) => {
        this.setState({
            modalActive: bool,
        });
    };

    render() {
        const { data, term } = this.state;

        const totalAnimals = data.length,
            animalsOnTreatment = data.filter((item) => item.treatment).length,
            animalsOnSpecialAttention = data.filter((item) => item.specialAttention).length;

        const visibleData = this.searchAnimals(data, term);
        return (
            <div className="app">
                <AppInfo
                    totalAnimals={totalAnimals}
                    animalsOnTreatment={animalsOnTreatment}
                    animalsOnSpecialAttention={animalsOnSpecialAttention}
                />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter />
                </div>

                <AnimalsList data={visibleData} onToggleProp={this.onToggleProp} />
                <AnimalsAddForm
                    onAdd={this.addItem}
                    onCheck={this.checkAvailability}
                    onModalActive={this.setModalActive}
                />
                <AnimalsDeleteForm
                    onDelete={this.deleteItem}
                    onCheck={this.checkAvailability}
                    onModalActive={this.setModalActive}
                />
                <Modal active={this.state.modalActive} onModalActive={this.setModalActive} />
            </div>
        );
    }
}

export default App;
