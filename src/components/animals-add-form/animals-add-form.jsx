import { useState } from "react";

import AnimalService from "../../services/animal-service";

import "./animals-add-form.scss";

const AnimalsAddForm = ({ data, setReRender }) => {
    const [name, setName] = useState(""),
        [kindOfAnimal, setKindOfAnimal] = useState("");

    const animalService = new AnimalService();

    const onNameChange = (event) => {
        setName(event.target.value);
    };

    const onKindOfAnimalChange = (event) => {
        setKindOfAnimal(event.target.value);
    };

    //returns true/false depending on check
    const checkingPossibilityOfAdiing = () => {
        //condition that checked the general correctness of the input
        if (name.length < 2 || kindOfAnimal.length < 2) {
            console.log("Животное не добавлено: длина имени и типа животного должны состоять из 2х и более символов");
            return false;
        }

        //a condition that checks the input for correctness
        if (
            data.filter((item) => {
                if (item.name === name && item.kindOfAnimal === kindOfAnimal) {
                    return item;
                }
            }).length > 0
        ) {
            console.log("Животное не добавлено: уже есть животное такого вида с таким именем");
            return false;
        }

        return true;
    };

    const onSubmit = (event) => {
        event.preventDefault();

        //validity check
        const validEntry = checkingPossibilityOfAdiing();

        //in case of successful verification
        if (validEntry) {
            //for correct setting id
            const maxId = data.slice(-1)[0].id;

            const newAnimal = {
                id: maxId + 1,
                name: name,
                kindOfAnimal: kindOfAnimal,
                treatment: false,
                specialAttention: false,
                inDangerousState: false,
            };

            const jsonData = JSON.stringify(newAnimal);

            animalService.postData("http://localhost:3000/mainAnimalsList", jsonData);

            setReRender(true);

            console.log(`${kindOfAnimal} по кличке ${name} добавлен(а) в список животных`);
        }

        //clear form
        setName("");
        setKindOfAnimal("");
    };

    return (
        <div className="animals-add-form">
            <h3>Добавить нового</h3>
            <form className="animals-add-form__add-form" onSubmit={onSubmit}>
                <input type="text" placeholder="Имя" name="name" value={name} onChange={onNameChange} />
                <input
                    type="text"
                    placeholder="Вид"
                    name="kindOfAnimal"
                    value={kindOfAnimal}
                    onChange={onKindOfAnimalChange}
                />

                <button type="submit" className="btn-default">
                    Добавить
                </button>
            </form>
        </div>
    );
};

export default AnimalsAddForm;
