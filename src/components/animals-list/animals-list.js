import AnimalsListItem from "../animals-list-item/animals-list-item";

import "./animals-list.css";

const AnimalsList = ({ data }) => {
    const elements = data.map((item) => {
        const { id, ...itemProps } = item;

        return <AnimalsListItem key={id} {...itemProps} />;
    });
    return <ul className="app-list list-group">{elements}</ul>;
};

export default AnimalsList;
