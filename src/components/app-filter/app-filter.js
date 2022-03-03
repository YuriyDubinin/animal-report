import "./app-filter.css";

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-light">
                Все
            </button>
            <button type="button" className="btn btn-outline-light">
                Белые киты
            </button>
            <button type="button" className="btn btn-outline-light">
                Дельфины
            </button>
            <button type="button" className="btn btn-outline-light">
                Моржи
            </button>
            <button type="button" className="btn btn-outline-light">
                Морские львы
            </button>
            <button type="button" className="btn btn-outline-light">
                Нерпы
            </button>
        </div>
    );
};

export default AppFilter;
