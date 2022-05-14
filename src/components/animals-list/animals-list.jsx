import AnimalsListItem from "../animals-list-item/animals-list-item";

import "./animals-list.scss";

const AnimalsList = ({ data, onSetModalActive }) => {
    const elements = data.map((item) => {
        const { id, ...itemProps } = item;
        return <AnimalsListItem key={id} id={id} {...itemProps} onSetModalActive={onSetModalActive} />;
    });

    return <ul className="animals-list">{elements}</ul>;
};

export default AnimalsList;
