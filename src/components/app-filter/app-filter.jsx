import "./app-filter.scss";

const AppFilter = () => {
    const buttonsData = [
        { name: "Все", label: "Все" },
        { name: "Белый кит", label: "Белые киты" },
        { name: "Дельфин", label: "Дельфины" },
        { name: "Морж", label: "Моржи" },
        { name: "Морской лев", label: "Морские львы" },
        { name: "Нерпа", label: "Нерпы" },
        { name: "Доп.наблюдение", label: "Доп.наблюдение" },
        { name: "На лечении", label: "На лечении" },
    ];

    const buttons = buttonsData.map(({ name, label }) => {
        //checking where the filter matches
        const active = false; //= filterMode === name;

        const classNames = active ? "btn-default-light" : null;

        return (
            <button type="button" className={`btn-default ${classNames}`} key={name}>
                {label}
            </button>
        );
    });

    return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
