import AnimalsListItem from "../animals-list-item/animals-list-item";

import "./animals-list.scss";

const AnimalsList = ({ data, onToggleProp }) => {
    const elements = data.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <AnimalsListItem
                key={id}
                {...itemProps}
                onToggleProp={(event) => {
                    onToggleProp(id, event.currentTarget.getAttribute("data-toggle"));
                }}
            />
        );
    });
    return <ul className="animals-list">{elements}</ul>;
};

export default AnimalsList;