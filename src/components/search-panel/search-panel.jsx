import { useState } from "react";

import "./search-panel.scss";

const SearchPanel = (props) => {
    const [term, setTerm] = useState("");

    const onUpdateSearch = (event) => {
        const term = event.target.value;

        setTerm(term);

        props.onUpdateSearch(term);
    };

    return <input type="text" placeholder="Поиск" value={term} onChange={onUpdateSearch} />;
};

export default SearchPanel;
