import AnimalsListItem from "../animalsListItem/AnimalsListItem";

import "./animalsList.scss";

const AnimalsList = ({ data, onSetModalActive }) => {
    const elements = data.map((item) => {
        const { id, ...itemProps } = item;
        return <AnimalsListItem key={id} id={id} {...itemProps} onSetModalActive={onSetModalActive} />;
    });

    return <ul className="animals-list">{elements}</ul>;
};

export default AnimalsList;
