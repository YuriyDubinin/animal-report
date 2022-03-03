import AnimalsListItem from "../animals-list-item/animals-list-item";

import "./animals-list.css";

const AnimalsList = ({ data }) => {
    const elements = data.map((item) => {
        return <AnimalsListItem {...item} />;
    });
    return <ul className="app-list list-group">{elements}</ul>;
};

export default AnimalsList;
