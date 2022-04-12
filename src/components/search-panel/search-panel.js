import { useState } from "react";

import "./search-panel.css";

const SearchPanel = (props) => {
    const [term, setTerm] = useState("");

    const onUpdateSearch = (event) => {
        const term = event.target.value;

        setTerm(term);

        props.onUpdateSearch(term);
    };

    return (
        <input
            type="text"
            className="form-control search-input"
            placeholder="Поиск"
            value={term}
            onChange={onUpdateSearch}
        />
    );
};

export default SearchPanel;
